<template>
    <div class="navbar sticky bg-gray-500 text-white shadow-lg px-20">
  <div class="navbar-end lg:navbar-start">
         <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-2">
        <li><router-link to= "/" class="btn btn-ghost">Beranda</router-link></li>
        <li><router-link to= "/lowongan" class="btn btn-ghost ml-4">Lowongan</router-link></li>
        <li><router-link to= "/forum" class="btn btn-ghost ml-4">Forum</router-link></li>
        <!-- <li v-if="isLogin">
          <a class="btn btn-ghost" @click.prevent="doLogout">
            {{ user.displayName }}(Logout)
            </a>
        </li>
        <li v-else><router-link to= "/login" class="btn btn-ghost">Login</router-link></li> -->
    </ul>
  </div>   
    
  </div>
  <div class="dropdown pr-20">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" 
        fill="none" viewBox="0 0 24 24" stroke="currentColor"><path 
        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><router-link to= "/" class="btn btn-ghost text-black">Beranda</router-link></li>
        <li><router-link to= "/lowongan" class="btn btn-ghost text-black">Lowongan</router-link></li>
        <li><router-link to= "/forum" class="btn btn-ghost text-black">Forum</router-link></li>
        <li><router-link to= "/login" class="btn btn-ghost text-black">Login</router-link></li>
        </ul>
    </div>
  <div class="px-40">
    <a v-if="isLogin"><a class="btn btn-ghost text-white bg-blue-800 border-none hover:bg-red-600"
    @click.prevent="doLogout">
      {{ user.displayName}}(Logout)
    </a></a>
    <a v-else><router-link to= "/login" class="btn btn-ghost hidden 
    lg:flex text-white bg-blue-800 border-none hover:bg-blue-600 
    rounded-2 px-5">Login/Register</router-link></a>
  </div>
  <a class="btn btn-ghost normal-case text-xl w-16 md:w-32 lg:w-48">WorkFounder</a>
</div>
</template>

<script>
  import { getAuth } from '@firebase/auth';

  export default{
    name: 'NavBar',
    data() {
      return{
        isLogin: false,
        user: {}
      }
    },
    created(){
      const user = getAuth().currentUser;
      if(user !== null){
        this.isLogin = true;
        this.user = user
      }
    },
    methods: {
      doLogout(){
        getAuth()
        .signOut()
        .then(() => {
          window.location.reload()
        })
        .catch((err) => alert(err.message));
      }
    }
  }
</script>