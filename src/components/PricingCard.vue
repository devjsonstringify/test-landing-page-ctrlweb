<template>
 <div v-bind:class="isRecommended ? 'bg-blue-600 rounded-lg py-5 p-8' : 'bg-gray-200 rounded-lg p-8 mx-5'"  :style="isRecommended ? 'transform: scale(1.18)' : ''">
          <h3 v-bind:class="isRecommended ? 'text-xl font-bold text-white mb-4' : 'text-xl font-bold text-gray-900 mb-4'">{{ title }}</h3>
          <p v-bind:class="isRecommended ? 'text-blue-100 mb-8' : 'text-gray-600 mb-8'">{{ description}}</p>
          <div class="flex items-baseline justify-center mb-8">
            <span v-bind:class="isRecommended ? 'text-6xl font-bold text-white' : 'text-6xl font-bold text-gray-900'">{{ price }}</span>
            <span v-bind:class="isRecommended ? 'text-xl text-blue-100 ml-1' : 'text-xl text-gray-600 ml-1'">$ Per Month</span>
          </div>
          <div class="space-y-4 mb-8">
            <p v-for="(feature, index) in features" 
               :key="index" 
               v-bind:class="isRecommended ? 'text-gray-100' : 'text-gray-600'">
              {{ feature }}
            </p>
          </div>
          <button v-bind:class="isRecommended ? 'bg-white text-blue-600 w-full py-3 rounded hover:bg-gray-100 transition-colors' : 'bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700 transition-colors'">
            Order Now
          </button>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PricingCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    isRecommended: {
      type: Boolean,
      required: false,
      default: false
    },
    features: {
      type: Array as () => string[],
      required: true
    }
  }
})

</script>