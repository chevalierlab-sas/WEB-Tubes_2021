<template>
    <div>
      <nav-bar class="sticky top-0 z-10"></nav-bar>
        <div class="px-24">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
  import NavBar from '../components/NavBar.vue'
  import Footer from '../components/Footer.vue';
  export default{
    name: 'AppLayout',
    components: {
      NavBar,
      Footer
    }
  }
</script>