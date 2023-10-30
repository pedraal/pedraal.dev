<script setup lang="ts">
const props = defineProps<{
  variant?: 'yellow' | 'blue' | 'green' | 'pink'
  size?: 'md' | 'lg'
}>()

const variants = {
  yellow: 'bg-yellow-300',
  blue: 'bg-blue-300',
  green: 'bg-green-300',
  pink: 'bg-pink-300',
}

const sizes = {
  md: 'w-44 h-44',
  lg: 'w-64 h-64',
}

const variant = variants[props.variant || 'yellow']
const size = sizes[props.size || 'md']
</script>

<template>
  <div class="font-handwritten relative rounded-sm p-4 pt-8 shadow-lg" :class="[variant, size]">
    <div class="absolute inset-x-0 top-0 z-10 h-8 bg-slate-400/10" />
    <div class="h-full bg-[repeating-linear-gradient(transparent,transparent_25px,rgba(0,0,0,0.03)_26px,rgba(0,0,0,0.03)_27px)] pt-1 leading-[27px] text-black">
      <slot />
    </div>
  </div>
</template>
