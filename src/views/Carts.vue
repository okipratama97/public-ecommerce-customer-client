<template>
  <div>
    <NavBar />
    <div class="my-3">
      <h1>Carts</h1>
    </div>
    <div class="container col-12">
      <div class="row justify-content-center">
        <div class="row">
          <Cart v-for="cart in carts" :key="cart.id" :cart="cart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Cart from '../components/Cart.vue'

export default {
  components: { NavBar, Cart },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  watch: {
    carts () {
      console.log('ch')
    }
  },
  created () {
    this.$store.dispatch('fetchAllCarts')
  }
}
</script>
