<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Partners</h2>
        <p class="text-gray-600">
          Most calendars are designed for teams.<br />
          Slate is designed for freelancers
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="partner in partners"
            :key="partner.id"
            class="p-6 border rounded-lg"
            :href="partner.url"
          >
            <p class="text-sm text-gray-500 mb-4 text-center">{{ partner.name }}</p>
            <p class="flex justify-center">
              <img :src="partner.icon" :alt="partner.name" class="h-8 m-auto" />
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-16">
        <Button />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { partners } from '@/static/data.ts'
import Button from './Button.vue'

export default defineComponent({
  name: 'Partners',
  components: {
    Button
  },
  data() {
    return {
      partners
    }
  }
})
</script>

<style scoped>
.border {
  border-color: #e5e7eb;
}

/* Optional hover effect for partner boxes */
.border:hover {
  border-color: #2563eb;
  transition: border-color 0.3s ease;
}
</style>
