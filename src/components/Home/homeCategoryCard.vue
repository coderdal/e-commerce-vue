<template>
  <router-link :to="to">
    <div
      class="group relative p-2 border-solid border border-gray-300 hover:border-dotted rounded"
    >
      <div
        class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
      >
        <img
          :src="image"
          alt="Product Preview."
          class="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-base text-gray-800">
            <span class="font-medium text-base">{{ title }}</span>

            <span aria-hidden="true" class="absolute inset-0"> </span>
          </h3>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "https://commercial.bunn.com/img/image-not-available.png",
    },
    title: {
      type: String,
      default: "Example Category",
    },
    to: {
      type: String,
      default: "/",
    },
  },
};
</script>
