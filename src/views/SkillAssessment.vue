<script setup>
import TopHeader from '../components/navbar/TopHeader.vue'
import NavMenu from '../components/navbar/NavMenu.vue'
// import BodyOption from '@/components/navbar/BodyOption.vue'
import FormPop from '../components/body/FormPop.vue'
import { ref } from 'vue'
import { useStore } from '../stores/formPop'
import { useTrainingCard } from '../stores/trainingCard'

// menuitems to document the detail of your plan
const menuItems = ref([
  { id: 1, name: 'Goals', key: 'goal', path: '/' },
  { id: 2, name: 'Current State', key: 'state', path: ['Expert', 'Begineer', 'Intermediate'] },
  { id: 4, name: 'Desired State', key: 'desired', path: ['Expert', 'Professional'] },
  { id: 5, name: 'Initiatives', key: 'initiatives', path: '/contact' },
  { id: 6, name: 'Status', key: 'status', path: ['completed', 'On going', 'Not started'] },
  { id: 7, name: 'Feedback', key: 'feedback', path: '/contact' },
  { id: 8, name: 'Evidence', key: 'evidence', path: '/contact' },
])
// menuitems for form pop up
const popUp = ref([
  { name: 'Skills', key: 'textarea' },
  { name: 'Current State', key: 'select' },
  { name: 'Gap', key: 'textarea' },
  { name: 'Desired State', key: 'select' },
  { name: 'Initiatives', key: 'textarea' },
])
// modal activeness
const store = useStore()
const library = useTrainingCard()
const deleteItem = () => {
  library.deleteItems(library.indexing)
  // console.log(library.indexing)
}
const series = ref([
  {
    name: 'Current State',
    data: [1.1, 1.9, 2.8, 1.3, 2.3, 2.7], // Yellow bars
  },
  {
    name: 'Desired State',
    data: [1.9, 2.7, 4.0, 2.5, 2.8, 4.0], // Green bars
  },
])
const chartOptions = ref({
  chart: {
    type: 'bar',
    toolbar: { show: false },
  },
  colors: ['#FFC107', '#4CAF50'], // Matching your Yellow and Green
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '45%', // Spacing between bar groups
      endingShape: 'rounded', // Old versions
      borderRadius: 6, // New versions: creates those rounded tops
    },
  },
  dataLabels: {
    enabled: false, // Your image doesn't show numbers on top
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  grid: {
    borderColor: '#000000',
    strokeDashArray: 8, // Makes the background lines dashed like your image
    yaxis: {
      lines: { show: true },
    },
  },
  xaxis: {
    categories: ['skill 1', 'skill 2', 'skill 3', 'skill 4', 'skill 5', 'skill 6'],
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    min: 0,
    max: 4,
    tickAmount: 4,
    labels: {
      style: { fontSize: '14px', colors: '#333' },
      formatter: (val) => {
        const levels = ['Beginner', 'Intermediate', 'Proficient', 'Advanced', 'Expert']
        return levels[Math.round(val)]
      },
    },
  },
  legend: {
    show: true, // Hiding legend as requested
  },
})
</script>
<template>
  <div class="bg-[#EEEEEE] pb-7">
    <TopHeader />
    <NavMenu />
    <div class="bg-[#EEEEEE]">
      <!-- <BodyOption /> -->
      <div class="py-2 px-4 bg-[#ffffff] my-3 mx-20 rounded-[7px]">
        <div class="rounded-[7px] px-2 py-4 my-10 shadow-[0_0_15px_rgba(0,0,0,0.2)] pl-3">
          <div class="flex items-center my-3 border-b border-[#000000] p-5 justify-between">
            <h3 class="text-[1.5rem] font-[600]">Skill Assessment</h3>
            <button
              @click="store.toggleModal"
              class="py-2 px-10 bg-[#47B65C] cursor-pointer rounded-[7px] text-white"
            >
              Skill Request
            </button>
          </div>
          <FormPop :layOut="true" title="Skill Request Form">
            <div class="p-5 my-5 rounded-[8px]">
              <div
                v-for="item in popUp"
                :key="item.key"
                class="mx-auto py-2 mb-1 px-6 rounded-[9px]"
              >
                <p class="w-110 mb-1 rounded-[8px]">{{ item.name }}</p>
                <textarea
                  v-if="item.key === 'textarea'"
                  class="w-110 rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                  rows="3"
                ></textarea>
                <select
                  class="w-110 rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.2)] py-1 px-3"
                  v-else
                  name=""
                  id=""
                >
                  <option value="">Begineer</option>
                  <option value="">Intermediate</option>
                  <option value="">Expert</option>
                </select>
              </div>
            </div>
            <button class="bg-[#47B65C] ml-3 px-7 py-2 rounded-[7px]">Submit</button>
          </FormPop>
          <apexchart width="420" type="bar" :options="chartOptions" :series="series"></apexchart>
        </div>
        <div>
          <h3 class="text-[0.8rem] text-[#808080]">
            Do you the full understanding of your skills Metrics?
          </h3>
          <select
            class="w-100 shadow-[0_0_15px_rgba(0,0,0,0.2)] border border-[#EEEEEE] p-2 mt-2 rounded-[7px]"
            name=""
            id=""
          >
            <option value="">Yes</option>
            <option value="">No</option>
          </select>
        </div>
        <div class="header grid grid-cols-12 mt-5 border border-[#EAEAEA] rounded-[7px]">
          <div class="col-span-8">
            <div class="flex items-center py-4 px-3 border-b-2 border-[#EAEAEA]">
              <p class="txt1 text-[0.9rem]">S/N</p>
              <p class="txt2 text-[0.9rem]">Skills</p>
              <p class="txt3 text-[0.9rem]">Current State</p>
              <p class="txt4 text-[0.9rem]">Desired State</p>
              <p class="txt5 text-[0.9rem]">Status</p>
              <p class="txt6 text-[0.9rem]">Feedback</p>
            </div>
            <div
              :class="[
                'flex items-center hover:bg-[#EEEEEE] cursor-pointer border-b-2 px-3 border-[#EAEAEA]',
                library.selectedId === goals.id[0].num ? 'bg-[#EEEEEE]' : 'inherit',
              ]"
              v-for="(goals, index) in library.skill"
              :key="goals.id"
              @click="library.handleSubmit(goals, index)"
            >
              <p
                v-for="(opt, key) in goals"
                :key="key"
                :class="['py-4 text-[#808080] text-[0.8rem]', opt[0].size]"
              >
                {{ opt[0].num }}
              </p>
            </div>
          </div>
          <div class="col-span-4 px-2 py-4 bg-[#EEEEEE]">
            <h3 class="pl-3 text-[1.4rem] font-[600]">Details</h3>
            <div v-for="item in menuItems" :key="item.id" class="my-[2px] px-3">
              <div
                @click="store.toggleButton(item.id)"
                class="flex bg-[#ffffff] justify-between items-center px-3 py-3 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              >
                <p>{{ item.name }}</p>
                <i
                  :class="[
                    'pi text-[1.4rem]',
                    store.fieldDisplay === item.id ? 'pi-angle-up' : 'pi-angle-down',
                  ]"
                ></i>
              </div>
              <div v-if="store.fieldDisplay === item.id" class="px-2">
                <p v-show="item.key === 'goal'" class="py-2 rounded-[8px]">
                  {{ library.activeGoal?.skill[0]?.num }}
                </p>
                <p v-show="item.key === 'status'" class="py-2 rounded-[8px]">
                  {{ library.activeGoal?.status[0]?.num }}
                </p>
                <p v-show="item.key === 'feedback'" class="py-2 rounded-[8px]">
                  {{ library.activeGoal?.feedback[0]?.num }}
                </p>
                <p v-show="item.key === 'desired'" class="py-2 rounded-[8px]">
                  {{ library.activeGoal?.desired_state[0]?.num }}
                </p>
                <p v-show="item.key === 'state'" class="py-2 rounded-[8px]">
                  {{ library.activeGoal?.current_state[0]?.num }}
                </p>
              </div>
            </div>
            <div @click="deleteItem" class="flex justify-end">
              <button class="mx-3 my-2 py-2 px-8 rounded-[7px] bg-[#FF0000] text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.txt1 {
  flex: 0 0 10%;
}
.txt2 {
  flex: 0 0 20%;
}
.txt3 {
  flex: 0 0 15%;
}
.txt4 {
  flex: 0 0 15%;
}
.txt5 {
  flex: 0 0 15%;
}
.txt5 {
  flex: 0 0 15%;
}
h3,
h2,
h1,
p {
  font-family: var(--roboto-mono);
}
</style> 