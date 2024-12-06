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
  <header class="fixed top-0 left-0 right-0 bg-black/0 z-50">
    <div class="max-w-[1210px] mx-auto px-[72px] mt-[20px]">
      <!--        mobile navigation-->
      <div class="block sm:hidden">
        <div>
          <img src="../assets/figma-land-logo.svg" alt="Figma Land" />
        </div>
        <!--        <div>to do: menu</div>-->
      </div>
      <div
        class="hidden sm:block sm:flex sm:justify-between sm:items-center sm:h-[72px] sm:container sm:mx-auto"
      >
        <nav class="hidden sm:flex sm:items-center">
          <a
            v-for="item in navigation"
            :key="item.id"
            :href="item.url"
            class="flex flex-row items-center m-2 w-[63px] h-[48px] text-gray-300 hover:text-white transition-colors"
          >
            {{ item.name }}
          </a>
          <div class="hidden sm:block sm:relative sm:ml-2">
            <img src="../assets/figma-land-logo.svg" alt="Figma Land" />
          </div>
        </nav>

        <div class="hidden sm:flex sm:items-center sm:space-x-4">
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
