<template>
  <div class="home">
    <home-header />

    <!-- main-->

    <home-main />
  </div>
</template>

<script>
import HomeHeader from "@/components/Home/homeHeader.vue";

import HomeMain from "@/components/Home/homeMain.vue";

export default {
  name: "HomeView",
  components: {
    HomeHeader,
    HomeMain,
  },
};
</script>

HomeHeader
