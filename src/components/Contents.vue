<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">{{ features.title }}</h2>
        <p class="text-gray-600">
          {{ features.subtitle.line1 }}<br/>
          {{ features.subtitle.line2 }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="feature in features.features" :key="feature.title" class="text-center p-6">
          <img :src="feature.icon" :alt="feature.title" class="w-12 h-12 mx-auto mb-4"/>
          <h3 class="text-xl font-bold mb-2">
            {{ feature.title }}
            <span v-if="feature.subtitle" class="block">{{ feature.subtitle }}</span>
          </h3>
          <p class="text-gray-600">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {featureContent} from '@/static/data.ts'

export default defineComponent({
  name: 'Contents',
  data() {
    return {
      features: featureContent
    }
  }
})
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
