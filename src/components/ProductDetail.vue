<template>
  <div>
    <div>
      <h5>{{product.title}}</h5>
    </div>
    <div>
      <img :src="this.image" height="400px"/>
    </div>
    <hr />
    <div class="related_product_content">
      <h6>Precio: {{product.price}}</h6>
      <h6>Vendedor: {{sellerName}}</h6>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductDetail",
  methods: {
    getSellerName(sellerId) {
      axios.get(`https://api.mercadolibre.com/users/${sellerId}`)
        .then((response) => {
          this.sellerName = response.data.nickname;
        });
    },
  },
  created() {
    const requestUrl = `https://api.mercadolibre.com/items/${this.$route.params.id}`;
    axios
      .get(requestUrl)
      .then(result => {
        this.product = result.data;
        console.log(result.data);
        this.getSellerName(result.data.seller_id);
        this.image = result.data.pictures[0].secure_url;
      })
      .catch(err => {
        console.log(err);
      });
  },
  data: () => ({
    product: {},
    sellerName: '',
    image: ''
  })
};
</script>

<style>
</style>