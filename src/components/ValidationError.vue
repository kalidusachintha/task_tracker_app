<script setup lang="ts">

const props = defineProps<{
  errors: Record<string, string[]>,
  field: string
}>()

</script>

<template>
  <ul
    v-if="props.errors && props.errors[props.field] && props.errors[props.field].length"
    class="flex flex-col text-red-600 gap-1"
  >
    <li v-for="message in props.errors[props.field]" :key="message">
      {{ message }}
    </li>
  </ul>
</template>



