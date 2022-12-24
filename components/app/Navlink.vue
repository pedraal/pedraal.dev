<script setup lang="ts">
defineProps<{
  path?: string
}>()
</script>

<template>
  <NuxtLink
    :to="path"
    active-class="font-bold"
    class="font-handwritten group relative mr-6 text-xl"
  >
    <slot />
    <span class="bg-primary absolute top-full left-0 h-1 w-0 rounded-full transition-all group-hover:w-full group-aria-[current=page]:w-full" />
  </NuxtLink>
</template>
