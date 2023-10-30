<script setup lang="ts">
defineProps<{
  right?: boolean
}>()
</script>

<template>
  <div class="my-8 flex gap-4" :class="{ 'flex-row-reverse': right }">
    <div class="grow">
      <slot name="side" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
