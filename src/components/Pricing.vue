<template>
  <section class="bg-gray-900 py-20 px-8">
    <div class="text-center max-w-[1210px] mx-auto px-[72px] pb-10">
      <h2 class="text-4xl font-medium text-gray-100 mb-4">Pricing</h2>
      <p class="text-xl text-gray-400 mb-16 max-w-2xl mx-auto pb-8">
        Most calendars are designed for teams.<br />
        Slate is designed for freelancers
      </p>

      <div class="flex justify-center items-center gap-8 px-4">
        <PricingCard
          v-for="plan in pricingPlans"
          :key="plan.id"
          :title="plan.title"
          :description="plan.description"
          :price="plan.price"
          :isRecommended="plan.isRecommended"
          :features="plan.features"
          class="flex-1"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PricingCard from './PricingCard.vue'
import { pricing } from '@/static/data.ts'

export default defineComponent({
  name: 'Pricing',
  components: {
    PricingCard
  },

  setup() {
    return {
      pricingPlans: pricing
    }
  }
})
</script>

<style scoped></style>
