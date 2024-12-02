<template>
  <div class="relative h-screen">
    <div class="absolute inset-0">
      <img
        src="../assets/jumbroton.png"
        class="w-full h-full object-fit brightness-50"
        alt="Background"
      />
    </div>

    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
    >
      <h1 class="text-5xl font-bold mb-4">
        The best products<br />
        start with Figma
      </h1>

      <p class="text-xl mb-8 text-gray-300">
        Most calendars are designed for teams. Slate is designed<br />
        for freelancers
      </p>

      <Button />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue'

export default defineComponent({
  name: 'Jumbotron',
  components: {
    Button
  }
})
</script>

<style scoped></style>
