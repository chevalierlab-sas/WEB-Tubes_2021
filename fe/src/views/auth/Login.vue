<template>
  <div>
    <div class="px-10">
      <div class="flex justify-center items-center h-screen">
        <div class="card card-bordered border-2 shadow-xl w-96 h-fit">
          <div class="card-body">
            <h1 class="card-title text-center text-2zl">Login</h1>
            <form @submit.prevent="goLog">
              <div class="flex flex-col space-y-2">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-accent">Username</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Username account" 
                    class="input input-bordered"
                    v-model="formLogin.username"
                    required
                  />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-accent">Password</span>
                  </label>
                  <input 
                    type="password" 
                    placeholder="Password account" 
                    class="input input-bordered"
                    v-model="formLogin.password"
                    required
                  />
                </div>

                <button type="submit" class="btn btn-accent">Login</button>
              </div>
            </form>

            <div class="justify-center card-actions bottom-0">
              <p>
                Don't have account?
                <router-link to="/register" class="text-accent">Register </router-link> now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      formLogin: {
        username: '',
        password: ''
      }
    }
  },
}
</script>