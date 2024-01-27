<script lang="ts" setup>
const config = useRuntimeConfig()

const links = [
  {
    icon: 'carbon:logo-linkedin',
    label: 'LinkedIn',
    href: config.public.linkedin
  },
  {
    icon: 'carbon:logo-github',
    label: 'GitHub',
    href: config.public.github
  },
  {
    icon: 'carbon:at',
    label: 'Email',
    href: 'mailto:' + config.public.email
  }
]
</script>

<template>
  <nav class="flex justify-between" id="navbar">
    <div class="flex items-center gap-8">
      <NuxtLink to="/" class="font-handwritten hover:text-primary -mt-4 text-3xl transition-colors">
        <span class="font-handwritten inline-block -rotate-12 text-6xl">pg</span>
      </NuxtLink>
      <div class="flex gap-2 items-center">
        <AppNavlink path="/" class="max-md:hidden">Accueil</AppNavlink>
        <AppNavlink path="/resume">CV</AppNavlink>
        <AppNavlink path="/blog">Blog</AppNavlink>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <AppColorModeSwitch />
      <span>|</span>
      <AppExternalLink v-for="link in links" :key="link.href" :href="link.href" :aria-label="link.label">
        <Icon :name="link.icon" class="h-5 w-5" />
      </AppExternalLink>
    </div>
  </nav>
</template>
