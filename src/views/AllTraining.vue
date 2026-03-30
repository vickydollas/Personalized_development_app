<script setup>
import NavMenu from '@/components/navbar/NavMenu.vue'
import TopHeader from '../components/navbar/TopHeader.vue'
import { ref, computed } from 'vue'
import TrainingCard from '../components/training/TrainingCard.vue'
import BodyOption from '@/components/navbar/BodyOption.vue'
import TrainingGraph from '../components/body/TrainingGraph.vue'
import { useTrainingCard } from '../stores/trainingCard'

const store = useTrainingCard()
// text area display functionality
const textDisplay = ref(null)
const toggleText = (id) => {
  textDisplay.value = textDisplay.value ? null : id
}
const exportedQuarter = ref({})
const termChange = ref('short')
const handleQuarterchange = (val) => {
  exportedQuarter.value = val
}
const handleTermchange = (val) => {
  termChange.value = val
}
const getTerm = (dataArray) => {
  if (!dataArray) return []
  return dataArray.filter((item) => item.timeline === termChange.value)
}
const exportedFilterData = ref(null)
const handleFilterData = (val) => {
  exportedFilterData.value = val
}
const percentage = computed(() => {
  return Object.values(store.getPercentage(getTerm(exportedFilterData.value)))
})
</script>
<template>
  <div class="bg-[#EEEEEE] pb-7">
    <TopHeader />
    <NavMenu />
    <div>
      <BodyOption @quarterExpo="handleQuarterchange" />
      <div class="py-5 px-4 bg-[#ffffff] my-3 mx-20 rounded-[7px]">
        <h2 class="text-[1.5rem] text-[500]">All Training Schedule</h2>
        <TrainingGraph @exportSeries="handleTermchange" :graphData="percentage" />
        <TrainingCard :show="true" :quarter="exportedQuarter" @filterData="handleFilterData" />
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