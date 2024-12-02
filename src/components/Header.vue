<script lang="ts">
import { defineComponent } from 'vue'
import { socialMediaWhite, navLinks } from '@/static/data.ts'

export default defineComponent({
  name: 'Header',

  data() {
    return {
      socials: socialMediaWhite,
      navigation: navLinks
    }
  }
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 bg-black/10 z-50">
    <div class="max-w-[1440px] mx-auto px-[72px]">
      <div class="flex justify-between items-center h-[72px]">
        <nav class="flex items-center">
          <a
            v-for="item in navigation"
            :key="item.id"
            :href="item.url"
            class="flex flex-row items-center p-2.5 w-[63px] h-[48px] text-gray-300 hover:text-white transition-colors"
          >
            {{ item.name }}
          </a>
        </nav>

        <div class="absolute left-1/2 -translate-x-1/2">
          <img src="../assets/figma-land-logo.svg" alt="Figma Land" />
        </div>

        <div class="flex items-center space-x-4">
          <a
            v-for="social in socials"
            :key="social.id"
            :href="social.url"
            class="hover:opacity-80 transition-opacity"
          >
            <img :src="social.icon" :alt="social.name" class="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
