<template>
    <div> 
    </div>
</template>

<script>

  export default{
    name: 'Login',
    data() {
      return {
        formLogin:{
          email: '',
          password: '',
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
        .then(()=>{
            this.$router.push({ path: '/'});
          })
          .catch((err) => alert(err.message));
      }
    }
  }
</script>