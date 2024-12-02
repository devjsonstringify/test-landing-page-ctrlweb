<template>
  <div class="max-w-3xl mx-auto text-center px-8 py-12">
    <h2 class="text-4xl font-medium text-gray-900 mb-12">Testimonials</h2>
    <img src="../assets/testimonial/ibm.svg" alt="IBM logo" class="h-12 mx-auto mb-8" />
    <p class="text-2xl text-gray-700 leading-relaxed mb-8">
      Most calendars are designed for teams. Slate is designed for freelancers who want a simple way
      to plan their schedule.
    </p>
    <div class="flex items-center justify-center gap-4 mb-8">
      <img
        src="../assets/testimonial/avatar.svg"
        alt="Author avatar"
        class="w-8 h-8 rounded-full object-cover"
      />
      <div class="text-left">
        <p class="font-semibold text-gray-800 m-0">Organize across</p>
        <p class="text-gray-600 text-sm m-0">UI designer</p>
      </div>
    </div>
    <Button description="More Testimonials" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue'

export default defineComponent({
  name: 'Testimonial',
  components: {
    Button
  }
})
</script>

<style scoped></style>
