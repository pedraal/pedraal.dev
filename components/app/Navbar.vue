<script lang="ts" setup>
const { navigation } = useContent()
</script>

<template>
  <nav class="flex justify-between">
    <div class="flex items-center gap-8">
      <NuxtLink to="/" class="font-handwritten hover:text-primary -mt-4 text-3xl transition-colors">
        <span class="font-handwritten inline-block -rotate-12 text-6xl">pg</span>
      </NuxtLink>
      <div class="hidden gap-2 md:flex">
        <AppNavlink
          v-for="link of navigation"
          :key="link._path"
          :path="link._path"
        >
          {{ link.title }}
        </AppNavlink>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <PrimerColorModeSwitch />
      <span>|</span>
      <PrimerExternalLink href="https://www.linkedin.com/in/pierre-golfier-9aa804109/" target="_blank">
        <Icon name="carbon:logo-linkedin" class="h-5 w-5" />
      </PrimerExternalLink>
      <PrimerExternalLink href="https://github.com/pedraal" target="_blank">
        <Icon name="carbon:logo-github" class="h-5 w-5" />
      </PrimerExternalLink>
      <PrimerExternalLink href="mailto:pgolfier.pro@gmail.com" target="_blank">
        <Icon name="carbon:at" class="h-5 w-5" />
      </PrimerExternalLink>
      <span class="md:hidden">|</span>
      <PrimerDropdown class="md:hidden">
        <template #button>
          <span class="sr-only">Menu</span>
          <svg aria-hidden="true" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
          </svg>
        </template>
        <template #menu>
          <NuxtLink
            v-for="link of navigation"
            :key="link._path"
            :to="link._path"
            class="font-handwritten"
          >
            {{ link.title }}
          </NuxtLink>
        </template>
      </PrimerDropdown>
    </div>
  </nav>
</template>
