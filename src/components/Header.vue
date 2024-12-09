<template>
  <header
    :class="{
      'bg-secondary scale-in-bottom': isScrolled,
      'fixed top-0 left-0 right-0 bg-black/0 z-50 transition-all duration-700 ease-out': true
    }"
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
            class="flex flex-row items-center m-2 w-[63px] h-[48px] text-gray-300 hover:text-white transition-colors first:ml-0"
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
      isScrolled: false
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 20) {
        this.isScrolled = true
        return
      }

      this.isScrolled = false
    }
  }
})
</script>

<style scoped>
@-webkit-keyframes scale-in-bottom {
  0% {
    -webkit-transform: scale(0.5) translateY(20px) rotate(0deg);
    transform: scale(0.5) translateY(20px) rotate(0deg);
    opacity: 0;
  }
  70% {
    -webkit-transform: scale(1.1) translateY(-5px) rotate(0deg);
    transform: scale(1.1) translateY(-5px) rotate(0deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1) translateY(0) rotate(0deg);
    transform: scale(1) translateY(0) rotate(0deg);
    opacity: 1;
  }
}

@keyframes scale-in-bottom {
  0% {
    -webkit-transform: scale(0.5) translateY(20px) rotate(0deg);
    transform: scale(0.5) translateY(20px) rotate(0deg);
    opacity: 0;
  }
  70% {
    -webkit-transform: scale(1.1) translateY(-5px) rotate(0deg);
    transform: scale(1.1) translateY(-5px) rotate(0deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1) translateY(0) rotate(0deg);
    transform: scale(1) translateY(0) rotate(0deg);
    opacity: 1;
  }
}

.scale-in-bottom {
  -webkit-animation: scale-in-bottom 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) both;
  animation: scale-in-bottom 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) both;
}
</style>
