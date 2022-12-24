<script setup lang="ts">
defineProps<{
  href: string
  target?: string
}>()
</script>

<template>
  <a :href="href" :target="target" class="hover:text-indigo-600">
    <slot />
  </a>
</template>
