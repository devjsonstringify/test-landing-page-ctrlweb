<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">
        <!-- Left Content -->
        <div class="w-full md:w-1/2 space-y-6">
          <h2 class="text-5xl font-bold text-gray-900">
            Fastest way to organize
          </h2>
          <p class="text-xl text-gray-600 max-w-lg">
            Most calendars are designed for teams.
            Slate is designed for freelancers
          </p>
          <a 
            href="#" 
            class="inline-block bg-[#2563eb] hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-colors"
          >
            Try For Free
          </a>
        </div>

        <!-- Right Content - Device Mockup -->
        <div class="w-full md:w-1/2">
          <div class="relative">
            <div class="rounded-2xl p-2 hover:transform hover:translate-y-[-4px] transition-all duration-300">
              <img 
                src="../assets/medias/laptop.png" 
                alt="Application Interface" 
                class="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FasterWayToOrganize'
})
</script>
