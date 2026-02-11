<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isActive = (routePath) => {
  return route.path === routePath
}
const navMenu = ref([
  { name: 'Development Plan', path: '/' },
  { name: 'Skill Assessment', path: '/assessment' },
  { name: 'Training Schedule', path: '/schedule' },
  { name: 'All Training Schedule', path: '/all-schedule' },
  { name: 'Task/Deliverables', path: '/deliverables' },
])
</script>
<template>
  <div class="flex items-center border-b-2 border-[#808080] mx-20">
    <router-link
      :class="[
        'text-[#808080] py-3 mr-5',
        isActive(item.path) ? 'border-b-4 border-[#227CBF]' : 'border-[#808080]',
      ]"
      v-for="item in navMenu"
      :key="item"
      :to="item.path"
      >{{ item.name }}</router-link
    >
  </div>
</template>

<style scoped>
a {
  font-family: var(--roboto-mono);
  font-size: 1rem;
}
.active {
  border-bottom: 5px solid red;
}
</style>