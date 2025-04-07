<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseHeader from '@/components/Layouts/BaseHeader.vue'
import BaseFooter from '@/components/Layouts/BaseFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-r from-indigo-400 bg-blue-800 flex flex-col">
    <BaseHeader />
    <main class="flex-grow container mx-auto px-4 py-6">
      <router-view />
    </main>
    <BaseFooter />
  </div>
</template>

<style scoped></style>
