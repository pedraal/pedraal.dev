<script setup lang="ts">
useHead({
  title: 'Pedraal.dev',
  meta: [
    { name: 'description', content: '' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <HomeHeader />
    <div class="mt-36 flex flex-col gap-16">
      <HomeAbout />
      <HomeStacks />
      <HomeExperiences />
    </div>
  </NuxtLayout>
</template>
