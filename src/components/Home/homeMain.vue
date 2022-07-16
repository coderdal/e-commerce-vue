<template>
  <section>
    <dashed-line />

    <div class="py-20 bg-gray-50 radius-for-skewed">
      <div class="container mx-auto px-4">
        <div class="mb-16 w-full flex flex-wrap items-center">
          <div class="w-full lg:w-1/2">
            <h2 class="mb-2 text-4xl lg:text-5xl font-bold font-heading">
              All the products you need
            </h2>
          </div>
          <div class="w-full lg:w-1/2">
            <p class="max-w-xs lg:mx-auto text-gray-500 leading-loose">
              Choose a category and start shopping!
            </p>
          </div>
        </div>
        <div
          class="max-w-2xl mx-auto py-16 px-4 sm:py-11 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Categories
          </h2>

          <div
            class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
          >
            <!--Card Start -->
            <home-category-card
              image="https://d3fa68hw0m2vcc.cloudfront.net/e40/213023508.jpeg"
              title="Equipments"
              to="/category/equipments"
            ></home-category-card>
            <!-- Card End -->
            <!--Card Start -->
            <home-category-card
              image="https://productimages.hepsiburada.net/s/12/375/8884777320498.jpg"
              title="Graphic Cards"
              to="/category/graphic-cards"
            ></home-category-card>
            <!-- Card End -->
            <!--Card Start -->
            <home-category-card
              image="https://www.lg.com/tr/images/monitor/md07545569/gallery/D02.jpg"
              title="Displays"
              to="/category/displays"
            ></home-category-card>
            <!-- Card End -->
            <!--Card Start -->
            <home-category-card
              image="https://media-cdn.bnn.in.th/129512/amd-cpu-ryzen-7-5700g-gen5-2-square_medium.jpg"
              title="Computer"
              to="/category/computer"
            ></home-category-card>
            <!-- Card End -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import homeCategoryCard from "./homeCategoryCard.vue";
import DashedLine from "@/components/Home/dashedLine.vue";

export default {
  components: {
    homeCategoryCard,
    DashedLine,
  },
};
</script>

<style></style>
