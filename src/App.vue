<script lang="ts">
import Header from './components/Header.vue'
import Jumbotron from './components/Jumbotron.vue'
import Contents from './components/Contents.vue'
import Partners from './components/Partners.vue'
import Testimonial from './components/Testimonial.vue'
import Pricing from './components/Pricing.vue'
import ContactUs from './components/ContactUs.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Jumbotron,
    Contents,
    Partners,
    Testimonial,
    Pricing,
    ContactUs,
    Footer
  }
}
</script>

<template>
  <div class="relative w-full">
    <Header />
    <Jumbotron />
    <Contents />
    <Partners />
    <Testimonial />
    <Pricing />
    <ContactUs />
    <Footer />
  </div>
</template>

<style scoped></style>
