<template>
  <div id="Contact" class="max-w-[1210px] mx-auto py-20 px-5 2xl:px-0">
    <h1 class="text-4xl text-center font-medium text-gray-800 mb-4">Contact Us</h1>
    <p class="text-center text-gray-600 mb-12">
      Most calendars are designed for teams.<br />
      Slate is designed for freelancers
    </p>

    <div class="grid md:grid-cols-[35%_65%] gap-8">
      <div class="block sm:hidden">
        <ContactsFooter
          :classes="{
            parentElement: 'text-left',
            innerParent: 'flex w-full',
            socialIcon: 'ml-0 mr-4',
            description: 'text-left'
          }"
        />
      </div>
      <div
        class="flex flex-col items-start p-[52px] gap-[45px] bg-white border border-[#DDDDDD] shadow-[0px_13px_19px_rgba(0,0,0,0.07)] rounded-[20px] box-border"
      >
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <h2 class="text-2xl font-bold text-gray-800 text-center pb-8">Contact us</h2>
          <input
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            class="w-full px-4 py-3 border rounded-[100px] font-normal placeholder:text-black placeholder:opacity-100 bg-neutral-100 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Your Email"
            class="w-full px-4 py-3 rounded-[100px] font-normal placeholder:text-black placeholder:opacity-100 bg-neutral-100 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
          <textarea
            v-model="form.message"
            placeholder="Your Message"
            rows="6"
            class="w-full px-4 py-3 font-normal placeholder:text-black placeholder:opacity-100 bg-neutral-100 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-y"
          ></textarea>
          <Button
            type="submit"
            description="Send"
            :override-min-width="true"
            class="min-w-[145px]"
          />
        </form>
      </div>

      <div class="space-y-8 hidden sm:block">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="contact in contactUs"
            :key="contact.id"
            class="flex flex-col items-center text-center"
          >
            <div class="mb-4">
              <img :src="contact.icon" :alt="contact.title" class="w-6 h-6 mx-auto mb-2" />
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

        <div class="hidden sm:flex h-72 rounded-lg overflow-hidden flex items-center w-full">
          <div class="max-w-96 my-auto ml-0 sm:ml-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987641.9219421695!2d-151.9344637529324!3d61.08721740544133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c8917604b33f41%3A0x257dba5aa78468e3!2sAnchorage%2C%20Alaska%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sca!4v1733151016226!5m2!1sfr!2sca"
              width="500"
              height="450"
              style="border: 0; border-radius: 0.5rem"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div class="flex space-x-6">
          <SocialMedia color="blue" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SocialMedia from '@/components/SocialMedia.vue'
import ContactsFooter from '@/components/ContactsFooter.vue'
import Button from './Button.vue'
import { contactUs } from '@/static/data.ts'

export default defineComponent({
  name: 'ContactUs',
  components: {
    SocialMedia,
    Button,
    ContactsFooter
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
