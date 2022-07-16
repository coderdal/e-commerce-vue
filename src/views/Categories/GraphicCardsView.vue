<template>
  <products-list-template title="Graphic Cards">
    <product-card />
  </products-list-template>
</template>

<script>
import productsListTemplate from "@/components/productsListTemplate.vue";
import productCard from "@/components/productCard.vue";

export default {
  name: "GraphicCardsCategory",
  components: {
    productsListTemplate,
    productCard,
  },
};
</script>

<style></style>
