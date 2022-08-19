<template>
  <div>
    <div class="navbar bg-base-100 px-24">
        <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">
      <img src="../assets/logo.svg" alt="logo" class="rounded-full p-1">
      ChevaMovie</a>
  </div>

      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost">
            <p class="font-medium">Watchlist</p>
            <div class="indicator">
              <lord-icon
    src="https://cdn.lordicon.com/ooflgrcu.json"
    trigger="hover"
    colors="primary:#e88c30"
    state="hover-1"
    style="width:24px;height:24px">
        </lord-icon>
              <span class="badge badge-sm indicator-item">8</span>
            </div>    
          </label>
          <div
            tabindex="0"
            class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body">
              <span class="font-bold text-lg">8 Items</span>
              <span class="text-info">Subtotal: $999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
                
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost">
            <p class="font-medium">Rating</p>
            <div class="indicator">
              <lord-icon
    src="https://cdn.lordicon.com/mdgrhyca.json"
    trigger="morph"
    colors="primary:#e8b730,secondary:#e88c30"
    style="width:32px;height:32px">
              </lord-icon>
              <span class="badge badge-sm indicator-item">8</span>
            </div>    
          </label>
          <div
            tabindex="0"
            class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body">
              <span class="font-bold text-lg">8 Items</span>
              <span class="text-info">Subtotal: $999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>



        <!-- avatar -->
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  name: "NavBar",
  data() {
    return {
      isLogin: false,
      user: {},
    };
  },
  created() {},
  methods: {
    doLogout() {
      // getAuth().signOut()
      // .then(() => {
      //   window.location.reload();
      // })
      // .catch((err) => alert(err.message));
    },
  },
};
</script>
