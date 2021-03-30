<template>
  <div class="col-md-auto">
    <div class="card p-card">
      <img class="login-image card-img-top product-image mx-auto" :src="cart.Product.image_url" alt="">
      <div class="card-body">
        <h4 class="card-title">{{cart.Product.name}}</h4>
        <p>Rp. {{cart.Product.price}}</p>
        <p>Quantity: {{cart.quantity}}</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-success" v-if="cart.quantity < cart.Product.stock" :id="cart.Product.id" @click.prevent="addToCart(cart.Product.id)"><i class="fa fa-plus" aria-hidden="true"></i></button> | <button v-if="cart.quantity > 1" class="btn btn-secondary" @click.prevent="deductFromCart(cart)"><i class="fa fa-minus" aria-hidden="true"></i></button> | <button class="btn btn-danger" @click.prevent="removeCart(cart.id)">Delete</button>
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
    },
    deductFromCart (cart) {
      this.$store.dispatch('deductFromCart', cart)
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
