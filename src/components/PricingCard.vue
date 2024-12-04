<template>
  <div
    v-bind:class="
      isRecommended
        ? 'bg-blue-600 rounded-lg py-5 p-8 max-w-[250px] box-border border-[1px]'
        : 'bg-gray-200 rounded-lg p-8 mx-5 max-w-[250px] box-border'
    "
    :style="isRecommended ? 'transform: scale(1.18)' : ''"
  >
    <h3
      v-bind:class="
        isRecommended ? 'text-xl font-bold text-white mb-4' : 'text-xl font-bold text-gray-900 mb-4'
      "
    >
      {{ title }}
    </h3>
    <p v-bind:class="isRecommended ? 'text-blue-100 mb-8' : 'text-gray-600 mb-8'">
      {{ description }}
    </p>
    <div class="flex items-center justify-center mb-8">
      <span
        v-bind:class="
          isRecommended ? 'text-6xl font-bold text-white mr-2' : 'text-6xl font-black mr-2'
        "
        >{{ price }}</span
      >
      <span
        v-bind:class="
          isRecommended
            ? 'text-xl text-blue-100 ml-1 text-left'
            : 'text-xl text-gray-600 ml-1 text-left'
        "
        >$ <br />
        Per Month</span
      >
    </div>
    <div class="space-y-4 mb-8">
      <p
        v-for="(feature, index) in features"
        :key="index"
        v-bind:class="isRecommended ? 'text-gray-100' : 'text-gray-600'"
      >
        {{ feature }}
      </p>
    </div>
    <Button
      :variant="isRecommended ? 'default' : 'primary'"
      description="Order Now"
      :class="['font-normal !min-w-0 font-normal !min-w-0 w-full', isRecommended ? 'mb-12' : '']"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue'

export default defineComponent({
  name: 'PricingCard',
  components: {
    Button
  },
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
