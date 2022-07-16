<template>
  <products-list-template title="Displays">
    <product-card />
  </products-list-template>
</template>

<script>
import productsListTemplate from "@/components/productsListTemplate.vue";
import productCard from "@/components/productCard.vue";

export default {
  name: "DisplaysCategory",
  components: {
    productsListTemplate,
    productCard,
  },
};
</script>

<style></style>
