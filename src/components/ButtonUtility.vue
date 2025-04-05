<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <button
    :disabled="props.loading"
    class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors"
  >
    <IconSpinner v-if="props.loading"> Processing... </IconSpinner>
    <span v-else>
      <slot> </slot>
    </span>
  </button>
</template>

<style scoped></style>
