<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const isActive = (routePath) => {
  return route.path === routePath
}
</script>
<template>
  <div class="flex items-center border-b-2 border-[#808080] mx-20 py-3 bg-[#EEEEEE]">
    <router-link to="/">Development Plan</router-link>
    <router-link to="/">Skill Assessment</router-link>
    <router-link to="/">Admin</router-link>
    <router-link to="/">All Training Schedule</router-link>
    <router-link to="">Task/Deliverables</router-link>
  </div>
</template>

<style scoped>
a {
  font-family: var(--roboto-mono);
  padding-right: 20px;
  color: #808080;
  font-size: 1.1rem;
}
.active {
  border-bottom: 5px solid red;
}
</style>