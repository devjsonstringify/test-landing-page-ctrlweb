<template>
  <button
    :class="[
      !overrideMinWidth && 'min-w-[236px]',
      'min-h-[50px] rounded-[100px] font-bold transition-colors text-center',
      variantClasses,
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
    :style="$attrs.style"
  >
    {{ description }}
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    description: {
      type: String,
      required: false,
      default: 'Try For Free'
    },
    variant: {
      type: String,
      required: false,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary', 'outline'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    overrideMinWidth: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const variantClasses = computed(
      () =>
        ({
          primary: 'bg-primary text-white hover:bg-primary-600',
          secondary: 'bg-secondary text-white hover:bg-secondary-600',
          outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
          default: 'bg-white txt-primary-700 text-primary hover:bg-primary/100 hover:text-white'
        })[props.variant]
    )

    return {
      variantClasses
    }
  }
})
</script>

<style scoped></style>
