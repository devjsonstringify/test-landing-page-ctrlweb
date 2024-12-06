<template>
  <div
    v-for="contact in contactUs"
    :key="contact.id"
    :class="['flex flex-col items-center text-center', classes.parentElement]"
  >
    <div :class="['mb-4', classes.innerParent]">
      <img
        :src="contact.icon"
        :alt="contact.title"
        :class="['w-6 h-6 mx-auto mb-2', classes.socialIcon]"
      />
      <a
        :class="[
          'text-gray-600 hover:text-blue-500 transition-colors text-sm',
          classes.description
        ]"
        :href="contact.url"
        target="_blank"
      >
        {{ contact.title }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contactUs } from '@/static/data.ts'

export default defineComponent({
  name: 'ContactsFooter',
  components: {},
  props: {
    classes: {
      type: Object,
      default: () => ({
        parentElement: '',
        innerParent: '',
        socialIcon: '',
        description: ''
      })
    }
  },
  setup() {
    return {
      contactUs
    }
  }
})
</script>

<style scoped></style>
