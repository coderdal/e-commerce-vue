<template>
  <products-list-template title="Top Selling Products">
    <!-- Product List -->

    <product-card />
    <product-card />
    <product-card />
    <product-card />
    <product-card />

    <!-- Product List End -->
  </products-list-template>
</template>

<script>
import productCard from "@/components/productCard.vue";
import productsListTemplate from "@/components/productsListTemplate.vue";
export default {
  components: { productCard, productsListTemplate },
  name: "ProductsList",
};
</script>

<style></style>
