<template>
  <div class="customer-form">
    <div class="flex flex-col w-full ">
      <div class="grid flex-grow h-800 card bg-red-600 my-6 rounded-box place-items-start">
        <!-- component -->
        <body class="text-gray-900 rounded-lg">
          <div class="mx-18 card max-w-lg p-4 md:rounded-lg mx-auto">
            <div class="title">
              <h1 class="pb-2 font-bold text-xl text-center pr-2 text-white">Laporkan Aspirasi || Laporkan Pengaduan </h1>
            </div>

            <div class="options md:flex md:space-x-8 text-sm items-center text-gray-700 mt-4 rounded-sm">
              <select class="select select-bordered w-full border border-red-400 focus:border-red-400 focus:outline-red-400">
                <option value="select" selected>Pilih Pelaporan</option>
                <option value="bug">Pengaduan</option>
                <option value="feature">Aspirasi</option>
              </select>

            </div>
  <!-- <div class="customer-form">
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="name">Nama</label>
        <input type="text" v-model="customer.name" class="form-control" placeholder="Masukan nama pelanggan">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" v-model="customer.email" class="form-control" placeholder="Masukan email pelanggan">
      </div>
      <div class="form-group">
        <label for="address">Alamat</label>
        <textarea type="text" v-model="customer.address" class="form-control" 
          placeholder="Masukan alamat pelanggan"> </textarea>
      </div>
      <button type="submit" class="btn btn-primary mr-2">Submit</button>
      <button class="btn btn-danger" type="button" data-toggle="collapse" data-target="#collapseExample">
        Cancel
        </button>
    </form>
  </div> -->
            <div class="form mt-4">
              <div class="flex flex-col text-sm">
                <label for="title" class="font-semibold mb-2 text-white">Judul :</label>
                <input type="text" placeholder="" class="appearance-none input bg-white-200 input-bordered input-error w-full p-2" />
              </div>

              <div class="text-sm flex flex-col">
                <label for="description" class="font-semibold mt-4 mb-2 text-white">Laporan</label>
          
                <textarea class="textarea textarea-error p-2 h-40 appearance-none border border-red-400 bg-white-200" placeholder=""></textarea>
              </div>

              <div class="flex flex-col text-sm">
                <label for="title" class="font-semibold mb-2 mt-4 text-white">Bukti Laporan</label>
                <input type="text" placeholder="Link drive" class="appearance-none input bg-white-200 input-bordered input-error w-full p-2" />
              </div>
            </div>

            <div class="submit">
              <!-- <button type="submit" class="w-full bg-blue-600 shadow-lg text-white px-4 py-2 hover:bg-blue-700 mt-8 text-center font-semibold focus:outline-none">Submit</button> -->
              <button class="w-full btn btn-wide tex-2xl bg-base-100 text-black font-semibold border-transparent  mt-8 active:bg-red-200">Laporkan</button>
            </div>
          </div>
        </body>
      </div>
      <div class="divider lg:divider-horizontal"></div>
      <!-- component -->
      <!-- <div class="sm:max-w-lg w-full p-10 bg-red-600 my-12 rounded-xl z-10">
        <div class="text-center">
          <h2 class="mt-0 text-3xl font-semibold text-white">Bukti Laporan!</h2>
        </div>
        <form class="mt-8 space-y-3" action="#" method="POST">
          <div class="grid grid-cols-1 space-y-2">
            <label class="text-sm font-bold text-white tracking-wide">Lampirkan Dokumen</label>
            <div class="flex items-center justify-center w-full">
              <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div class="h-full w-full text-center flex flex-col items-center justify-center items-center">
                  <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                
                  </div>
                  <p class="pointer-none text-black">
                    <span class="text-sm">Seret dan Lepas</span> file di sini <br />
                    atau <a href="" id="" class="text-white hover:underline">pilih file</a> dari komputer Anda
                  </p>
                </div>
                <input type="file" class="hidden" />
              </label>
            </div>
          </div>
          <p class="text-sm text-gray-300">
            <span>Jenis file: doc,pdf, jenis gambar</span>
          </p>
          <div>
            <label class="block text-white pt-5">
              <input type="checkbox" checked="checked" class="checkbox checkbox-sm bg-base-100" />
              <span class="text-sm text-white leading-snug"> Sembunyikan Identitas </span></label
            >
            <label class="block text-white">
              <input type="checkbox" checked="checked" class="checkbox checkbox-sm bg-base-100" />
              <span class="py-12 text-sm text-white leading-snug"> Atur Sebagai Pribadi </span></label
            >
            <button
              type="submit"
              class="w-full btn btn-wide bg-base-100 text-black font-bold border-transparent mt-8 p-4 rounded-full tracking-wide font-bold focus:outline-none focus:shadow-outline hover:bg-gray shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Unggah
            </button>
          </div>
        </form>
      </div> -->
            <!-- <textarea class="w-full bg-gray-200 textarea textarea-error focus:outline-none focus:border-gray-500" placeholder="Enter your description"></textarea> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Reporting",
  data(){
    return {
      mahasiswa: {
        judul: '',
        laporan: '',
        bukti: '',
      }
    }
  },
  methods: {
    submit() {
      this.$emit('add-mahasiswa', this.mahasiswa)
      this.mahasiswa = {
        judul: '',
        laporan: '',
        bukti: '',
      }
    }
  }
};
</script>
