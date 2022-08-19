<template>
  <div>
    <div class="navbar bg-base-100 px-24">
        <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">
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
              <span class="font-bold text-lg">8 Watchlist</span>
              <div class="card-actions">
                <button><router-link to="/Watchlist" class="btn btn-primary btn-block">Watchlistku </router-link></button>
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
              <span class="font-bold text-lg">8 Movie</span>
              <div class="card-actions">
                <button><router-link to="/your-rating" class="btn btn-primary btn-block">Rating Filmku </router-link></button>
              </div>
            </div>
          </div>
        </div>

<!-- login -->
      <label for="my-modal-3" class="btn modal-button">Login</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative bg-secondary">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    
                    <form>
                  <div class="flex flex-col space-y-2">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">Email</span>
                      </label>
                      <input type="email" 
                      placeholder="Your email" 
                      class="input input-bordered" 
                      
                      required/>
                    </div>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">Password</span>
                      </label>
                      <input type="password" 
                      placeholder="Your Password" 
                      class="input input-bordered" 
                      
                      required/>
                    </div>
                    <button type="submit" class="btn border-none">Login</button>
                  </div>
                </form>
                <div class="justify-center card-actions buttom-0">
                  <p>
                    Don't have an account?
                    <router-link to="/register" class="text-slate-500">Register</router-link>
                  </p>
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
import Login from "../views/auth/Login.vue";

export default {
    name: "NavBar",
    data() {
        return {
            isLogin: false,
            user: {},
        };
    },
    created() { },
    methods: {
        doLogout() {
            // getAuth().signOut()
            // .then(() => {
            //   window.location.reload();
            // })
            // .catch((err) => alert(err.message));
        },
    },
    components: { Login }
};
</script>
