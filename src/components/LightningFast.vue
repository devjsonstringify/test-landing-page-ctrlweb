<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">
        <!-- Left Content - Illustration -->
        <div class="w-full md:w-1/2">
          <div class="relative">
            <img
              src="../assets/medias/prototype-illustration.svg"
              alt="Prototyping Illustration"
              class="w-full"
            />
          </div>
        </div>

        <!-- Right Content -->
        <div class="w-full md:w-1/2 space-y-8">
          <div class="space-y-4">
            <span class="text-sm font-medium text-gray-600">At your fingertips</span>
            <h2 class="text-4xl font-bold text-gray-900">Lightning fast prototyping</h2>
          </div>

          <div class="space-y-6">
            <h3 class="text-xl font-semibold">Subscribe to our Newsletter</h3>
            <p class="text-gray-600">Available exclusively on Figmaland</p>

            <form class="flex gap-4" @submit.prevent="handleSubmit">
              <input
                v-model="email"
                type="email"
                placeholder="Your Email"
                class="flex-1 px-6 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Button type="submit" description="Subscribe" override-min-width="true" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue'

export default defineComponent({
  name: 'LightningFast',
  components: {
    Button
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      console.log('Submitted email:', this.email)
      // Reset form
      this.email = ''
    }
  }
})
</script>
