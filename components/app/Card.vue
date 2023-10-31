<template>
  <div class="rounded-lg border border-neutral-500 bg-white p-4 shadow dark:bg-neutral-900">
    <div class="mb-4 flex h-8 items-center justify-between">
      <div class="font-handwritten text-2xl">
        <slot name="header-title" />
      </div>
      <div class="flex items-center gap-2">
        <slot name="header-icons" />
      </div>
    </div>
    <div class="text-sm">
      <slot />
    </div>
  </div>
</template>
