<script lang="ts" setup>
const config = useRuntimeConfig()

const links = [
  {
    icon: 'carbon:logo-github',
    label: 'GitHub',
    href: config.public.github,
  },
  {
    icon: 'carbon:at',
    label: 'Email',
    href: 'mailto:' + config.public.email,
  },
]
</script>

<template>
  <nav
    id="navbar"
    class="flex justify-between"
  >
    <div class="flex items-center gap-8">
      <NuxtLink
        to="/"
        class="font-handwritten hover:text-primary -mt-4 text-3xl transition-colors"
      >
        <span class="font-handwritten inline-block -rotate-12 text-6xl">pg</span>
      </NuxtLink>
      <div class="flex gap-2 items-center">
        <AppNavlink
          path="/"
          class="max-md:hidden"
        >
          Accueil
        </AppNavlink>
        <AppNavlink path="/resume">
          CV
        </AppNavlink>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <AppColorModeSwitch />
      <span>|</span>
      <AppExternalLink
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        :aria-label="link.label"
      >
        <Icon
          :name="link.icon"
          class="h-5 w-5"
        />
      </AppExternalLink>
    </div>
  </nav>
</template>
