<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryContent('/').find())
</script>

<template>
  <NuxtLayout>
    <AppHeader />
    <div class="mt-36">
      <section v-for="page in data" :key="page._id" class="my-12">
        <ContentRenderer :value="page">
          <h2 class="font-handwritten mb-6 text-3xl font-semibold underline decoration-indigo-600 decoration-wavy underline-offset-8">
            {{ page.title }}
          </h2>
          <ContentRendererMarkdown :value="page" :excerpt="true" />
        </ContentRenderer>
        <div v-if="page.excerpt.children.length !== page.body.children.length" class="text-right">
          <AppNavlink :path="page._path" class="mt-4">
            Voir plus
          </AppNavlink>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>
