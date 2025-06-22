<template>
  <div>
    <p class="m-0 font-semibold">
      <slot name="title" />
    </p>
    <ResumePrimaryDivider />
    <div class="text-sm">
      <slot />
    </div>
  </div>
</template>
