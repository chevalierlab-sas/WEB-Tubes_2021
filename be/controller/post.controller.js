const response = require("../utils/responseHandler");
const { Post, User, Produk } = require("../model");
const errorHandler = require("../utils/errorHandler");

exports.create = errorHandler(async (req, res) => {
  const body = req.body;
  const post = await Post.create(body);
  return response.success(res, { data: { post }, create: true });
});

exports.all = errorHandler(async (req, res) => {
  const data = await Post.findAll({
    attributes: {
      exclude: ["user_id", "produk_id"],
    },
    include: [
      {
        model: User,
        attributes: {
          exclude: ["password"],
        },
      },
      Produk,
    ],
  });
  if (!data) {
    return response.error(res, {
      message: "Data tidak ditemukan",
      code: 404,
    });
  }
  return response.success(res, {
    data,
    message: "Berhasil mendapatkan seluruh data",
  });
});

exports.detail = errorHandler(async (req, res) => {
  const data = await Post.findOne({
    where: { title: req.params.title },
    attributes: {
      exclude: ["user_id", "produk_id"],
    },
    include: [
      {
        model: User,
        attributes: {
          exclude: ["password"],
        },
      },
      Produk,
    ],
  });
  if (!data) {
    return response.error(res, {
      message: "Data post tidak ditemukan",
      code: 404,
    });
  }
  return response.success(res, {
    data,
    message:
      "Berhasil mendapatkan data post " + req.params.title + " dari database ",
  });
});

exports.update = errorHandler(async (req, res) => {
  const params = req.params;
  const body = req.body;
  await Post.update(body, {
    where: {
      title: params.title,
    },
  });
  return response.success(res, {
    message: "Berhasil update data post",
  });
});

exports.delete = errorHandler(async (req, res) => {
  const params = req.params;
  await Post.destroy({
    where: {
      title: params.title,
    },
  });
  return response.success(res, { message: "Berhasil hapus post" });
});
