const { Prisma, PrismaClient } = require("@prisma/client");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const {
  assert,
  object,
  refine,
  string,
  size,
  date,
  integer,
  enums,
} = require("superstruct");
const isEmail = require("isemail");
const moment = require("moment/moment");
const { restart } = require("nodemon");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Signup = object({
  // string and a valid email address
  email: refine(string(), "email", (v) => isEmail.validate(v)),
  // password is between 7 and 30 characters long
  password: size(string(), 7, 30),
  nim: refine(size(string(), 10, 10), "nim", (v) => isFinite(parseInt(v))),
  nama: string(),
  alamat: string(),
  lahir: date(),
  // TODO: values
  studi: string(),
  telepon: refine(size(string(), 10, 15), "telepon", (v) =>
    isFinite(parseInt(v))
  ),
});

async function throwIfDuplicate(email, nim) {
  if (email) {
    const checkDuplicateEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (checkDuplicateEmail != null) {
      throw Error("Email already registered");
    }
  }

  if (nim) {
    const checkDuplicateNim = await prisma.user.findUnique({
      where: {
        nim: nim,
      },
    });
    if (checkDuplicateNim != null) {
      throw Error("NIM already registered");
    }
  }
}

//Create User
app.post(`/signup`, async (req, res) => {
  const { nim, nama, alamat, lahir, studi, telepon, email, password } =
    req.body;
  const salt = await bcrypt.genSalt(10);

  const passwordHash = await bcrypt.hash(password, salt);

  try {
    const signupDataValidation = {
      nim,
      nama,
      alamat,
      lahir: moment.parseZone(lahir).toDate(),
      studi,
      telepon,
      email,
      password,
    };

    const signupData = {
      nim,
      nama,
      alamat,
      lahir: moment.parseZone(lahir).toDate(),
      studi,
      telepon,
      email,
      password: passwordHash,
    };

    const checkDuplicateEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    const checkDuplicateNim = await prisma.user.findUnique({
      where: {
        nim: nim,
      },
    });

    if (checkDuplicateEmail != null) {
      throw Error("Sign up failed: Email already registered");
    }
    if (checkDuplicateNim != null) {
      throw Error("Sign up failed: NIM already registered");
    }

    assert(signupDataValidation, Signup);

    const result = await prisma.user.create({
      data: signupData,
    });
    res.json(result);
  } catch (error) {
    res.send(error.message);
  }
});

async function authenticateUserMiddleware(req, res, next) {
  try {
    let token = req.headers["authorization"].split(" ")[1];
    let decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Authentication failed: " + error.message });
  }
}

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  if (user) {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      token = jwt.sign(
        { id: user.id, email: user.email, nim: user.nim },
        process.env.SECRET,
        { expiresIn: "7d" }
      );
      res.status(200).json({ token: token });
    } else {
      res
        .status(401)
        .json({ error: "Sign in failed: Incorrect email or password" });
    }
  } else {
    res
      .status(401)
      .json({ error: "Sign in failed: Incorrect email or password" });
  }
});

app.get("signout", async (req, res) => {});

// TODO: authorize role
app.get(
  "/user/:email",
  async (req, res, next) => authenticateUserMiddleware(req, res, next),
  async (req, res) => {
    const { email } = req.params;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user != null) {
      delete user.password;
      res.json(user);
    } else res.status(400).json({ msg: "Email not registered" });
  }
);

// Read User
app.get(
  "/me",
  async (req, res, next) => authenticateUserMiddleware(req, res, next),
  async (req, res) => {
    const { id } = req.user;
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      delete user.password;
      res.json(user);
    } catch (error) {
      res.status(404).json({ msg: "Error: " + error.message });
    }
  }
);

const Update = object({
  // string and a valid email address
  email: refine(string(), "email", (v) => isEmail.validate(v)),
  nim: refine(size(string(), 10, 10), "nim", (v) => isFinite(parseInt(v))),
  nama: string(),
  alamat: string(),
  lahir: date(),
  studi: string(),
  telepon: refine(size(string(), 10, 15), "telepon", (v) =>
    isFinite(parseInt(v))
  ),
});

// Update User
app.post(
  "/rest/updateuser",
  async (req, res, next) => authenticateUserMiddleware(req, res, next),
  async (req, res) => {
    const { id } = req.user;
    let { nim, nama, alamat, lahir, studi, telepon, email } = req.body;
    try {
      const unchangedUser = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      delete unchangedUser.password;

      const unchangedUserData = {
        nim: unchangedUser.nim,
        nama: unchangedUser.nama,
        alamat: unchangedUser.alamat,
        lahir: moment.parseZone(unchangedUser.lahir).toDate(),
        studi: unchangedUser.studi,
        telepon: unchangedUser.telepon,
        email: unchangedUser.telepon,
      };

      let checkEmail = email;
      let checkNim = nim;
      if (checkEmail != unchangedUser.email) await throwIfDuplicate(checkEmail);
      if (checkNim != unchangedUser.nim) await throwIfDuplicate(null, nim);

      const userData = {
        nim: (nim ??= unchangedUser.nim),
        nama: (nama ??= unchangedUser.nama),
        alamat: (alamat ??= unchangedUser.alamat),
        lahir: moment.parseZone((lahir ??= unchangedUser.lahir)).toDate(),
        studi: (studi ??= unchangedUser.studi),
        telepon: (telepon ??= unchangedUser.telepon),
        email: (email ??= unchangedUser.email),
      };

      if (unchangedUserData.toString() == userData.toString()) {
        res.status(200).json(unchangedUser);
        return;
      }

      assert(userData, Update);

      const user = await prisma.user.update({
        where: {
          id: id,
        },
        data: userData,
      });
      delete user.password;

      res.json(user);
    } catch (error) {
      res.status(402).send(error.message);
    }
  }
);

// Delete user
app.post(
  "/rest/^tJ%KqYnqv2Y7S/",
  async (req, res, next) => authenticateUserMiddleware(req, res, next),
  async (req, res) => {
    const { id } = req.user;
    try {
      const user = await prisma.user.delete({
        where: {
          id,
        },
      });
      res.status(200).json("account deletion success");
    } catch (error) {
      res.status(402).send(error.message);
    }
  }
);

const Laporan = object({
  jenis: enums(["Pengaduan", "Aspirasi"]),
  judul: string(),
  laporan: string(),
  idPelapor: integer(),
});

// Create laporan
app.post(
  "/rest/createpost",
  async (req, res, next) => authenticateUserMiddleware(req, res, next),
  async (req, res) => {
    const { id } = req.user;
    const { jenis, judul, laporan } = req.body;
    let data = {
      jenis,
      judul,
      laporan,
    };

    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      data["idPelapor"] = user.id;

      assert(data, Laporan);
      const post = await prisma.laporan.create({
        data: data,
      });
      res.json(post);
    } catch (error) {
      res.status(402).send(error.message);
    }
  }
);

// Read laporan
app.get(
  "/rest/getposts",
  async (req, res, next) => authenticateUserMiddleware(req, res, next),
  async (req, res) => {
    const { id } = req.user;
    try {
      const user = await prisma.user.findUnique({
        where: { id },
      });
      const posts = await prisma.laporan.findMany({
        where: {
          idPelapor: id,
        },
      });
      res.json(posts);
    } catch (error) {}
  }
);

// Update laporan
app.post(
  "/rest/updatepost",
  async (req, res, next) => authenticateUserMiddleware(req, res, next),
  async (req, res) => {
    const { id } = req.user;
    let { jenis, judul, laporan } = req.body;
    const postId = req.body.id;
    try {
      const unchangedPost = await prisma.laporan.findUnique({
        where: {
          id: parseInt(postId),
        },
      });

      if (unchangedPost.idPelapor != id) {
        throw Error("Laporan not owned by requester");
      }

      const unchangedPostData = {
        jenis: unchangedPost.jenis,
        judul: unchangedPost.judul,
        laporan: unchangedPost.laporan,
      };

      const postData = {
        jenis: (jenis ??= unchangedPost.jenis),
        judul: (judul ??= unchangedPost.judul),
        laporan: (laporan ??= unchangedPost.laporan),
      };

      if (unchangedPostData.toString() == postData.toString()) {
        res.status(200).json(unchangedPost);
        return;
      }

      assert(postData, Laporan);

      const user = await prisma.post.update({
        where: {
          id: postId,
        },
        data: postData,
      });

      res.json(post);
    } catch (error) {
      res.status(402).send(error.message);
    }
  }
);

// Delete laporan
app.post(
  "/rest/deletepost",
  async (req, res, next) => authenticateUserMiddleware(req, res, next),
  async (req, res) => {
    const { id } = req.user;
    try {
      const postId = req.body.id;
      const postIdValidation = parseInt(req.body.id);

      assert({ postId }, object({ postId: integer() }));

      const post = await prisma.laporan.findUnique({
        where: {
          id: postId,
        },
      });
      if (post) {
        await prisma.laporan.delete({
          where: {
            id: postId,
          },
        });
        res.send("Laporan deletion success");
      } else {
        throw Error("Laporan not found");
      }
    } catch (error) {
      res.status(402).send(error.message);
    }
  }
);

const server = app.listen(8051, () =>
  console.log(`
🚀 Server ready at: http://localhost:8051
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
