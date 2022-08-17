<template>
  <div>
    <NavBar></NavBar>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "AppLayout",
  components: { NavBar },
};
</script>

<style>
</style>
