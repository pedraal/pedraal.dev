<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})

const { copy, copied, isSupported } = useClipboard({ source: props.code })

const languageIcon = computed(() => {
  switch (props.language) {
    case 'json':
      return 'i-mdi-code-json'
    case 'yaml':
      return 'i-simple-icons-yaml'
    case 'toml':
      return 'i-simple-icons-toml'
    case 'jsx':
      return 'i-mdi-language-jsx'
    case 'tsx':
      return 'i-file-icons-tsx-alt'
    case 'ruby':
      return 'i-mdi-language-ruby'
    case 'python':
      return 'i-mdi-language-python'
    case 'java':
      return 'i-fa6-brands-java'
    case 'php':
      return 'i-mdi-language-php'
    case 'shell':
      return 'i-material-symbols-terminal'
    case 'bash':
      return 'i-material-symbols-terminal'
    case 'sql':
      return 'i-carbon-sql'
    case 'graphql':
      return 'i-mdi-graphql'
    case 'markdown':
      return 'i-tabler-markdown'
    case 'plaintext':
      return 'i-heroicons-document'
    case 'html':
      return 'i-mdi-language-html5'
    case 'css':
      return 'i-mdi-language-css3'
    case 'scss':
      return 'i-mdi-language-scss'
    case 'js':
      return 'i-mdi-language-javascript'
    case 'ts':
      return 'i-mdi-language-typescript'
    case 'vue':
      return 'i-mdi-vuejs'
    default:
      return 'i-tabler-braces'
  }
})
</script>

<template>
  <div>
    <div class="bg-gray-900 flex gap-4 items-center justify-between rounded-t-lg py-2 px-4">
      <div class="flex items-center gap-2 text-white font-light text-sm">
        <Icon
          :name="languageIcon"
          class="w-5 h-5"
        />
        <span class="">{{ filename }}</span>
      </div>
      <ClientOnly>
        <button
          v-if="isSupported"
          @click="copy(code)"
        >
          <Icon :name="copied ? 'i-heroicons-check-circle' : 'i-heroicons-clipboard-document-list'" />
        </button>
      </ClientOnly>
    </div>
    <pre
      :class="$props.class"
      class="bg-gray-800 rounded-t-none rounded-b-lg mt-0"
    ><slot /></pre>
  </div>
</template>
