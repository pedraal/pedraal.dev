<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'printable',
  },
})

definePageMeta({
  layout: false,
})

const config = useRuntimeConfig()
</script>

<template>
  <div
    class="bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-100"
    style="width: 210mm; height: 297mm;"
  >
    <div class="flex flex-col h-full font-base">
      <div class="flex">
        <div class="w-64 flex justify-center mr-8 bg-zinc-200 dark:bg-zinc-700 p-4 pt-8">
          <img
            src="/photo.jpeg"
            alt="Pierre Golfier"
            class="w-48 rounded-full aspect-square -mb-16 relative z-10"
          >
        </div>
        <div class="grow flex items-center pt-8">
          <div class="uppercase">
            <p class="text-6xl">
              Pierre
            </p>
            <p class="text-6xl font-bold">
              Golfier
            </p>
          </div>
        </div>
      </div>
      <div class="w-full py-8 bg-primary flex">
        <p class="w-64 mr-8" />
        <p class="text-3xl font-semibold text-white grow flex items-center">
          Développeur full-stack
        </p>
      </div>
      <div class="grow flex flex-col">
        <div class="grow flex">
          <div class="min-w-[16rem] w-64 grow h-full flex mr-4 bg-zinc-200 dark:bg-zinc-700 p-4">
            <div class="flex flex-col gap-6 w-full pt-2">
              <ResumeSidebarBlock>
                <template #title>
                  Contact
                </template>
                <ul>
                  <ResumeSidebarListItem icon="carbon:at">
                    {{ config.public.email }}
                  </ResumeSidebarListItem>
                  <ResumeSidebarListItem icon="carbon:phone">
                    {{ config.public.phone }}
                  </ResumeSidebarListItem>
                  <ResumeSidebarListItem icon="carbon:location">
                    Ceyzériat (01)
                  </ResumeSidebarListItem>
                  <ResumeSidebarListItem icon="carbon:link">
                    https://pedraal.dev
                  </ResumeSidebarListItem>
                </ul>
              </ResumeSidebarBlock>

              <ResumeSidebarBlock>
                <template #title>
                  Compétences
                </template>
                <ul>
                  <ResumeSidebarListItem icon="tabler:brand-typescript">
                    Typescript
                  </ResumeSidebarListItem>
                  <ResumeSidebarListItem icon="teenyicons:vue-outline">
                    Vue.js · Nuxt
                  </ResumeSidebarListItem>
                  <ResumeSidebarListItem icon="mdi:nodejs">
                    Node · Deno
                  </ResumeSidebarListItem>
                  <ResumeSidebarListItem icon="mdi:language-ruby-on-rails">
                    Ruby on Rails · Hotwired
                  </ResumeSidebarListItem>
                  <ResumeSidebarListItem icon="material-symbols:database-outline">
                    Mongodb · pgsql
                  </ResumeSidebarListItem>
                  <ResumeSidebarListItem icon="mdi:docker">
                    Docker
                  </ResumeSidebarListItem>
                </ul>
              </ResumeSidebarBlock>

              <ResumeSidebarBlock>
                <template #title>
                  Langues
                </template>
                <ul>
                  <ResumeSidebarListItem>Français : langue maternelle</ResumeSidebarListItem>
                  <ResumeSidebarListItem>Anglais : avancé</ResumeSidebarListItem>
                </ul>
              </ResumeSidebarBlock>

              <div class="grow flex items-end justify-center">
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  CV généré depuis mon site Nuxt
                </p>
              </div>
            </div>
          </div>
          <div class="h-full p-4 pr-8">
            <div class="flex flex-col gap-4">
              <ResumeContentBlock content-path="experiences">
                <template #title>
                  Expériences professionnelles
                </template>
                <template #item="{ title, date, role, summary }">
                  <p class="font-semibold">
                    {{ title }} · <span class="text-sm">{{ date }}</span>
                  </p>
                  <p class="text-sm font-medium">
                    {{ role }}
                  </p>
                  <p class="text-sm text-zinc-600 dark:text-zinc-400">
                    {{ summary }}
                  </p>
                </template>
              </ResumeContentBlock>
              <ResumeContentBlock content-path="formations">
                <template #title>
                  Formations
                </template>
                <template #item="{ title, school, date, summary }">
                  <p class="font-semibold">
                    {{ title }} · <span class="text-sm">{{ school }} · {{ date }}</span>
                  </p>
                  <ul
                    v-if="typeof summary === 'object'"
                    class="list-[circle] text-sm pl-4 text-zinc-600 dark:text-zinc-400"
                  >
                    <li
                      v-for="item of summary"
                      :key="item[1]"
                    >
                      <a
                        target="_blank"
                        :href="item[1]"
                        class="underline"
                      >{{ item[0] }}</a>
                    </li>
                  </ul>
                  <p
                    v-else
                    class="text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    {{ summary }}
                  </p>
                </template>
              </ResumeContentBlock>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
