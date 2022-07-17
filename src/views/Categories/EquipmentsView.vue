<template>
  <loading-page v-if="isLoading" />

  <products-list-template title="Equipments" v-else>
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
import axios from "axios";
import loadingPage from "@/components/loadingPage.vue";

export default {
  name: "EquipmentsCategory",
  data() {
    return {
      data: [],
      isLoading: true,
    };
  },
  components: {
    productsListTemplate,
    productCard,
    loadingPage,
  },
  async created() {
    try {
      const res = await axios.get(
        "https://e-commerce-vue-api.herokuapp.com/products/equipments"
      );
      this.data = res.data;
      this.isLoading = false;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style></style>
