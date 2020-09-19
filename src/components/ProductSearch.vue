<template>
  <div>
    <div style="margin: auto;width: 250px;">
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" v-model="search" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" v-on:click="executeSearch">Search</b-button>
      </b-nav-form>
    </div>
    <div>
      <b-row>
        <b-col cols="3" v-for="product in products" v-bind:key="product.id">
          <ProductCard v-bind:product="product"/>
        </b-col>
      </b-row>
    </div>
    <div>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        v-on:input="executeSearch"
        align="center"
      ></b-pagination>
      <p class="mt-3">Current Page: {{ currentPage }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "./ProductCard";
export default {
  name: "ProductSearch",
  components: {
    ProductCard
  },
  created () {
      const requestUrl = `https://api.mercadolibre.com/sites/MCO/search?q=celular&offset=0&limit=${this.limit}`;
      axios
        .get(requestUrl)
        .then(result => {
          //Limited by the mercadolibre api
          if (result.data.paging.total > 1000){
            this.amountOfProducts = 1000 + this.limit;
          }else {
            this.amountOfProducts = result.data.paging.total;
          }
          this.products = result.data.results;
        })
        .catch(err => {
          console.log(err);
        });
  },
  data: () => ({
    searchQuery: "celular",
    amountOfProducts: 0,
    offset: 0,
    limit: 20,
    perPage: 20,
    currentPage: 1,
    products: []
  }),
  computed: {
    rows() {
      return this.amountOfProducts;
    },
  },
  methods: {
    executeSearch() {
      let offset = (this.currentPage - 1) * this.limit
      const requestUrl = `https://api.mercadolibre.com/sites/MCO/search?q=${this.searchQuery}&offset=${offset}&limit=${this.limit}`;
      axios
        .get(requestUrl)
        .then(result => {
          //Limited by the mercadolibre api
          if (result.data.paging.total > 1000){
            this.amountOfProducts = 1000 + this.limit;
          }else {
            this.amountOfProducts = result.data.paging.total;
          }
          this.products = result.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>