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
      <b-card-text>Precio: {{product.price}}$ <br> Vendedor: {{product.price}}</b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
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
