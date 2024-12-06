<template>
  <section class="py-20 max-w-[1210px] mx-auto px-[72px] mt-[20px]">
    <div class="container px-0">
      <div
        class="flex flex-col sm:flex-col md:flex-row sm:flex-nowrap sm:flex-row sm:items-center justify-between gap-12"
      >
        <!-- Left Content - Illustration -->
        <div class="w-full md:w-1/2">
          <div class="relative">
            <img
              src="../assets/medias/prototype-illustration.svg"
              alt="Prototyping Illustration"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Right Content -->
        <div class="w-full md:w-1/2 space-y-8">
          <div class="space-y-4">
            <span class="text-sm text-gray-600 font-bold hidden sm:block">At your fingertips</span>
            <h2 class="text-4xl font-bold text-gray-900 hidden sm:block">
              Lightning fast <br />prototyping
            </h2>
          </div>

          <div class="space-y-6">
            <h3 class="text-xl font-bold text-center sm:text-left">Subscribe to our Newsletter</h3>
            <p class="text-gray-600 m-0 text-center sm:text-left">
              Available exclusively on Figmaland
            </p>

            <form class="sm:flex gap-4" @submit.prevent="handleSubmit">
              <input
                v-model="email"
                type="email"
                placeholder="Your Email"
                class="w-full mb-2.5 sm:mb-0 sm:min-w-fit px-4 py-3 border rounded-[100px] font-normal placeholder:text-black placeholder:opacity-100 bg-neutral-100 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
              <Button
                type="submit"
                description="Subscribe"
                :override-min-width="true"
                class="w-full sm:min-w-[145px] sm:w-0"
              />
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
