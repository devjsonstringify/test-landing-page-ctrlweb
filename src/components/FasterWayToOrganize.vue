<template>
  <section class="py-20 max-w-[1210px] mx-auto px-5 sm:px-7 md:px-[72px] mt-14">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">
        <!-- Left Content -->
        <div class="w-full md:w-1/2 space-y-6">
          <h2 class="text-2xl font-medium text-gray-900 font-sans text-center sm:text-left">
            Fastest way to <br />
            organize
          </h2>
          <p class="text-xl text-gray-600 max-w-lg mb-2 text-center sm:text-left">
            Most calendars are designed for teams. <br />
            <span class="hidden sm:block">Slate is designed for freelancers</span>
          </p>
          <div class="w-full text-center sm:text-left">
            <Button class="w-1/2 sm:w-0" />
          </div>
        </div>

        <!-- Right Content - Device Mockup -->
        <div class="w-full md:w-1/2">
          <div class="relative">
            <div
              class="rounded-2xl p-2 hover:transform hover:translate-y-[-4px] transition-all duration-300"
            >
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
import Button from './Button.vue'

export default defineComponent({
  name: 'FasterWayToOrganize',
  components: {
    Button
  }
})
</script>
