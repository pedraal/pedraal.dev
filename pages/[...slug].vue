<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(`page-${route.params.slug}`, () => queryContent('/', ...route.params.slug).findOne())

if (!data.value)
  throw createError({ statusCode: 404 })

useHead({
  title: `Pedraal.dev - ${data.value?.title || 'Not found'}`,
  meta: [
    { name: 'description', content: data.value?.description },
  ],
})
</script>

<template>
  <main v-if="data" class="prose dark:prose-invert max-w-full mt-4 [&_h2>a]:no-underline [&_h3>a]:no-underline dark:[&_strong]:text-white [&_h2]:font-handwritten [&_h2]:text-3xl">
    <ContentRenderer :value="data">
      <h1 class="mb-0 font-handwritten text-5xl">
        {{ data.title }}
      </h1>
      <p v-if="data.updatedAt" class="mt-2 text-sm text-gray-400">
        Dernière mise à jour : {{ data.updatedAt }}
      </p>
      <p v-if="data.publishedAt" class="mt-1 text-sm text-gray-400">
        Publié le : {{ new Date(data.publishedAt).toLocaleDateString('fr') }}
      </p>
      <ContentRendererMarkdown :value="data" />
      <p class="mb-0">À bientôt,</p>
      <p class="mt-0 font-handwritten text-2xl">Pierre Golfier</p>
    </ContentRenderer>
  </main>
</template>
