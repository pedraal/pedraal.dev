<script lang="ts" setup>
const { navigation } = useContent()
</script>

<template>
  <nav class="flex justify-between">
    <div class="flex items-center gap-8">
      <NuxtLink to="/" class="font-handwritten hover:text-primary -mt-4 text-3xl transition-colors">
        <span class="font-handwritten inline-block -rotate-12 text-6xl">pg</span>
      </NuxtLink>
      <div class="flex gap-2">
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
    </div>
  </nav>
</template>
