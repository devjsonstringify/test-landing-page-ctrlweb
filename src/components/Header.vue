<template>
  <header
    id="Home"
    :class="{
      'drop-shadow-md': isScrolled,
      'fixed top-0 left-0 right-0 bg-black/0 z-50 transition-all duration-700 ease-out': true
    }"
    :style="{ backgroundColor: `rgba(32, 145, 249, ${currOpacity})` }"
  >
    <div class="max-w-[1210px] mx-auto px-1 mt-1 sm:mt-[20px]">
      <!--        mobile navigation-->
      <div class="block sm:hidden">
        <MobileNavigation />
      </div>
      <div
        class="hidden sm:block sm:flex sm:justify-between sm:items-center sm:h-[72px] sm:container sm:mx-auto"
      >
        <nav class="hidden sm:flex sm:items-center">
          <a
            v-for="item in navigation"
            :key="item.id"
            :href="item.url"
            :class="{
              'flex flex-row items-center m-2 w-[63px] h-[48px] text-white hover:text-white transition-colors first:ml-0':
                isScrolled,
              'flex flex-row items-center m-2 w-[63px] h-[48px] text-gray-300 hover:text-white transition-colors first:ml-0': true
            }"
            @click="scrollToElement(item.name, $event)"
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

<script lang="ts">
import { defineComponent } from 'vue'
import { navLinks, socialMediaWhite } from '@/static/data.ts'
import MobileNavigation from '@/components/MobileNavigation.vue'

export default defineComponent({
  name: 'Header',
  components: {
    MobileNavigation
  },

  data() {
    return {
      socials: socialMediaWhite,
      navigation: navLinks,
      isScrolled: false,
      currOpacity: 0
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('click', this.scrollToElement)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('click', this.scrollToElement)
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY
      this.currOpacity = scrollY / 100
      if (scrollY) {
        this.isScrolled = true
        return
      }

      this.isScrolled = false
    },
    scrollToElement(section: string, event: MouseEvent) {
      event.preventDefault()

      const element = document.getElementById(section)
      if (!element) return

      const offset = 50
      const scrollTop = element.offsetTop - offset

      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      })
    }
  }
})
</script>

<style scoped></style>
