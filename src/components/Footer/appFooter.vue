<template>
  <section>
    <dashed-line />

    <div class="py-20 bg-gray-50 radius-for-skewed">
      <div class="max-w-md mx-auto text-center">
        <p class="mb-6 text-sm font-semibold text-gray-400">
          © 2022. All rights reserved by Muhammed Erdal.
        </p>
        <div class="flex space-x-2 lg:space-x-4 justify-center">
          <a href="https://github.com/coderdal">
            <githubIcon />
          </a>
          <a href="https://www.linkedin.com/in/muhammederdal/">
            <linkedinIcon />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DashedLine from "@/components/Home/dashedLine.vue";

import githubIcon from "@/components/icons/githubIcon.vue";

import linkedinIcon from "@/components/icons/linkedinIcon.vue";

export default {
  components: {
    DashedLine,
    githubIcon,
    linkedinIcon,
  },
};
</script>

<style></style>
