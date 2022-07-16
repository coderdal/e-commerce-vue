<template>
  <!-- <h1>this is a product page {{ this.$route.params.id }}</h1> -->
  <div class="bg-white">
    <main class="my-8">
      <div class="container mx-auto px-6">
        <div class="md:flex md:items-center">
          <div class="w-full h-64 md:w-1/2 lg:h-96">
            <img
              class="h-full w-full rounded-md object-cover max-w-lg mx-auto"
              src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              alt="Nike Air"
            />
          </div>
          <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 class="text-gray-800 uppercase text-lg mb-2">Nike Air</h3>
            <span class="text-gray-600 font-bold mt-3 text-base">$125</span>
            <p class="text-base w-11/12 text-gray-600 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              harum!
            </p>
            <p class="text-base w-11/12 text-gray-600 mt-2">
              Last
              <span class="text-gray-600 font-bold mt-3 text-base">{{
                stock
              }}</span>
              items in stock.
            </p>
            <hr class="my-3" />
            <div class="mt-2">
              <label class="text-gray-700 text-sm" for="count">Count:</label>
              <div class="flex items-center mt-1">
                <button
                  class="text-gray-500 focus:outline-none focus:text-gray-600"
                  @click="increaseCount"
                >
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
                <span class="text-gray-700 text-lg mx-2">{{ count }}</span>
                <button
                  class="text-gray-500 focus:outline-none focus:text-gray-600"
                  @click="decreaseCount"
                >
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div class="flex items-center mt-6">
              <button
                class="cursor-pointer px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                :disabled="count < 1"
              >
                Add to basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  data() {
    return {
      count: 0,
      stock: 10,
    };
  },
  methods: {
    decreaseCount() {
      if (!this.count < 1) {
        this.count--;
      }
    },
    increaseCount() {
      if (this.count < this.stock) {
        this.count++;
      }
    },
  },
};
</script>

<style scoped>
button:disabled,
button[disabled] {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
