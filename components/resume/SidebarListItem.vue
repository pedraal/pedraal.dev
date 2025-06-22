<script setup lang="ts">
defineProps<{
  icon?: string
}>()
</script>

<template>
  <li class="my-1">
    <Icon
      v-if="icon"
      class="mr-1 h-5 w-5"
      :name="icon"
    />
    <span>
      <slot />
    </span>
  </li>
</template>
