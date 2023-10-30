<script setup lang="ts">
const {
  // // Global references
  // globals,
  // navigation,
  // surround,
  page,
  // // Computed properties from `page` key
  // excerpt,
  // toc,
  // type,
  // layout,
  // // Computed properties from `surround` key
  // next,
  // prev,
} = useContent()
</script>

<template>
  <NuxtLayout>
    <main class="mt-24">
      <h1 class="font-handwritten mb-6 text-5xl font-semibold underline decoration-indigo-600 decoration-wavy underline-offset-8">
        {{ page.title }}
      </h1>
      <ContentDoc />
    </main>
  </NuxtLayout>
</template>
