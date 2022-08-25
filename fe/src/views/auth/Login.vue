<template>
  <div>
    <!-- component -->
    <div class="flex items-center min-h-screen p-4 bg-gray-200 lg:justify-center">
      <div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div class="p-4 py-6 text-white bg-white-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center items-center text-center md:justify-evenly">
          <div class="my-3 text-4xl font-bold tracking-wider text-center items-center">
            <a class="w-8 pl-12 items-center"><img src="../../assets/Group_58.png " alt="" /></a>
            <h1 class="text-sm font-bold text-center text-black tracking-wide">LAPORAN ASPIRASI PENGADUAN ONLINE MAHASISWA</h1>
          </div>
          <a><img class="w-40 rounded-lg px-8" src="../../assets/Figure.png" /></a>
          <p class="mt-8 text-black"></p>

          <p class="flex flex-col text-black items-center justify-center mt-10 text-center">
            Tidak mempunyai akun ? <a> <router-link to="/register" class="cursor-pointer underline hover:underline-offset-4 text-sm text-white-600"> Daftar akun</router-link></a>
          </p>
        </div>
        <div class="p-5 bg-red-700 md:flex-1">
          <br />
          <br />

          <div class="pb-2 pt-4">
            <label class="block text-3xl text-md mb-2 text-left px-2 text-white" for="password">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" class="input input-bordered input-error w-full max-w-xl" />
          </div>
          <div class="pb-2 pt-4">
            <label class="block text-3xl text-md mb-2 text-left text-white px-2" for="password">Kata Sandi</label>
            <input class="input input-bordered input-error w-full max-w-xl" type="password" name="password" id="password" placeholder="Password" />
          </div>
          <div class="flex justify-between px-2">
            <label class="block text-white py-4">
              <input type="checkbox" checked="checked" class="checkbox checkbox-sm bg-base-100" />
              <span class="py-12 text-sm text-white leading-snug"> Ingatkan Saya </span></label
            >
            <label class="block text-gray-500 my-4">
              <a href="#" class="cursor-pointer tracking-tighter text-white border-gray-200 hover:border-gray-400"> <span>Lupa Kata Sandi?</span></a></label
            >
          </div>
          <br />
          <div class="px-20 pb-2 pt-4">
            <button class="btn btn-wide bg-base-100 text-black font-bold border-transparent">MASUK</button>
          </div>
          <!-- <form action="#" class="flex flex-col space-y-5">
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">Email address</label>
              <input type="email" id="email" autofocus class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
              </div>
              <input type="password" id="password" class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
            </div>
            <div class="flex items-center space-x-2">
              <input type="checkbox" id="remember" class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
              <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
            </div>
            <div>
              <button type="submit" class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">Log in</button>
            </div>
            <div class="flex flex-col space-y-5">
              <span class="flex items-center justify-center space-x-2">
                <span class="h-px bg-gray-400 w-14"></span>
                <span class="font-normal text-gray-500">or login with</span>
                <span class="h-px bg-gray-400 w-14"></span>
              </span>
              <div class="flex flex-col space-y-4">
                <a href="#" class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none">
                  <span>
                    <svg class="w-5 h-5 text-gray-800 fill-current group-hover:text-white" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </span>
                  <span class="text-sm font-medium text-gray-800 group-hover:text-white">Github</span>
                </a>
                <a href="#" class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none">
                  <span>
                    <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                      <path
                        d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                      ></path>
                    </svg>
                  </span>
                  <span class="text-sm font-medium text-blue-500 group-hover:text-white">Twitter</span>
                </a>
              </div>
            </div>
          </form> -->
        </div>
      </div>
    </div>

    <!-- <body>
      <section class="min-h-screen flex items-stretch text-black">
        <div class="lg:flex w-1/2 bg-no-repeat bg-cover relative">
          <div class="absolute bg-white opacity-60 inset-0 z-0"></div>
          <div class="w-full px-12 z-10">
            <h1 class="w-2/6 py-5"><img src="../../assets/Group_58.png " alt="" /></h1>
            <div class="px-12">
              <br />
              <h1 class="text-2xl font-bold text-center tracking-wide">LAPORAN ASPIRASI PENGADUAN ONLINE MAHASISWA</h1>
            </div>
            <br />
            <img class="max-w-sm rounded-lg pl-48" src="../../assets/Figure.png" />
          </div>

          <div class="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4"></div>
        </div>
        <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-red-800">
          <div
            class="absolute lg:hidden z-10 inset-0 bg-secondary-content bg-no-repeat bg-cover items-center"
            style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)"
          >
            <div class="absolute bg-red-700 opacity-60 inset-0 z-0"></div>
          </div>
          <div class="w-full py-6 z-20">
            <form action="" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
              <div class="pb-2 pt-4">
                <label class="block text-3xl text-md mb-2 text-left px-2 text-white" for="password">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" class="input input-bordered input-error w-full max-w-xl" />
              </div>
              <div class="pb-2 pt-4">
                <label class="block text-3xl text-md mb-2 text-left text-white px-2" for="password">Kata Sandi</label>
                <input class="input input-bordered input-error w-full max-w-xl" type="password" name="password" id="password" placeholder="Password" />
              </div>
              <div class="flex justify-between px-2">
                <label class="block text-white py-4">
                  <input type="checkbox" checked="checked" class="checkbox checkbox-sm bg-base-100" />
                  <span class="py-12 text-sm text-white leading-snug"> Ingatkan Saya </span></label
                >
                <label class="block text-gray-500 my-4">
                  <a href="#" class="cursor-pointer tracking-tighter text-white border-gray-200 hover:border-gray-400"> <span>Lupa Kata Sandi?</span></a></label
                >
              </div>

              <div class="px-4 pb-2 pt-4">
                <button class="btn btn-wide bg-base-100 text-black font-bold border-transparent">MASUK</button>
              </div>
            </form>
            <p class="mt-8 text-white">
              Tidak mempunyai akun ? <a> <router-link to="/register" class="cursor-pointer underline hover:underline-offset-4 text-sm text-white-600"> Daftar akun</router-link></a>
            </p>
          </div>
        </div>
      </section>
    </body> -->
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
