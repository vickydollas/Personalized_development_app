<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const systemWidth = window.innerWidth || screen.width
const display = ref(false)
const validateDisplay = () => {
  if (systemWidth > 750) {
    display.value = true
  }
}
onMounted(() => {
  validateDisplay()
  document.addEventListener('resize', validateDisplay)
})
onUnmounted(() => {
  validateDisplay()
  document.removeEventListener('resize', validateDisplay)
})
</script>
<template>
  <div class="app">
    <RouterView v-if="display" />
    <div class="bg-[#000000] h-[100vh] flex justify-center" v-else>
      <div class="text-[2rem] text-white">Try on Desktop</div>
    </div>
  </div>
</template>
<style scoped>
</style>