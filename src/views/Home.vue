<template>
  <div>
    <NavBar />
    <div class="my-3">
      <h1>Products</h1>
    </div>
    <div class="container col-12">
      <div class="row justify-content-center">
        <div class="row">
          <Product v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Product from '../components/Product.vue'

export default {
  components: { NavBar, Product },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchAllProducts')
  }
}
</script>
