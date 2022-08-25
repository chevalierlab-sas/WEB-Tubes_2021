<template>
  <div>
    <div class="navbar bg-blue-500 text-white shadow-lg px-5 ">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Solution</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/creation">Creation</router-link></li>
        </ul>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <ul
          tabindex="0"
          class="
            menu menu-compact
            dropdown-content
            mt-3
            p-2
            shadow
            bg-base-100
            rounded-box
            w-52
            text-black
          "
        >
          <li>
            <a class="justify-between">
              Profil
            </a>
          </li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import { getAuth } from '@firebase/auth';
    export default {
        name: 'navbar',
        data () {
          return{
            isLogin: false,
            user: {}
          }
        },
        created() {
          const user = getAuth().cur
        }

    };
</script>