<script setup lang="ts">
useHead({
  title: 'Pedraal.dev - Blog',
  meta: [
    { name: 'description', content: 'Bienvenue sur le blog de Pierre Golfier. Découvrez mes expériences, mes découvertes et mes réflexions sur le développement web.' },
  ],
})
</script>

<template>
  <h1 class="h2">Mon blog</h1>
  <p class="mb-8">Retrouvez ici tous mes articles parlant de développement web ou nouvelles technologies</p>
  <main>
    <ContentList :query="{ path: '/blog', sort: [{ publishedAt: -1 }] }" v-slot="{ list }">
      <AppCard v-for="article in list" :key="article._path" class="my-2">
        <template #header-title>
          <NuxtLink :to="article._path">
            <h2>{{ article.title }}</h2>
          </NuxtLink>
        </template>
        <template #header-icons>
          <Icon size="1.5rem" :name="article.icon"></Icon>
        </template>
        <p class="font-handwritten text-lg">Publié le {{ article.publishedAt }}</p>
        <p class="mb-4">{{ article.description }}</p>
        <NuxtLink :to="article._path" class="underline">Lire l'article</NuxtLink>
      </AppCard>
    </ContentList>
  </main>
</template>
