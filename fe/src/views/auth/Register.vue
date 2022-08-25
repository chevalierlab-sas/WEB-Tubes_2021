<template>
  <div>
    <!-- component -->

    <div class="min-w-screen min-h-screen bg-red-700 flex items-center justify-center px-5 py-5">
      <div class="bg-primary-content text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden items-center" style="max-width: 1000px">
        <div class="md:flex w-full items-center bg-white-700">
          <div class="w-full py-6 px-5 md:px-10">
            <div class="text-center mb-10">
              <h1 class="font-bold text-3xl text-black">DAFTAR</h1>
              <br />
              <hr align="center" width="922px" style="border: 1px #000000 solid" />
              <img src="../../assets/Group_58.png " class="px-80 pt-4 w-1/18" alt="" />
            </div>
            <div>
              <div class="flex -mx-3">
                <div class="w-1/2 px-3 mb-5">
                  <label for="" class="text-xs font-semibold px-1 text-lg text-black">NIM</label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                    <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-black outline-none focus:border-red-500" placeholder="" />
                  </div>
                </div>
                <div class="w-1/2 px-3 mb-5 text-black">
                  <label for="" class="text-xs font-semibold px-1 text-lg text-black">Nama Lengkap</label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                    <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-black outline-none focus:border-red-500" placeholder="" />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-1/2 px-3 mb-5">
                  <label for="" class="text-xs font-semibold px-1 text-lg text-black">Tempat Tinggal</label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                    <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-black outline-none focus:border-red-500" placeholder="" />
                  </div>
                </div>
                <div class="w-1/2 px-3 mb-5">
                  <label for="" class="text-xs font-semibold px-1 text-lg text-black">Tanggal Lahir</label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                    <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-black outline-none focus:border-red-500" placeholder="" />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-1/2 px-3 mb-5">
                  <label for="" class="text-xs font-semibold px-1 text-lg text-black">Program Studi</label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                    <select class="select border-2 border-black w-full -ml-10 pl-10 pr-3 py-2 focus:border-red-500">
                      <option class="" disabled selected>Pilih Jurusan</option>
                      <option class="text-black border-black">RPLA</option>
                      <option class="text-black border-black">Informatika</option>
                      <option class="text-black border-black">Akuntasi</option>
                      <option class="text-black border-black">Sistem Informasi</option>
                    </select>
                  </div>
                </div>
                <div class="w-1/2 px-3 mb-5">
                  <label for="" class="text-xs font-semibold px-1 text-lg text-black">No. Telp Aktif</label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                    <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-black outline-none focus:border-red-500" placeholder="" />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-5">
                  <label for="" class="text-xs font-semibold px-1 text-lg text-black">Email</label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                    <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-black outline-none focus:border-red-500" placeholder="LASPOM@example.com" />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-12">
                  <label for="" class="text-xs font-semibold px-1 text-lg text-black">Password</label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                    <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-black outline-none focus:border-red-500" placeholder="************" />
                  </div>
                </div>
              </div>
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-5">
                  <button class="block w-full btn btn-wide max-w-xl mx-auto bg-red-700 hover:bg-grey focus:bg-red-700 border-none rounded-lg px-3 py-3 font-semibold text-white">DAFTAR SEKARANG</button><br />

                  <br />
                  <hr align="center" width="922px" style="border: 1px #000000 solid" />
                  <p class="block text-center mt-8 text-black font-semibold">
                    Sudah punya akun ? <a> <router-link to="/login" class="cursor-pointer underline hover:underline-offset-4 text-sm text-red-700 px-2"> Masuk</router-link></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>
