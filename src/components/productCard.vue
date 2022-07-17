<template>
  <div
    class="group relative p-2 border-solid border border-gray-200 hover:border-dotted rounded"
  >
    <div
      class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-85 lg:h-80 lg:aspect-none"
    >
      <img
        :src="image"
        alt="Front of men&#039;s Basic Tee in black."
        class="w-full h-full object-center object-cover lg:w-full lg:h-full"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700 font-medium">
          <router-link :to="routerLink">
            <span aria-hidden="true" class="absolute inset-0"></span>
            {{ title }}
          </router-link>
        </h3>
        <p class="mt-1 text-sm text-gray-500">{{ category }}</p>
      </div>
      <p class="text-base font-medium text-gray-900">${{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "productCard",
  props: {
    image: {
      type: String,
      default: "https://commercial.bunn.com/img/image-not-available.png",
    },
    title: {
      type: String,
      default: "Lorem Ipsum",
    },
    category: {
      type: String,
      default: "Dolor Sit",
    },
    price: {
      type: String,
      default: "0",
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    routerLink() {
      return `/product/${this.id}`;
    },
  },
};
</script>
