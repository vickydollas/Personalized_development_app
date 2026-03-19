<script setup>
import NavMenu from '@/components/navbar/NavMenu.vue'
import TopHeader from '../components/navbar/TopHeader.vue'
import { onMounted, ref, reactive, computed, watch } from 'vue'
import axios from 'axios'
import BodyOption from '@/components/navbar/BodyOption.vue'
import GraphDisplay from '../components/body/GraphDisplay.vue'
import FormPop from '../components/body/FormPop.vue'
import { useStore } from '../stores/formPop'
import { useTrainingCard } from '../stores/trainingCard'

// menuitems to document the detail of your plan
const menuItems = ref([
  { id: 1, name: 'Goals', key: 'goal', type: 'textarea' },
  { id: 2, name: 'Department', key: 'department', type: 'textarea' },
  { id: 4, name: 'Level', key: 'level', type: 'textarea' },
  { id: 5, name: 'Target Date for Completion', key: 'target', type: 'date' },
  { id: 6, name: 'Potential Challenges', key: 'challenges', type: 'textarea' },
  { id: 9, name: 'Status', key: 'status', type: 'radio' },
  { id: 10, name: 'Feedback', key: 'feedback', type: 'textarea' },
  { id: 11, name: 'Evidence', key: 'evidence', type: 'file' },
  { id: 12, name: 'Finance', key: 'finance', type: 'textarea' },
  { id: 13, name: 'Term', key: 'term', type: 'textarea' },
])
// data manipulationa and filtering
const store = useStore()
const library = useTrainingCard()
const filtering = ref('')
const validation = ref(false)
const sendValidation = () => {
  if (filtering.value !== '') {
    validation.value = true
  } else validation.value = false
}
const exportedQuarter = ref('')
const termChange = ref('short')
const handleQuarterchange = (val) => {
  exportedQuarter.value = val
}
const handleTermchange = (val) => {
  termChange.value = val
}
const filterData = computed(() => {
  // console.log('filtering re-evaluation', library.goal)
  const { quarter, year, level, department } = exportedQuarter.value
  // if (!quarter && !year && !level && !department) return Object.values(library.goal).flat()
  const applyFilter = (filters) => {
    return filters.filter((item) => {
      const setQuarter = library.handleQuarterType(item.completion_date)
      const matchQuarter = !quarter || setQuarter.calcQuarter === quarter
      const matchYear = !year || setQuarter.year === year
      const matchLevel =
        !level ||
        item.level.toLowerCase().replaceAll(' ', '') === level.toLowerCase().replaceAll(' ', '')
      const matchDepartment =
        !department ||
        item.department.toLowerCase().replaceAll(' ', '') ===
          department.toLowerCase().replaceAll(' ', '')
      return matchQuarter && matchYear && matchLevel && matchDepartment
    })
  }
  if (!filtering.value) {
    const allItems = Object.values(library.goal).flat()
    // console.log(allItems)
    return applyFilter(allItems)
  }
  const selectedCategoryItems = library.goal[filtering.value] || []
  // console.log('data when filter is selected', selectedCategoryItems)
  return applyFilter(selectedCategoryItems)
})
const filteredName = computed(() => {
  return filtering.value
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
})

const careerGoalsStats = computed(() => {
  const title = filteredName
  const currentFilter = filtering.value
  const filter = termChange.value
  const getTerm = (dataArray) => {
    if (!dataArray) return []
    return dataArray.filter((item) => item.timeline === filter)
  }

  return {
    overAll: {
      careerGoal: Object.values(library.getPercentage(library.goal['career_goals'])),
      areaOfInterest: Object.values(library.getPercentage(library.goal['areas_of_interest'])),
      mentorship: Object.values(library.getPercentage(library.goal['mentorship'])),
    },
    filteredSeries: Object.values(library.getPercentage(getTerm(library.goal[currentFilter]))),
    filteredName: title,
  }
})
// form parameters
const formData = ref({
  goal: '',
  work_rate: 'Work',
  completion_date: '',
  challenges: '',
  objectives: '',
  feedback: 'Nil',
  department: '',
  timeline: '',
  status: 'Not Started',
})
const filterFormData = computed(() => {
  return {
    goal: formData.value.goal,
    work_rate: formData.value.work_rate,
    completion_date: formData.value.completion_date,
    // challenges: formData.value.challenges,
    feedback: formData.value.feedback,
    status: formData.value.status,
    department: formData.value.department,
    timeline: formData.value.timeline,
  }
})
const selectedSection = computed(() => {
  const formatting = formData.value.objectives.toLowerCase().replaceAll(' ', '_')
  return formatting
})
// updating the form to the
const buttonSubmit = () => {
  const allCategory = Object.values(library.goal).flat()
  const allId = allCategory.map((item) => Number(item.id))
  const maxId = allId.length > 0 ? Math.max(...allId) : 0
  const newId = (maxId + 1).toString()
  const payload = {
    id: newId,
    ...filterFormData.value,
  }
  library.addItems(payload, 'development', selectedSection.value)
}
const deleteItem = () => {
  library.deleteItems(library.indexing, 'landing', filtering.value)
}
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
    <BodyOption @quarterExpo="handleQuarterchange" />
    <div class="">
      <div class="py-1 px-4 bg-[#ffffff] rounded-[6px] mx-20">
        <div class="flex items-center justify-between py-5 border-b-2 border-[#808080]">
          <h2 class="text-[1.5rem] font-[600]">Development Plan</h2>
          <button
            @click="store.toggleModal"
            class="bg-[#47B65C] text-white cursor-pointer px-8 py-2 rounded-[5px]"
          >
            Development Plan Request
          </button>
        </div>
        <FormPop>
          <form @submit.prevent="formSubmit" class="flex justify-between px-3">
            <div class="">
              <div class="block my-1" for="" v-for="item in store.inputItems.first" :key="item">
                <p class="my-4 py-2 border-b-2 border-[#EEEEEE] font-[600]">
                  {{ item.name }}
                </p>
                <textarea
                  v-if="item.key === 'textarea'"
                  v-model="formData[item.field]"
                  class="block w-90 shadow-[0_0_15px_rgba(0,0,0,0.2)] bg-[#EEEEEE] rounded-[7px]"
                  name=""
                  id=""
                  rows="3"
                ></textarea>
                <input
                  v-model="formData[item.field]"
                  class="block w-90 bg-[#EEEEEE] shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-[7px] py-2 px-2"
                  v-else-if="item.key === 'date'"
                  type="date"
                />
                <select
                  v-model="formData[item.field]"
                  v-else
                  class="w-90 bg-[#EEEEEE] shadow-[0_0_15px_rgba(0,0,0,0.2)] p-2 rounded-[7px]"
                  name=""
                  id=""
                >
                  <option v-for="opt in item.option" :key="opt" :value="opt">
                    {{ opt }}
                  </option>
                </select>
              </div>
            </div>
            <!-- second form  -->
            <div class="">
              <div class="block my-1" for="" v-for="item in store.inputItems.second" :key="item">
                <p class="my-4 py-2 border-b-2 border-[#EEEEEE]">{{ item.name }}</p>
                <textarea
                  v-model="formData[item.field]"
                  v-if="item.key === 'textarea'"
                  class="block w-90 shadow-[0_0_15px_rgba(0,0,0,0.2)] bg-[#EEEEEE] rounded-[7px]"
                  name=""
                  id=""
                  rows="3"
                ></textarea>
                <select
                  v-model="formData[item.field]"
                  v-else
                  class="w-90 bg-[#EEEEEE] shadow-[0_0_15px_rgba(0,0,0,0.2)] p-2 rounded-[7px]"
                  name=""
                  id=""
                >
                  <option v-for="opt in item.option" :key="opt" :value="opt">
                    {{ opt }}
                  </option>
                </select>
              </div>
              <div class="justify-self-end mt-30 mr-5">
                <button
                  @click="buttonSubmit"
                  type="submit"
                  class="text-white shadow-[0_0_15px_rgba(0,0,0,0.2)] py-2 px-15 rounded-[8px] bg-[#47B65C]"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </form>
        </FormPop>
        <GraphDisplay
          @exportSeries="handleTermchange"
          :validation="validation"
          :graphData="careerGoalsStats"
        />
        <div class="mt-5">
          <label for="" class="border-1 border-[#EEEEEE] p-3 rounded-[5px]"
            >Development Plan:
            <select
              class="development text-[#47B65C]"
              v-model="filtering"
              @change="sendValidation"
              name=""
              id=""
            >
              <option value="">Select Plan</option>
              <option value="career_goals">Career Goals and Aspiration</option>
              <option value="areas_of_interest">Area Of Interest</option>
              <option value="mentorship">Mentorship and Skill building</option>
            </select>
          </label>
        </div>
        <div class="header grid grid-cols-12 mt-5 border border-[#EAEAEA] rounded-[7px]">
          <div class="col-span-8">
            <div class="flex items-center py-4 px-3 border-b-2 border-[#EAEAEA]">
              <p class="txt1 text-[0.9rem]">S/N</p>
              <p class="txt2 text-[0.9rem]">Goals</p>
              <p class="txt3 text-[0.9rem]">Date for Completion</p>
              <p class="txt4 text-[0.9rem]">Status</p>
              <p class="txt5 text-[0.9rem]">Feedback</p>
            </div>
            <div
              class="flex items-center hover:bg-[#EEEEEE] cursor-pointer border-b-2 px-3 border-[#EAEAEA]"
              :class="[library.selectedId === item.id ? 'bg-[#EEEEEE]' : 'inherit']"
              v-for="(item, index) in filterData"
              :key="item.id"
              @click="library.handleSubmit(item, index)"
              @dblclick="library.startEditing(item)"
            >
              <p class="txt1 py-4 text-[#808080] text-[0.8rem]">{{ index + 1 }}</p>
              <div class="txt2 py-4 text-[#808080] text-[0.8rem]">
                <input
                  v-model="library.editBuffer.goal"
                  class="w-80 py-1 bg-white rounded-[7px]"
                  v-if="library.editingId === item.id"
                  @keyup.enter="saveEdit(index)"
                  @keyup.esc="library.cancelEdit"
                  type="text"
                />
                <p v-else class="txt2">{{ item.goal }}</p>
              </div>
              <p class="txt3 py-4 text-[#808080] text-[0.8rem]">{{ item.completion_date }}</p>
              <p class="txt4 py-4 text-[#808080] text-[0.8rem]">{{ item.status }}</p>
              <p class="txt5 py-4 text-[#808080] text-[0.8rem]">{{ item.feedback }}</p>
            </div>
          </div>
          <div class="col-span-4 px-2 py-4 bg-[#EEEEEE]">
            <h3 class="pl-3 text-[1.4rem] font-[600]">Details</h3>
            <form @submit="formData" v-for="item in menuItems" :key="item.id" class="my-1 px-3">
              <div
                @click.stop="store.toggleButton(item.key)"
                class="flex bg-[#ffffff] rounded-[7px] justify-between items-center px-3 py-3 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              >
                <p>{{ item.name }}</p>
                <i
                  :class="[
                    'pi text-[1.4rem]',
                    store.fieldDisplay !== item.key ? 'pi-angle-down' : 'pi-angle-up',
                  ]"
                ></i>
              </div>
              <div v-if="store.fieldDisplay === item.key">
                <p class="py-2 pl-2" v-show="item.key === 'goal'">{{ library.activeGoal.goal }}</p>
                <p class="py-2 pl-2" v-show="item.key === 'status'">
                  {{ library.activeGoal.status }}
                </p>
                <p class="py-2 pl-2" v-show="item.key === 'feedback'">
                  {{ library.activeGoal.feedback }}
                </p>
                <p class="py-2 pl-2" v-show="item.key === 'target'">
                  {{ library.activeGoal.completion_date }}
                </p>
                <p class="py-2 pl-2" v-show="item.key === 'achieve'">
                  {{ library.activeGoal.work_rate }}
                </p>
                <p class="py-2 pl-2" v-show="item.key === 'challenges'">
                  {{ library.activeGoal.challenges }}
                </p>
                <p class="py-2 pl-2" v-show="item.key === 'department'">
                  {{ library.activeGoal.department }}
                </p>
                <p class="py-2 pl-2" v-show="item.key === 'level'">
                  {{ library.activeGoal.level }}
                </p>
                <p class="py-2 pl-2" v-show="item.key === 'finance'">
                  {{ library.activeGoal.level }}
                </p>
                <p class="py-2 pl-2" v-show="item.key === 'term'">
                  {{ library.activeGoal.timeline }}
                </p>
              </div>
            </form>
            <div class="flex justify-end">
              <button
                @click="deleteItem"
                class="mx-3 my-2 py-2 px-8 rounded-[7px] bg-[#FF0000] text-white"
              >
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
.development {
  border: none;
}
.txt1 {
  flex: 0 0 10%;
}
.txt2 {
  flex: 0 0 40%;
}
.txt3 {
  flex: 0 0 20%;
}
.txt4 {
  flex: 0 0 15%;
}
.txt5 {
  flex: 0 0 15%;
}
textarea {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  /* border: none; */
}
textarea:hover {
  border: none;
}
</style>