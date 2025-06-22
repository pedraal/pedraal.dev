<script setup lang="ts">
useHead({
  title: 'Pedraal.dev - CV',
  meta: [
    { name: 'description', content: 'CV de Pierre Golfier, développeur web full-stack' },
  ],
})

const colorMode = useColorMode()
const iframe = ref<HTMLIFrameElement>()

watch(colorMode, () => {
  iframe.value?.contentWindow?.location.reload()
}, { immediate: true })

const resumeUrl = computed(() => {
  if (import.meta.env.PROD) {
    return `/cv-pierre-golfier-${colorMode.value}.pdf`
  }
  else {
    return `/resume/cv-pierre-golfier.pdf?theme=${colorMode.value}`
  }
})
</script>

<template>
  <div>
    <div class="flex justify-between items-center rounded-full">
      <h1 class="h2 !mb-0">
        Mon CV
      </h1>
      <div>
        <ClientOnly>
          <a
            :href="resumeUrl"
            target="_blank"
            class="flex items-center gap-2 border rounded py-1 px-2"
          >
            <Icon
              name="carbon:download"
              class="h-5 w-5"
            />
            Télécharger
          </a>
          <template #fallback>
            <a class="flex items-center gap-2 border rounded py-1 px-2">
              <Icon
                name="carbon:download"
                class="h-5 w-5"
              />
              Télécharger
            </a>
          </template>
        </ClientOnly>
      </div>
    </div>
    <div class="overflow-auto">
      <iframe
        ref="iframe"
        src="/resume_html"
        style="width: 210mm; height: 297mm;"
        class="mt-8 rounded-lg mx-auto"
        frameborder="0"
      />
    </div>
  </div>
</template>
