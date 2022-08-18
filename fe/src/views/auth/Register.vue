<template>
    <div>
        <div class="px-10">
          <div class="flex justify-center items-center h-screen">
            <div class="card card-bordered border-2 shadow-xl w-96 h-fit">
              <div class="card-body">
                <h1 class="card-title text-center text-2xl">Register</h1>
                <form @submit.prevent="doRegister">
                  <div class="flex flex-col space-y-2">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">Name</span>
                      </label>
                      <input 
                      type="text"
                      placeholder="Your Name" 
                      class="input input-bordered"
                      v-model="formRegister.name"
                      required/>
                    </div>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">Email</span>
                      </label>
                      <input 
                      type="email" 
                      placeholder="Your email" 
                      class="input input-bordered" 
                      v-model="formRegister.email" 
                      required/>
                    </div>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">Password</span>
                      </label>
                      <input 
                      type="password" 
                      placeholder="Your Password" 
                      class="input input-bordered" 
                      v-model="formRegister.password"
                      required/>
                    </div>
                    <button type="submit" class="btn bg-orange-400 border-none hover:bg-orange-500">Register</button>
                  </div>
                </form>
                <div class="justify-center card-actions buttom-0">
                  <p>
                    Have an account?
                    <router-link to="/login" class="text-orange-400">Login</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
  export default{
    name: 'Register',
    data() {
      return {
        formRegister: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      doRegister(){
        // console.log(this.formRegister)
        createUserWithEmailAndPassword(
          getAuth(),
          this.formRegister.email,
          this.formRegister.password
        )
        .then(() =>{
          updateProfile(getAuth().currentUser,{
            displayName: this.formRegister.name
          })
          .then(()=>{
            this.$router.push({ path: '/'});
          })
          .catch((err) => alert(err.message));
        })
        .catch((err) => alert(err.message));
      }
    },
  }
</script>