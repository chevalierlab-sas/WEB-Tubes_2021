<template>
    <div class="px-2 sm:px-24">

        <h1 class="text-start text-2xl font-bold m-2">Halaman Penjualan</h1>
        <!-- The button to open modal -->
        <label for="jualModal" class="btn modal-button btn-primary">Buat Penjualan</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="jualModal" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box">
                <label for="jualModal" class="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</label>
                <h3 class="font-bold text-lg text-center">Jual Barang Anda</h3>
                <form @submit.prevent="addJual">
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Nama Barang</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Jenis Barang</span>
                        </label>
                        <select class="select select-bordered w-full max-w-xs">
                            <option disabled selected>Jenis Barang</option>
                            <option>Sepatu</option>
                            <option>Baju</option>
                            <option>Celana</option>
                            <option>Topi</option>
                            <option>Accesories</option>
                        </select>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Ukuran</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Kondisi</span>
                        </label>
                        <label class="input-group">
                            <input type="text" placeholder="90" class="input input-bordered" />
                            <span class="bg-primary">%</span>
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Harga</span>
                        </label>
                        <label class="input-group">
                            <span class="bg-primary">Rp</span>
                            <input type="text" placeholder="100000" class="input input-bordered" />
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Lokasi</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Contact Person</span>
                        </label>
                        <label class="input-group">
                            <span class="bg-primary">+62</span>
                            <input type="number" placeholder="82212345678" class="input input-bordered" />
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Keterangan</span>
                        </label>
                        <textarea class="textarea textarea-bordered h-24" placeholder="Keterangan"></textarea>
                    </div>
                    <div class="justify-center">    
                        <div class="rounded-lg shadow-xl">
                            <div class="m-4 py-8">
                                   <label class="inline-block mb-4">File Upload</label>
                                <div class="flex items-center justify-center w-full">
                                    <label
                                        class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                        <div class="flex flex-col items-center justify-center pt-7">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="w-8 h-8 text-gray-400 group-hover:text-gray-600" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <p
                                                class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                Attach a file</p>
                                        </div>
                                        <input type="file" class="opacity-0" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-action">
                        <button class="btn btn-primary hover:text-white">Selesai</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TitipJual"
}
</script>

<style>
</style>