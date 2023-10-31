<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <a :href="href" target="_blank" class="hover:text-indigo-600">
    <slot />
  </a>
</template>
