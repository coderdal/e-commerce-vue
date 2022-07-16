<template>
  <products-list-template title="Computer & Parts">
    <product-card />
  </products-list-template>
</template>

<script>
import productsListTemplate from "@/components/productsListTemplate.vue";
import productCard from "@/components/productCard.vue";

export default {
  name: "ComputerCategory",
  components: {
    productsListTemplate,
    productCard,
  },
};
</script>

<style></style>
