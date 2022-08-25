<template>
<div class="overflow-x-auto">
    <div class="title">
     <h1 class="pb-2 pt-2 font-semibold text-xl text-center pr-2 text-black">Daftar Laporan </h1>
    </div>
  <table class="table table-zebra w-full">
    <!-- head -->
    <thead>
      <tr>
        <th>No</th>
        <th>Judul</th>
        <th>Laporan</th>
        <th>Bukti Laporan</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>1</th>
        <td>Proyektor Lab 4 Rusak</td>
        <td>Telah di rusak oleh mahasiswa bernama Anu</td>
        <td>https://drive.google.com/file/d/1eP6jdAByFqOc9Wn32RMiVHJ1zDVqAkqa/</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <th>2</th>
        <td>Proyektor Lab 4 Rusak</td>
        <td>Telah di rusak oleh mahasiswa bernama Anu</td>
        <td>https://drive.google.com/file/d/1eP6jdAByFqOc9Wn32RMiVHJ1zDVqAkqa/</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td>Proyektor Lab 4 Rusak</td>
        <td>Telah di rusak oleh mahasiswa bernama Anu</td>
        <td>https://drive.google.com/file/d/1eP6jdAByFqOc9Wn32RMiVHJ1zDVqAkqa/</td>
      </tr>
    </tbody>
  </table>
  <div class="pt-5 pb-5 space-x-2">
    <button class="btn btn-active bg bg-red-700">Ubah</button>
    <button class="btn btn-active bg bg-red-700">Simpan</button>
    <button class="btn btn-active bg bg-red-700">Hapus</button>

  </div>


</div>
</template>
<script>
export default {
  name: "Reporting",
};
</script>