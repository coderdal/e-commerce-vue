<template>
  <section>
    <div class="relative bg-gray-50 pt-12 lg:pt-20 pb-12 md:pb-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-4">
          <div
            class="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center"
          >
            <div class="w-full text-center lg:text-left">
              <div class="max-w-md mx-auto lg:mx-0">
                <h2 class="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                  <span
                    >Erdal Tech <br />
                    Fast <span class="text-green-600">&</span> Easy</span
                  >
                </h2>
              </div>
              <div class="max-w-sm mx-auto lg:mx-0">
                <p class="mb-6 text-gray-400 leading-loose">
                  This application was developed by Muhammed Erdal using Vue JS.
                  It is an example, does not reflect reality.
                </p>
                <div>
                  <router-link
                    class="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                    to="/products"
                    >See Products</router-link
                  ><router-link
                    class="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
                    to="/about"
                    >About Us</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-4 flex items-center justify-center">
            <div class="relative" style="z-index: 0"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
