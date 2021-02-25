<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="register-main col-xl-6">
          <div class="card">
            <img class="register-image card-img-top" src="https://image.freepik.com/free-vector/store-with-credit-card-gift-boxes-buyers-illustration_1262-18980.jpg" alt="">
            <div class="card-body">
              <h4 class="card-title">Register</h4>
              <form class="form" @submit.prevent="register">
                <div class="row justify-content-center">
                  <div class="form-group col-xl-9">
                    <input v-model="registerEmail" type="email" class="form-control" name="email" id="email" aria-describedby="email" placeholder="Enter your email">
                  </div>
                  <div class="form-group col-xl-9">
                    <input v-model="registerPassword" type="password" class="form-control" name="password" id="password" placeholder="Enter your password">
                  </div>
                  <div class="form-group col-xl-6">
                    <button type="submit" class="btn btn-primary">Register</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <small id="singup" class="form-text">have account? <a @click.prevent="loginPage" href="#">Login here!</a></small>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Register',
  components: {
  },
  data () {
    return {
      registerEmail: '',
      registerPassword: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('registerUser', { registerEmail: this.registerEmail, registerPassword: this.registerPassword })
    },
    loginPage () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
img.register-image {
  border-radius: 20%;
  width: 400px;
  margin:0 auto;
}

.register-main {
  margin-top: 50px;
}
</style>
