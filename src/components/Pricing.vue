<template>
  <section id="Pricing" class="bg-gray-900 py-20 px-5 sm:px-5 2xl:px-0">
    <div class="text-center w-full sm:max-w-[1210px] mx-auto pb-10">
      <h2 class="text-4xl font-medium text-gray-100 mb-4">Pricing</h2>
      <p class="text-xl text-gray-400 mb-16 max-w-2xl mx-auto pb-8">
        Most calendars are designed for teams.<br />
        <span class="hidden sm:block">Slate is designed for freelancers</span>
      </p>

      <div class="flex justify-center items-center gap-5 px-0 flex-wrap md:flex-nowrap">
        <PricingCard
          v-for="plan in pricingPlans"
          :key="plan.id"
          :title="plan.title"
          :description="plan.description"
          :price="plan.price"
          :isRecommended="plan.isRecommended"
          :features="plan.features"
          class="w-full md:flex-1 first:ml-0 last:mr-0"
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
