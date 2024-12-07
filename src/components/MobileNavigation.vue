<template>
  <header class="shadow">
    <nav class="mx-auto max-w-7xl px-4 py-3">
      <div class="md:hidden flex justify-between">
        <div>
          <img src="../assets/figma-land-logo.svg" alt="Figma Land" />
        </div>
        <button class="text-gray-700" @click="toggleMenu">
          <img v-if="!isMenuOpen" src="../assets/mobile.svg" alt="mobile navigation" />
          <!--          <img v-else src="../assets/close.svg" alt="close navigation" />-->
        </button>
      </div>

      <div v-if="isMenuOpen" class="md:hidden absolute left-0 right-0 bg-white mt-3 shadow-lg">
        <div class="px-4 py-2 space-y-2">
          <a href="#" class="block py-2 text-gray-900 hover:text-gray-600">Menu 1</a>
          <a href="#" class="block py-2 text-gray-900 hover:text-gray-600">Menu 2</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MobileNavigation',
  data() {
    return {
      isMenuOpen: false
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen
    },
    handleClickOutside(event: MouseEvent): void {
      const target = event.target as HTMLElement
      if (this.isMenuOpen && !this.$el.contains(target)) {
        this.isMenuOpen = false
      }
    }
  }
})
</script>

<style scoped></style>
