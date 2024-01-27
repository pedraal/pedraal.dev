<template>
  <div>
    <p class="m-0 font-semibold">
      <slot name="title"></slot>
    </p>
    <ResumePrimaryDivider></ResumePrimaryDivider>
    <div class="text-sm">
      <slot></slot>
    </div>
  </div>
</template>
