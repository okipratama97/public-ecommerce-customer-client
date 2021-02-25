<template>
  <div class="col-md-auto">
    <div class="card p-card">
      <img class="login-image card-img-top product-image mx-auto" :src="product.image_url" alt="">
      <div class="card-body">
        <h4 class="card-title">{{product.name}}</h4>
        <p>Rp. {{product.price}}</p>
        <p>Stock: {{product.stock}}</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-success" :id="product.id" @click.prevent="addToCart(product.id)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    product: Object
  },
  methods: {
    addToCart (id) {
      this.$store.dispatch('addToCart', id)
      this.$router.push('/carts')
    }
  }
}
</script>

<style>
.product-image {
  max-width: 150px;
}
.p-card {
  min-width: 150px;
}
</style>
