<template>
  <div>
    <div class="hero min-h-screen bg-primary-content">
      <div class="hero-content flex-col lg:flex-row py-10">
        <img src="../assets/Figure.png" class="max-w-sm rounded-lg" />
        <div>
          <h1 class="text-5xl font-bold">LAYANAN ASPIRASI & PENGADUAN MAHASISWA ONLINE</h1>
          <p class="py-6">Sampaikan laporan masalah anda disini, kami akan memprosesnya dengan cepat</p>
          <router-link to="/login" class="btn bg-red-700 border-transparent">Lapor!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Centered",
};
</script>
