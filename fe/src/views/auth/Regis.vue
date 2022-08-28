<template>
  <div>
    <div class="px-10">
      <div class="flex justify-center items-center h-screen">
        <div class="card card-bordered border-2 shadow-xl w-96 h-fit">
          <div class="card-body">
            <h1 class="card-title text-center text-2zl">Register</h1>
            <form @submit.prevent="goReg">
              <div class="flex flex-col space-y-2">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-accent">Username</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Username account" 
                    class="input input-bordered"
                    required
                    v-model="formRegis.username"
                  />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-accent">Password</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Password account" 
                    class="input input-bordered"
                    required
                    v-model="formRegis.password"
                  />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-accent">Confirm Password</span>
                  </label>
                  <input 
                    type="password" 
                    placeholder="Confirm password account" 
                    class="input input-bordered"
                    required
                    v-model="formRegis.confirmpass"
                  />
                </div>

                <button type="submit" class="btn btn-accent">Register</button>
              </div>
            </form>

            <div class="justify-center card-actions bottom-0">
              <p>
                Already have accouont? Go to
                <router-link to="/login" class="text-accent">Login</router-link>
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
  name: 'Register',
  data() {
    return {
      formRegis: {
        username: '',
        password: '',
        confirmpass: '',
      }
    }
  },
}
</script>