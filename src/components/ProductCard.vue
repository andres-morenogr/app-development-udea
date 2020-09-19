<template>
  <div>
    <b-card
      v-bind:title="product.title"
      v-bind:img-src="product.thumbnail"
      img-alt="Product Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>Precio: {{product.price}}$</b-card-text>
      <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">Ver Detalles</router-link>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
