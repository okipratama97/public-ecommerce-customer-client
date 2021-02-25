<template>
  <div class="col-4">
    <div class="card p-card">
      <img class="login-image card-img-top product-image mx-auto" :src="cart.Product.image_url" alt="">
      <div class="card-body">
        <h4 class="card-title">{{cart.Product.name}}</h4>
        <p>Rp. {{cart.Product.price}}</p>
        <p>Quantity: {{cart.quantity}}</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-success" :id="cart.Product.id" @click.prevent="addToCart(cart.Product.id)">Add More</button> || <button class="btn btn-danger" @click.prevent="removeCart(cart.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Object
  },
  methods: {
    removeCart (id) {
      this.$store.dispatch('removeCart', id)
    },
    addToCart (id) {
      this.$store.dispatch('addToCart', id)
    }
  }
}
</script>

<style>
.product-image {
  max-width: 150px;
}
.p-card {
  min-width: 250px;
}
</style>
