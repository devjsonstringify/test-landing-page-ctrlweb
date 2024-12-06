<template>
  <footer class="bg-[#252B42] text-gray-300 py-16">
    <div class="max-w-[1210px] mx-auto px-[72px] px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-white font-bold text-xl mb-5 text-center sm:text-left">Pages</h3>
          <ul v-for="page in pages" :key="page.id" class="space-y-3">
            <li class="my-3 text-center sm:text-left">
              <a :href="page.url" class="hover:text-white transition">{{ page.name }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold text-xl mb-5 text-center sm:text-left">Tomothy</h3>
          <ul v-for="tomothy in tomothys" :key="tomothy.id" class="space-y-3">
            <li class="my-3 text-center sm:text-left">
              <a :href="tomothy.url" class="hover:text-white transition">{{ tomothy.name }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold text-xl mb-5 text-center sm:text-left">Jane Black</h3>
          <ul v-for="jb in janeBlack" :key="jb.id" class="space-y-3">
            <li class="my-4 text-center sm:text-left">
              <a :href="jb.url" class="hover:text-white transition">{{ jb.name }}</a>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <div v-for="contact in contacts" :key="contact.id" class="flex items-start space-x-3">
            <img :src="contact.icon" alt="icon" class="w-6 h-6" />
            <span>{{ contact.title }}</span>
          </div>

          <div class="flex space-x-4 pt-4">
            <SocialMedia parentElement="justify-center w-full" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { janeBlack, navLinks, tomothys, contactUsFooter } from '@/static/data.ts'
import SocialMedia from '@/components/SocialMedia.vue'

export default defineComponent({
  name: 'Footer',
  components: {
    SocialMedia
  },
  setup() {
    return {
      pages: navLinks,
      tomothys,
      janeBlack,
      contacts: contactUsFooter
    }
  }
})
</script>

<style scoped></style>
