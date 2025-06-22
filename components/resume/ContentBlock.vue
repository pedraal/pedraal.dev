<script setup lang="ts">
const props = defineProps<{
  contentPath?: string
}>()

const { data } = await useAsyncData(`resume-${props.contentPath}`, () => queryContent(`/${props.contentPath}`).find())
</script>

<template>
  <div>
    <p class="text-2xl">
      <slot name="title" />
    </p>
    <ResumePrimaryDivider />
    <ul class="list-disc pl-4">
      <template
        v-for="(item, index) of data"
        :key="index"
      >
        <li
          v-if="item.summary"
          class="my-3"
        >
          <slot
            name="item"
            v-bind="item"
          />
        </li>
      </template>
    </ul>
  </div>
</template>
