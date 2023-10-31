<script lang="ts" setup>
const links = [
  {
    icon: 'carbon:logo-linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pierre-golfier-9aa804109/'
  },
  {
    icon: 'carbon:logo-github',
    label: 'GitHub',
    href: 'https://github.com/pedraal'
  },
  {
    icon: 'carbon:at',
    label: 'Email',
    href: 'mailto:pro@pedraal.fr'
  }
]
</script>

<template>
  <nav class="flex justify-between">
    <div class="flex items-center gap-8">
      <NuxtLink to="/" class="font-handwritten hover:text-primary -mt-4 text-3xl transition-colors">
        <span class="font-handwritten inline-block -rotate-12 text-6xl">pg</span>
      </NuxtLink>
      <div class="flex gap-2 items-center">
        <AppNavlink path="/" class="max-md:hidden">Accueil</AppNavlink>
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
