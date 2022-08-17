<template>
  <div>
    <div class="px-10">
      <div class="flex justify-center items-center h-screen">
        <div class="card card-bordered border-2 shadow-xl w-96 h-fit">
          <div class="card-body">
            <h1 class="card-title text-center text-2xl">Register</h1>
            <form @submit.prevent="register">
              <div class="flex flex-col space-y-2">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input type="text" v-model="name" required placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input type="email" v-model="email" required placeholder="Your email" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input type="password" v-model="password" required placeholder="Your password" class="input input-bordered w-full max-w-xs" />
                </div>
                <button type="submit" class="btn btn-primary border-none hover:bg-secondary hover:text-white">Register</button>
              </div>
            </form>
            <div class="justify-center card-actions bottom-0">
              <p>
                Already have an account?
                <router-link to="/login" class="text-primary">Login</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '../../services/AuthenticationService';
export default {
  name: 'Register',
  data(){
    return{
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async register(){
      const response = await AuthenticationService.register({
        name: this.name,
        email: this.email,
        password: this.password
      })
      console.log(response.data);
      
    }
  }

}
</script>

<style>

</style>