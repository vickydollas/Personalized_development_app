<script setup>
import NavMenu from '@/components/navbar/NavMenu.vue'
import TopHeader from '../components/navbar/TopHeader.vue'
import { ref } from 'vue'
import TrainingCard from '../components/training/TrainingCard.vue'
import BodyOption from '@/components/navbar/BodyOption.vue'
// text area display functionality
const textDisplay = ref(null)
const toggleText = (id) => {
  textDisplay.value = textDisplay.value ? null : id
}
// menuitems to document the detail of your plan
</script>
<template>
  <div class="bg-[#EEEEEE]">
    <TopHeader />
    <NavMenu />
    <div>
      <BodyOption />
      <div class="py-5 px-4 bg-[#ffffff] mx-20 rounded-[7px]">
        <h2>All Training Schedule</h2>
        <div></div>
        <TrainingCard :show="true" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.development {
  border: none;
}
.txt1 {
  flex: 0 0 10%;
}
.txt2 {
  flex: 0 0 10%;
}
.txt3 {
  flex: 0 0 10%;
}
.txt4 {
  flex: 0 0 10%;
}
.txt5 {
  flex: 0 0 10%;
}
.txt6 {
  flex: 10%;
}
.txt7 {
  flex: 0 0 10%;
}
.txt8 {
  flex: 0 0 10%;
}
.txt9 {
  flex: 0 0 10%;
}
.txt10 {
  flex: 0 0;
}
textarea {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  /* border: none; */
}
textarea:hover {
  border: none;
}
option {
  border: none;
  font-size: 0.8rem;
}
select:hover {
  border: none;
}
</style>