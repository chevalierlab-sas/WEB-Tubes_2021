<template>
  <!-- component -->
  <div class="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
    <div class="top h-64 w-full bg-red-700 overflow-hidden relative">
      <div class="flex flex-col justify-center items-center relative h-full bg-red-700 text-white">
        <div class="avatar pb-2">
            <div class="w-24 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img src="../assets/man.png" />
            </div>
        </div>
        <h1 class="text-2xl font-semibold">Zaid Abdullah Azzam</h1>
        <h4 class="text-sm font-semibold">D3 Rekayasa Perangkat Lunak</h4>
      </div>
    </div>
    <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
      <div class="px-4 pt-4">
        <form action="#" class="flex flex-col space-y-8">
          <div>
            <h3 class="text-2xl font-semibold">Informasi Pribadi</h3>
            <hr />
          </div>
            <div class="form-item w-full">
              <label class="text-xl">Nama Lengkap</label>
              <input type="text" value="Zaid Abdullah Azzam" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25" disabled />
            </div>
          <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div class="form-item w-full">
              <label class="text-xl">NIM</label>
              <input type="number" value="6706213055" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25" disabled />
            </div>

            <div class="form-item w-full">
              <label class="text-xl">Tempat Tinggal</label>
              <input type="text" value="Bandung" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25" disabled />
            </div>
            
          </div>

          <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div class="form-item w-full">
              <label class="text-xl">Email</label>
              <input type="email" value="zai@gmail.com" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25" disabled />
            </div>

            <div class="form-item w-full">
              <label class="text-xl">Password</label>
              <input type="password" value="zai123" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25" disabled />
            </div>
            
          </div>
              <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div class="form-item w-full">
              <label class="text-xl">Nomor Telepon</label>
              <input type="number" value="089688347718" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25" disabled />
            </div>

            <div class="form-item w-full">
              <label class="text-xl">Tanggal Lahir</label>
              <input type="" value="30 Januari 2003" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25" disabled />
            </div>
            
          </div>
        </form>
      </div>
           <div class="pl-20 pt-6 space-x-2">
             <button class=" w-full btn w-20  bg-red-700 hover:bg-grey focus:bg-red-700 border-none rounded-lg  font-semibold text-white" disabled    >Simpan</button>
             <button class=" w-full btn w-20  bg-red-700 hover:bg-grey focus:bg-red-700 border-none rounded-lg  font-semibold text-white">Ubah</button>
          </div>
    </div>
  

  </div>
</template>
<script>
export default {
  name: "Pribadi",
};
</script>
