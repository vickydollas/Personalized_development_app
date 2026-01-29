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
const menuItems = ref([
  { id: 1, name: 'Month', path: '/' },
  { id: 2, name: 'Training Topic', path: '/goals' },
  { id: 3, name: 'Learning Outcome', path: '/portfolio' },
  { id: 4, name: 'Training Method', path: '/writing' },
  { id: 5, name: 'Training Initiator', path: '/contact' },
  { id: 5, name: 'Skill Metric Mapping', path: '/contact' },
  { id: 5, name: 'Status', path: '/contact' },
  { id: 5, name: 'Evidence', path: '/contact' },
])
</script>
<template>
  <div class="bg-[#EEEEEE]">
    <TopHeader />
    <NavMenu />
    <div>
      <BodyOption />
      <div class="py-5 px-4 bg-[#ffffff] mx-20 rounded-[7px]">
        <h2 class="text-[1.5rem] text-[500]">Training Schedule</h2>
        <div></div>
        <div class="grid grid-cols-12">
          <TrainingCard class="col-span-8" :show="false" />
          <div class="col-span-4">
            <h3 class="pl-3 mt-5 text-[1.4rem] font-[600]">Details</h3>
            <div v-for="item in menuItems" :key="item.id" class="my-1 px-3">
              <div
                class="flex bg-[#ffffff] justify-between items-center px-3 py-3 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              >
                <p>{{ item.name }}</p>
                <i
                  @click.stop="toggleText(item.id)"
                  :class="[textDisplay !== item.id ? 'pi-angle-down' : 'pi-angle-up']"
                  class="pi pi-angle-down text-[1.4rem]"
                ></i>
                <!-- <i
                  v-show="textDisplay === item.id"
                  @click="toggleText(item.id)"
                  class="pi pi-angle-up text-[1.4rem]"
                ></i> -->
              </div>
              <div v-show="textDisplay === item.id" class="bg-[#ffffff] py-7 px-4">
                <textarea class="w-full" cols="40" rows="4"></textarea>
              </div>
            </div>
          </div>
        </div>
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