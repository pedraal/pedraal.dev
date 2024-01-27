<script setup lang="ts">
const { data } = await useAsyncData(`home-experiences`, () => queryContent(`/experiences`).find())

function randomRotate() {
  const rotates = ['-rotate-12', '-rotate-6', '-rotate-3', 'rotate-3', 'rotate-6', 'rotate-12']
  return rotates[Math.floor(Math.random() * rotates.length)]
}
</script>

<template>
  <section id="experiences">
    <h2 class="h2">Expériences</h2>

    <AppContentWithSide v-for="(experience, idx) of data" :right="idx % 2 !== 0">
      <h3 class="h3" :id="experience._path?.replace('/experiences/', '')">{{ experience.title }}</h3>
      <AppExternalLink v-if="experience.link" :href="experience.link">
        Voir le site
        <Icon class="-mt-1" size="1.5rem" name="heroicons:arrow-top-right-on-square"></Icon>
      </AppExternalLink>
      <p class="italic font-medium">{{ experience.date }}</p>
      <p class="italic mb-4">{{ experience.role }}</p>
      <div v-html="experience.description"></div>
      <template #side>
        <AppPostit :variant="experience.color" class="mt-4" :class="[randomRotate()]">
          <span v-html="experience.card"></span>
        </AppPostit>
      </template>
    </AppContentWithSide>
  </section>
</template>
