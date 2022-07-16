<template>
  <loading-page v-if="isLoading" />

  <div class="bg-white" v-else>
    <main class="my-8">
      <div class="container mx-auto px-6">
        <div class="md:flex md:items-center">
          <div class="w-full h-64 md:w-1/2 lg:h-96">
            <img
              class="h-full w-full rounded-md object-cover max-w-lg mx-auto"
              :src="data.image"
              :alt="data.title"
            />
          </div>
          <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 class="text-gray-800 uppercase text-lg mb-2">
              {{ data.title }}
            </h3>
            <span class="text-gray-600 font-bold mt-3 text-base"
              >${{ data.price }}</span
            >
            <p class="text-base w-11/12 text-gray-600 mt-4">
              {{ data.description }}
            </p>
            <p class="text-base w-11/12 text-gray-600 mt-2">
              Last
              <span class="text-gray-600 font-bold mt-3 text-base">{{
                data.stock
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
                @click="addToBasket"
              >
                Add to basket
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="toastNotification" v-show="showToast">
        <div
          id="toast-success"
          class="flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div
            class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Check icon</span>
          </div>
          <div class="ml-3 text-sm font-normal">
            Item added to basket successfully.
          </div>
          <button
            type="button"
            class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
            @click="showToast = false"
          >
            <span class="sr-only">Close</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import loadingPage from "@/components/loadingPage.vue";

export default {
  name: "ProductView",
  components: {
    loadingPage,
  },
  data() {
    return {
      count: 0,
      showToast: false,
      isLoading: true,
      data: {},
    };
  },
  methods: {
    decreaseCount() {
      if (!this.count < 1) {
        this.count--;
      }
    },
    increaseCount() {
      if (this.count < this.data.stock) {
        this.count++;
      }
    },
    addToBasket() {
      if (this.$store.state.basket.find((item) => item.id === this.data.id)) {
        /* If product is already in the basket */

        const newObj = this.$store.state.basket.find(
          (item) => item.id === this.data.id
        );

        newObj.count += this.count;
        newObj.totalPrice += this.count * newObj.price;

        this.$store.state.basket = this.$store.state.basket.filter(
          (item) => item.id !== this.data.id
        );

        this.$store.state.basket = [...this.$store.state.basket, newObj];
      } else {
        /* First Time to add to basket */

        this.$store.state.basket = [
          ...this.$store.state.basket,
          {
            count: this.count,
            totalPrice: this.count * this.data.price,
            ...this.data,
          },
        ];
      }

      this.count = 0;
      this.showToast = true;

      setTimeout(() => {
        this.showToast = false;
      }, 2000);
    },
  },
  async created() {
    try {
      const res = await axios.get(
        "http://localhost:3001/product/" + this.$route.params.id
      );
      this.data = res.data;
      this.isLoading = false;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style scoped>
button:disabled,
button[disabled] {
  opacity: 0.7;
  cursor: not-allowed;
}

.toastNotification {
  position: absolute;
  right: 10px;
}
</style>
