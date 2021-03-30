import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/axios.js'
import router from '@/router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    editAction: ''
  },
  mutations: {
    fetchAllProducts (state, payload) {
      state.products = payload
    },
    fetchAllCarts (state, payload) {
      state.carts = payload
    },
    productToEdit (state, payload) {
      state.productToEdit = payload
    },
    setEditAction (state, payload) {
      state.editAction = payload
    }
  },
  actions: {
    fetchAllProducts (context) {
      axios
        .get('/products/catalogue')
        .then(({ data }) => {
          context.commit('fetchAllProducts', data)
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    fetchAllCarts (context) {
      axios
        .get('/carts', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.commit('fetchAllCarts', data)
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    addToCart (context, id) {
      axios
        .post('/carts/' + id, { quantity: 1 }, {
          headers: { access_token: localStorage.access_token }
        })
        .then(({ data }) => {
          context.dispatch('fetchAllCarts')
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    removeCart (context, id) {
      console.log(id)
      axios
        .delete(`/carts/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data, '<<<!! SUCCESS DELETE')
          context.dispatch('fetchAllCarts')
        })
        .catch(({ response }) => {
          console.log(response.data.message, '<<<!! ERROR DELETE')
        })
    },
    deductFromCart (context, cart) {
      axios
        .patch(`/carts/${cart.id}`, { quantity: (cart.quantity - 1) }, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data, '<<<!! SUCCESS UPDATE')
          context.dispatch('fetchAllCarts')
        })
        .catch(({ response }) => {
          console.log(response.data.message, '<<<!! ERROR UPDATE')
        })
    },
    loginUser (context, payload) {
      axios.post('/signin', {
        email: payload.loginEmail,
        password: payload.loginPassword
      })
        .then(({ data }) => {
          console.log(data, '<<<!! SUCCESS LOGIN')
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(({ response }) => {
          console.log(response.data.message, '<<<!! ERROR LOGIN')
        })
    },
    registerUser (context, payload) {
      axios.post('/register', {
        email: payload.registerEmail,
        password: payload.registerPassword
      })
        .then(({ data }) => {
          console.log(data, '<<<!! SUCCESS REGISTER')
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(({ response }) => {
          console.log(response.data.message, '<<<!! ERROR REGISTER')
        })
    }
  },
  modules: {
  }
})
