<script setup lang="ts">
useHead({
  title: 'Pedraal.dev',
  meta: [
    { name: 'description', content: 'Pierre Golfier, développeur web fullstack passionné, expert en Javascript, Vue.js et Ruby on Rails. Développeur de Twitchbuddy et le Maitre des fleurs sur mon temps libre. Venez découvrir mes projets !' },
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
