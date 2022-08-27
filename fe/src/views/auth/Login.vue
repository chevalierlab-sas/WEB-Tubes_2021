<template>
    <div class="bg-gray-500">
      <div class="px-10 ">
        <div class="flex justify-center items-center h-screen ">
            <div class="card card-bordered border-2 shadow-xl w-96 h-fit">
                <div class="card-body bg-white">
                    <h1 class="card-tittle text-center text-2xl">Login</h1>
                    <form @submit.prevent="doLogin">
                        <div class="flex flex-col space-y-2">
                            <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input 
                        type="email" 
                        placeholder="Your email" 
                        class="input input-bordered" 
                        v-model="formLogin.email"
                        required
                        />
                        </div>
                        <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                            
                        </label>
                        <input 
                        type="password"
                        placeholder="Your password" 
                        class="input input-bordered" 
                        v-model="formLogin.password"
                        required
                        />
                        </div>
                        <button type="submit" class="btn bg-blue-800 borer-none hover:bg-blue-600">
                            Login
                        </button>
                        </div>
                    </form>
                    <div class="justify-center card-actions bottom-0">
                        <p>
                            Don't have an account?
                            <router-link to="/register" class="text-blue-800">Register</router-link>
                        </p>
                        <p>Kembali ke beranda?
                            <router-link to= "/" class="text-red-800">Kembali</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>

</template>

<script>
import{ getAuth, signInWithEmailAndPassword } from 'firebase/auth';
    export default{
        name: 'Login',
        data(){
            return{
            formLogin:{
                email: '',
                password: ''
            }
        }
    },
    methods:{
        doLogin(){
            signInWithEmailAndPassword(
            getAuth(),
            this.formLogin.email,
            this.formLogin.password
            )
            .then(() => {
                this.$router.push({ path: '/' })
            })
            .catch((err) => alert(err.message));
        }
    }
}
</script>