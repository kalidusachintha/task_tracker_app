<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Layouts/Header.vue'
import Footer from '@/components/Layouts/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <Header />
    <main class="flex-grow container mx-auto px-4 py-6">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
