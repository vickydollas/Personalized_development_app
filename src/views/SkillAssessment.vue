<script setup>
import TopHeader from '../components/navbar/TopHeader.vue'
import NavMenu from '../components/navbar/NavMenu.vue'
import BodyOption from '@/components/navbar/BodyOption.vue'
import FormPop from '../components/body/FormPop.vue'
import { computed, ref } from 'vue'
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
  { name: 'Skills', key: 'textarea', field: 'name' },
  { name: 'Current State', key: 'select', field: 'current_state' },
  { name: 'Gap', key: 'textarea', field: 'gap' },
  { name: 'Desired State', key: 'select', field: 'desired_state' },
  { name: 'Initiatives', key: 'textarea', field: 'initiatives' },
])
const submitForm = () => {
  library.addItems(formData.value, 'assessment')
}
// modal activeness
const store = useStore()
const library = useTrainingCard()
const formData = ref({
  name: '',
  current_state: '',
  desired_state: '',
  status: 'Not Started',
  feedback: 'Not satisfactory',
})
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
// data manipulation and filtering
const exportedQuarter = ref('')
const handleQuarterchange = (val) => {
  exportedQuarter.value = val
}
const filterData = computed(() => {
  const { quarter, year, department, level } = exportedQuarter.value
  const data = library.skill
  if (!quarter && !year && !department && !level) return data
  // console.log(quarter, year)
  return data.filter((item) => {
    const setQuarter = library.handleQuarterType(item.date)
    const matchQuarter = !quarter || setQuarter.calcQuarter === quarter
    const matchYear = !year || setQuarter.year === year
    const matchDepartment =
      !department ||
      item.department.toLowerCase().replaceAll(' ', '') ===
        department.toLowerCase().replaceAll(' ', '')
    const matchLevel =
      !level ||
      item.level.toLowerCase().replaceAll(' ', '') === level.toLowerCase().replaceAll(' ', '')
    return matchQuarter && matchYear && matchLevel && matchDepartment
  })
})
const saveEdit = (index) => {
  filterData.value[index] = { ...library.editBuffer }

  library.editingId = null
  library.editBuffer = {}
}
</script>
<template>
  <div class="bg-[#EEEEEE] pb-7">
    <TopHeader />
    <NavMenu />
    <div class="bg-[#EEEEEE]">
      <BodyOption @quarterExpo="handleQuarterchange" />
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
              <p>{{ formData.name }}</p>
              <div
                v-for="item in popUp"
                :key="item.key"
                class="mx-auto py-2 mb-1 px-6 rounded-[9px]"
              >
                <p class="w-110 mb-1 rounded-[8px]">{{ item.name }}</p>
                <textarea
                  v-if="item.key === 'textarea'"
                  v-model="formData[item.field]"
                  class="w-110 rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                  rows="3"
                ></textarea>
                <select
                  v-model="formData[item.field]"
                  class="w-110 rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.2)] py-1 px-3"
                  v-else
                  name=""
                  id=""
                >
                  <option value="Begineer">Begineer</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
            </div>
            <button @click="submitForm" class="bg-[#47B65C] ml-3 px-7 py-2 rounded-[7px]">
              Submit
            </button>
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
              <p v-for="col in library.tableColumns" :key="col.key" :class="col.size">
                {{ col.label }}
              </p>
            </div>
            <div
              v-for="(row, index) in filterData"
              :key="row.id"
              @click="library.handleSubmit(row, index)"
              @dblclick="library.startEditing(row)"
              :class="[
                'flex items-center hover:bg-[#EEEEEE] cursor-pointer border-b-2 px-3 border-[#EAEAEA]',
                library.selectedId === row.id ? 'bg-[#EEEEEE]' : 'bg-inherit',
              ]"
            >
              <p :class="['py-4 text-[#808080] text-[0.8rem] flex-[0_0_10%]']">{{ index + 1 }}</p>
              <div :class="['py-2 text-[#808080] text-[0.8rem] flex-[0_0_20%]']">
                <input
                  v-model="library.editBuffer.name"
                  v-if="library.editingId === row.id"
                  @keyup.enter="saveEdit(index)"
                  @keyup.esc="library.cancelEdit"
                  type="text"
                  class="bg-white py-1 rounded-[7px]"
                />
                <p v-else>{{ row.name }}</p>
              </div>
              <p :class="['py-4 text-[#808080] text-[0.8rem] flex-[0_0_15%]']">
                {{ row.current_state }}
              </p>
              <p :class="['py-4 text-[#808080] text-[0.8rem] flex-[0_0_15%]']">
                {{ row.desired_state }}
              </p>
              <p :class="['py-4 text-[#808080] text-[0.8rem] flex-[0_0_15%]']">{{ row.status }}</p>
              <p :class="['py-4 text-[#808080] text-[0.8rem] flex-[0_0_25%]']">
                {{ row.feedback }}
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
                  {{ library.activeGoal.name }}
                </p>
                <p v-show="item.key === 'status'" class="py-2 rounded-[8px]">
                  {{ library.activeGoal.status }}
                </p>
                <p v-show="item.key === 'feedback'" class="py-2 rounded-[8px]">
                  {{ library.activeGoal?.feedback }}
                </p>
                <p v-show="item.key === 'desired'" class="py-2 rounded-[8px]">
                  {{ library.activeGoal?.desired_state }}
                </p>
                <p v-show="item.key === 'state'" class="py-2 rounded-[8px]">
                  {{ library.activeGoal?.current_state }}
                </p>
              </div>
            </div>
            <div @click="library.skill.splice(indexing.value, 1)" class="flex justify-end">
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