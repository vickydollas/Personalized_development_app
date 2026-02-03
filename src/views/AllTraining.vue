<script setup>
import NavMenu from '@/components/navbar/NavMenu.vue'
import TopHeader from '../components/navbar/TopHeader.vue'
import { ref } from 'vue'
import TrainingCard from '../components/training/TrainingCard.vue'
import BodyOption from '@/components/navbar/BodyOption.vue'
import GraphDisplay from '../components/body/GraphDisplay.vue'
// text area display functionality
const textDisplay = ref(null)
const toggleText = (id) => {
  textDisplay.value = textDisplay.value ? null : id
}
// menuitems to document the detail of your plan
</script>
<template>
  <div class="bg-[#EEEEEE] pb-7">
    <TopHeader />
    <NavMenu />
    <div>
      <BodyOption />
      <div class="py-5 px-4 bg-[#ffffff] mx-20 rounded-[7px]">
        <h2>All Training Schedule</h2>
        <GraphDisplay :showLast="true" />
        <TrainingCard :show="true" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.development {
  border: none;
}
textarea {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  /* border: none; */
}
textarea:hover {
  border: none;
}
</style>