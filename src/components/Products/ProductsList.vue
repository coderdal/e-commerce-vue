<template>
  <loading-page v-if="isLoading" />

  <products-list-template title="Top Selling Products" v-else>
    <!-- Product List Start -->

    <product-card
      v-for="product in data"
      :key="product.id"
      :image="product.image"
      :title="product.title"
      :category="product.category"
      :price="product.price"
      :id="product.id"
    />

    <!-- Product List End -->
  </products-list-template>
</template>

<script>
import productCard from "@/components/productCard.vue";
import productsListTemplate from "@/components/productsListTemplate.vue";

import loadingPage from "@/components/loadingPage.vue";
import axios from "axios";

export default {
  components: { productCard, productsListTemplate, loadingPage },
  name: "ProductsList",
  data() {
    return {
      data: [],
      isLoading: true,
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3001/products");
      this.data = res.data;
      this.isLoading = false;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
