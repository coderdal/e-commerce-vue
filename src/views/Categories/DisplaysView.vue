<template>
  <loading-page v-if="isLoading" />
  <products-list-template title="Displays" v-else>
    <product-card
      v-for="product in data"
      :key="product.id"
      :image="product.image"
      :title="product.title"
      :category="product.category"
      :price="product.price"
      :id="product.id"
    />
  </products-list-template>
</template>

<script>
import productsListTemplate from "@/components/productsListTemplate.vue";
import productCard from "@/components/productCard.vue";

import loadingPage from "@/components/loadingPage.vue";
import axios from "axios";

export default {
  name: "DisplaysCategory",
  components: {
    productsListTemplate,
    productCard,
    loadingPage,
  },
  data() {
    return {
      data: [],
      isLoading: true,
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3001/products/displays");
      this.data = res.data;
      this.isLoading = false;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style></style>
