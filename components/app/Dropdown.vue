<script setup lang="ts">
const open = ref(false)

const eventListener = () => open.value = false

onMounted(() => {
  document.addEventListener('click', eventListener)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', eventListener)
})
</script>

<template>
  <div class="relative">
    <button
      class=" rounded-lg border border-neutral-500 p-2"
      @click.stop="open = !open"
    >
      <slot name="button" />
    </button>

    <Transition
      enter-from-class="opacity-0 -translate-y-4"
      enter-active-class="transition-all ease-out"
      enter-to-class="opacity-1 -translate-y-0"
      leave-from-class="opacity-1 -translate-y-0"
      leave-active-class="transition-all ease-out"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="open"
        class="absolute top-[calc(100%+0.5rem)] right-0 flex flex-col gap-3 rounded-lg bg-neutral-800 p-4 text-white shadow dark:bg-white dark:text-black"
      >
        <slot name="menu" />
      </div>
    </Transition>
  </div>
</template>
