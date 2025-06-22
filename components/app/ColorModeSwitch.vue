<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
  <button
    aria-label="Color Mode"
    class="inline-block hover:text-indigo-600"
    @click="onClick"
  >
    <ColorScheme>
      <Icon
        :name="colorMode.value === 'dark' ? 'carbon:moon' : 'carbon:sun'"
        class="h-5 w-5 hover:text-indigo-600"
      />
    </ColorScheme>
  </button>
</template>
