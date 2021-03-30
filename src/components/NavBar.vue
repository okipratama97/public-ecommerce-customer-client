<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">E-Shop</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="catalogue">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="cart">Cart</a>
      </li>
    </ul>
    <div class="block-inline">
      <button v-if="token" class="btn btn-danger"  @click.prevent="logout">
        Logout
      </button>
    </div>
  </div>
</nav>

</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    catalogue () {
      this.$router.push('/')
    },
    cart () {
      this.$router.push('/carts')
    }
  },
  computed: {
    token () {
      return localStorage.access_token
    }
  }
}
</script>

<style>

</style>
