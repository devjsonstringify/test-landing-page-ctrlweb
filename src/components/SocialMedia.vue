<template>
  <div :class="['flex items-center space-x-4', parentElement]">
    <a
      v-for="social in socialMedias"
      :key="social.id"
      :href="social.url"
      class="hover:opacity-80 transition-opacity"
    >
      <img :src="social.icon" :alt="social.name" class="w-7 h-7" />
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { socialMediaWhite, socialMediaBlue } from '@/static/data.ts'

export default defineComponent({
  name: 'SocialMedia',
  props: {
    color: {
      type: String,
      default: 'white',
      required: false
    },
    parentElement: {
      type: String,
      default: '',
      required: false
    }
  },
  data() {
    return {
      socialMedias: this.color === 'white' ? socialMediaWhite : socialMediaBlue
    }
  }
})
</script>

<style scoped></style>
