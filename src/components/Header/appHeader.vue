<template>
  <header>
    <nav class="bg-white shadow">
      <div
        class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center"
      >
        <div class="flex justify-between items-center">
          <div>
            <router-link
              class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
              to="/"
            >
              Erdal Shop
            </router-link>
          </div>

          <!-- Mobile menu toggle button -->
          <div class="flex md:hidden" @click="toggleMenu">
            <button
              type="button"
              class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class="md:flex items-center text-center"
          :class="{ hidden: !isMenuOpen, 'm-8': isMenuOpen }"
        >
          <div class="flex flex-col md:flex-row md:mx-6 gap-1">
            <header-navigation-link to="/"> Home </header-navigation-link>

            <header-navigation-link to="/products"
              >Products</header-navigation-link
            >

            <header-navigation-link to="/about"> About </header-navigation-link>
          </div>

          <div class="flex justify-center md:block m-3">
            <router-link
              class="relative text-gray-700 hover:text-gray-600"
              to="/basket"
            >
              <basket-icon dot />
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import navigationLink from "./navigationLink.vue";
import basketIcon from "@/components/icons/basketIcon.vue";

export default {
  name: "appHeader",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  components: {
    headerNavigationLink: navigationLink,
    basketIcon,
  },
};
</script>
