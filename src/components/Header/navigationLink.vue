<template>
  <router-link
    class="my-1 text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
    :to="to"
    tag="a"
    active-class="text-indigo-500"
    exact
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  name: "headerNavigationLink",
  props: {
    to: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style scoped>
.active {
  color: red !important;
}
</style>
