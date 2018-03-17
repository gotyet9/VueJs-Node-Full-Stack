<template>
  <div>
    <div class="title">
      <h1><i class="fa fa-braille"></i> In Stock</h1>
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
  import ProductList from '../components/product/ProductList.vue'
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'product-list': ProductList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
