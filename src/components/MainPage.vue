<template>
  <div>
    <Header/>
    <ProductSearch/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
import ProductSearch from "./ProductSearch";
export default {
  name: 'MainPage',
  components: {
    Header,
    Footer,
    ProductSearch
  }
}
</script>

<style>

</style>