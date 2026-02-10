<script setup>
import NavMenu from '@/components/navbar/NavMenu.vue'
import TopHeader from '../components/navbar/TopHeader.vue'
import { ref } from 'vue'
import TrainingCard from '../components/training/TrainingCard.vue'
import BodyOption from '@/components/navbar/BodyOption.vue'
import GraphDisplay from '../components/body/GraphDisplay.vue'
import FormPop from '../components/body/FormPop.vue'
import { useStore } from '../stores/formPop'

const store = useStore()
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
// menuitems for form pop up
const popUp = ref([
  { name: 'Month', key: 'date' },
  { name: 'Training Topic', key: 'textarea' },
  { name: 'Learning Outcome', key: 'textarea' },
  { name: 'Training Method', key: 'select', option: ['Begineer', 'Intermediate', 'Expert'] },
  { name: 'Training Initiator', key: 'select', option: ['Self', 'Instructor'] },
  { name: 'Skill Matrix Mapping', key: 'textarea' },
])
</script>
<template>
  <div class="bg-[#EEEEEE] pb-7">
    <TopHeader />
    <NavMenu />
    <div>
      <BodyOption />
      <div class="py-5 px-4 bg-[#ffffff] mx-20 rounded-[7px]">
        <div class="flex items-center px-5 justify-between">
          <h2 class="text-[1.5rem] text-[500]">Training Schedule</h2>
          <button
            @click="store.toggleModal"
            class="py-2 px-8 bg-[#47B65C] cursor-pointer rounded-[7px] text-white"
          >
            Skill Request
          </button>
        </div>
        <FormPop :layOut="true" title="Skill Request Form" :isModalActive="store.isModalActive">
          <div class="p-5 my-5 rounded-[8px]">
            <div v-for="item in popUp" :key="item.key" class="mx-auto py-2 mb-1 px-6 rounded-[9px]">
              <p class="w-110 mb-1 rounded-[8px]">{{ item.name }}</p>
              <textarea
                v-if="item.key === 'textarea'"
                class="w-110 rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                rows="3"
              ></textarea>
              <select
                class="w-110 rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.2)] py-1 px-3"
                v-else-if="item.key === 'select'"
                name=""
                id=""
              >
                <option v-for="opt in item.option" :key="opt" value="">{{ opt }}</option>
              </select>
              <input
                type="date"
                class="w-110 rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.2)] py-1 px-3"
                v-else
              />
            </div>
          </div>
          <button class="bg-[#47B65C] px-7 py-2 rounded-[7px]">Submit</button>
        </FormPop>
        <GraphDisplay :showLast="true" />
        <div class="grid grid-cols-12">
          <TrainingCard class="col-span-8" :show="true" />
          <div class="col-span-4">
            <h3 class="pl-3 mt-5 text-[1.4rem] font-[600]">Details</h3>
            <div v-for="item in menuItems" :key="item.id" class="my-1 px-3">
              <div
                class="flex bg-[#ffffff] justify-between items-center px-3 py-3 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              >
                <p>{{ item.name }}</p>
                <i
                  @click.stop="store.toggleButton(item.id)"
                  :class="[store.fieldDisplay !== item.id ? 'pi-angle-down' : 'pi-angle-up']"
                  class="pi pi-angle-down text-[1.4rem]"
                ></i>
              </div>
              <div v-show="store.fieldDisplay === item.id" class="bg-[#ffffff] py-7 px-4">
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