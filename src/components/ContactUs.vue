<template>
  <div class="container mx-auto px-4 py-16 max-w-7xl">
    <h1 class="text-4xl text-center font-medium text-gray-800 mb-4">Contact Us</h1>
    <p class="text-center text-gray-600 mb-12">
      Most calendars are designed for teams.<br/>
      Slate is designed for freelancers
    </p>

    <div class="grid md:grid-cols-2 gap-8">
      <div class="flex flex-col items-start p-[52px] gap-[45px] bg-white border border-[#DDDDDD] shadow-[0px_13px_19px_rgba(0,0,0,0.07)] rounded-[20px] box-border">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <input
              v-model="form.name"
              type="text"
              placeholder="Your Name"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
          <input
              v-model="form.email"
              type="email"
              placeholder="Your Email"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
          <textarea
              v-model="form.message"
              placeholder="Your Message"
              rows="6"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-y"
          ></textarea>
          <button
              type="submit"
              class="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>

      <div class="space-y-8">

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="contact in contactUs" :key="contact.id" class="flex flex-col items-center text-center">
            <div class="mb-4">
              <img :src="contact.icon" :alt="contact.title" class="w-6 h-6 mx-auto mb-2"/>
              <a
                  class="text-gray-600 hover:text-blue-500 transition-colors text-sm"
                  :href="contact.url"
                  target="_blank"
              >
                {{ contact.title }}
              </a>
            </div>
          </div>
        </div>

        <div class="h-72 rounded-lg overflow-hidden">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987641.9219421695!2d-151.9344637529324!3d61.08721740544133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c8917604b33f41%3A0x257dba5aa78468e3!2sAnchorage%2C%20Alaska%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sca!4v1733151016226!5m2!1sfr!2sca"
              width="600" height="450" style="border:0; border-radius: 0.5rem;" allowfullscreen="true" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="flex space-x-6">
          <SocialMedia color="blue"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SocialMedia from "@/components/SocialMedia.vue";
import {contactUs} from '@/static/data.ts'

export default defineComponent({
  name: 'ContactUs',
  components: {
    SocialMedia
  },
  data() {
    return {
      contactUs,
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form)
    }
  }
})
</script>

<style scoped></style>
