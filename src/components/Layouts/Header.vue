<script setup lang="ts">

</script>

<template>
  <header class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <router-link :to="{name: 'task.list'}" class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
          </svg>
          <span class="text-2xl font-bold">Task Tracker</span>
        </router-link>
        <nav>
          <ul class="flex space-x-6">
            <li>
              <router-link :to="{name: 'task.create'}" class="hover:text-indigo-200 font-medium transition-colors">Add Task</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
