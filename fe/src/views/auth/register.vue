<template>
  <div>
    <section class="h-screen">
      <div class="h-full text-gray-800">
        <div
          class="
            flex
            xl:justify-center
            lg:justify-between
            justify-center
            items-center
            flex-wrap
            h-full
            g-6
          "
        >
          <div
            class="
              grow-0
              shrink-1
              md:shrink-0
              basis-auto
              xl:w-6/12
              lg:w-6/12
              md:w-9/12 md:mb-0
            "
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="w-full"
              alt="Sample image"
            />
          </div>
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0">
            <form @submit.prevent="doRegister">
              <!-- Name input -->
              <div class="mb-6">
                <input
                  type="text"
                  class="
                    form-control
                    block
                    w-full
                    px-4
                    py-2
                    text-xl
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-blue-600
                    focus:outline-none
                  "
                  id="exampleFormControlInput2"
                  placeholder="Your Name"
                  v-model="formRegister.name"
                  required
                />
              </div>

              <!-- Email input -->
              <div class="mb-6">
                <input
                  type="email"
                  class="
                    form-control
                    block
                    w-full
                    px-4
                    py-2
                    text-xl
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-blue-600
                    focus:outline-none
                  "
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                  v-model="formRegister.email"
                  required
                />
              </div>

              <!-- Password input -->
              <div class="mb-6">
                <input
                  type="password"
                  class="
                    form-control
                    block
                    w-full
                    px-4
                    py-2
                    text-xl
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-blue-600
                    focus:outline-none
                  "
                  id="exampleFormControlInput2"
                  placeholder="Password"
                  v-model="formRegister.password"
                  required
                />
              </div>

              <div class="text-center lg:text-left">
                <button
                  type="submit"
                  class="
                    inline-block
                    px-7
                    py-3
                    bg-blue-600
                    text-white
                    font-medium
                    text-sm
                    leading-snug
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700
                    focus:shadow-lg
                    focus:outline-none
                    focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out
                  "
                >
                  Register
                </button>
                <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                  have an account?
                  <router-link
                    to="/login"
                    class="
                      text-red-600
                      hover:text-red-700
                      focus:text-red-700
                      transition
                      duration-200
                      ease-in-out
                    "
                    >Login</router-link
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
export default {
  name: "register",
  data () {
    return{
        formRegister: {
            name: '',
            email: '',
            password: '',
            picture: ''
        }
    }
  },
  methods: {
    doRegister(){
        createUserWithEmailAndPassword(
            getAuth(),
            this.formRegister.email,
            this.formRegister.password
        )
        .then(() =>{
            updateProfile(getAuth().currentUser, {
                displayName: this.formRegister.name
            })
                .then(() => {
                    this.$router.push({path: '/'});
                })
                .catch((err) => alert(err.message))
                
        })
        .catch((err) => alert(err.message))
    }
  }
};
</script>