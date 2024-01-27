<script setup lang="ts">
const props = defineProps<{
  contentPath?: string
}>()

const { data } = await useAsyncData(`resume-${props.contentPath}`, () => queryContent(`/${props.contentPath}`).find())
</script>


<template>
  <div>
    <p class="text-2xl">
      <slot name="title"></slot>
    </p>
    <ResumePrimaryDivider></ResumePrimaryDivider>
    <ul class="list-disc pl-4">
      <li v-for="item of data" class="my-3">
        <slot name="item" v-bind="item"></slot>
      </li>
    </ul>
  </div>
</template>
