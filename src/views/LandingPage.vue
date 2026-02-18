<script setup>
import NavMenu from '@/components/navbar/NavMenu.vue'
import TopHeader from '../components/navbar/TopHeader.vue'
import { onMounted, ref, reactive, computed, watch } from 'vue'
import axios from 'axios'
// import BodyOption from '@/components/navbar/BodyOption.vue'
import GraphDisplay from '../components/body/GraphDisplay.vue'
import FormPop from '../components/body/FormPop.vue'
import { useStore } from '../stores/formPop'

// form parameters
const formData = ref({
  goal: '',
  work_rate: '',
  completion_date: '',
  challenges: '',
  objectives: '',
  feedback: '',
  status: 'Not Started',
})
async function formSubmit() {
  const filterFormData = {
    goal: formData.value.goal,
    work_rate: formData.value.work_rate,
    completion_date: formData.value.completion_date,
    challenges: formData.value.challenges,
    feedback: formData.value.feedback,
    status: formData.value.status,
  }
  const postingLink = formData.value.objectives
  try {
    const url = `https://6995880fb081bc23e9c39067.mockapi.io/api/v1/${postingLink}`
    if (!url) {
      console.log('wrong link')
    }
    const response = await axios.post(url, filterFormData)
    if (response.ok) {
      console.log('successfully updated')
    }
  } catch (error) {
    console.error(error)
  } finally {
    console.log('done')
  }
}
// items for the modal form
const store = useStore()
// menuitems to document the detail of your plan
const menuItems = ref([
  { id: 1, name: 'Goals', key: 'goal', type: 'textarea' },
  { id: 2, name: 'What i will do to achieve this', key: 'achieve', type: 'textarea' },
  { id: 4, name: 'What does Success looks like', key: 'success', type: 'textarea' },
  { id: 5, name: 'Target Date for Completion', key: 'target', type: 'date' },
  { id: 6, name: 'Potential Challenges', key: 'challenges', type: 'textarea' },
  { id: 9, name: 'Status', key: 'status', type: 'radio' },
  { id: 10, name: 'Feedback', key: 'feedback', type: 'textarea' },
  { id: 11, name: 'Evidence', key: 'evidence', type: 'file' },
])

// API call
const filtering = ref('career_goals')
const isLoading = ref(false)
const error = ref(null)
const goal = ref(null)
async function getGoals() {
  isLoading.value = true
  error.value = null
  try {
    const response = await axios.get(
      `https://6995880fb081bc23e9c39067.mockapi.io/api/v1/${filtering.value}`
    )
    if (!response) {
      console.log('could not fetch link')
    }
    goal.value = response.data
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
onMounted(() => {
  getGoals()
})
watch(filtering, () => {
  getGoals()
})
const fetchGoal = computed(() => {
  if (!goal.value) return {}
  return goal.value
})

const activeGoal = ref({})
const selectedId = ref(null)
const handleSubmit = (line) => {
  activeGoal.value = line
  selectedId.value = line.id
}
</script>
<template>
  <div class="bg-[#EEEEEE] pb-7">
    <TopHeader />
    <NavMenu />
    <div class="my-5">
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
                  <option value="career_goals">Career Goals and Aspiration</option>
                  <option value="areas_of_interest">Area of Interest</option>
                  <option value="mentorship">Mentorship and Skill Building</option>
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
              </div>
              <div class="justify-self-end mt-30 mr-5">
                <button
                  type="submit"
                  class="text-white shadow-[0_0_15px_rgba(0,0,0,0.2)] py-2 px-15 rounded-[8px] bg-[#47B65C]"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </form>
        </FormPop>
        <GraphDisplay />
        <div class="mt-5">
          <label for="" class="border-1 border-[#EEEEEE] p-3 rounded-[5px]"
            >Development Plan:
            <select class="development text-[#47B65C]" v-model="filtering" name="" id="">
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
              :class="[selectedId === item.id ? 'bg-[#EEEEEE]' : 'inherit']"
              v-for="(item, index) in fetchGoal"
              :key="item"
              @click="handleSubmit(item)"
            >
              <p class="txt1 py-4 text-[#808080] text-[0.8rem]">{{ index + 1 }}</p>
              <p class="txt2 py-4 text-[#808080] text-[0.8rem]">{{ item.goal }}</p>
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
                <p class="py-2 pl-2" v-show="item.key === 'goal'">{{ activeGoal.goal }}</p>
                <p class="py-2 pl-2" v-show="item.key === 'status'">{{ activeGoal.status }}</p>
                <p class="py-2 pl-2" v-show="item.key === 'feedback'">{{ activeGoal.feedback }}</p>
                <p class="py-2 pl-2" v-show="item.key === 'target'">
                  {{ activeGoal.completion_date }}
                </p>
                <p class="py-2 pl-2" v-show="item.key === 'achieve'">
                  {{ activeGoal.work_rate }}
                </p>
                <p class="py-2 pl-2" v-show="item.key === 'challenges'">
                  {{ activeGoal.challenges }}
                </p>
              </div>
            </form>
            <div class="flex justify-end">
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