<script setup>
import NavMenu from '@/components/navbar/NavMenu.vue'
import TopHeader from '../components/navbar/TopHeader.vue'
import { onMounted, ref, reactive, computed } from 'vue'
import axios from 'axios'
// import BodyOption from '@/components/navbar/BodyOption.vue'
import GraphDisplay from '../components/body/GraphDisplay.vue'
import FormPop from '../components/body/FormPop.vue'
import { useStore } from '../stores/formPop'

// form parameters
const formData = reactive({
  name: '',
  achievements: '',
  resources: '',
  success: '',
})
// items for the modal form
const store = useStore()
// menuitems to document the detail of your plan
const menuItems = ref([
  { id: 1, name: 'Goals', key: 'goal', type: 'textarea' },
  { id: 2, name: 'What i will do to achieve this', key: 'achieve', type: 'textarea' },
  { id: 3, name: 'Resources and Support Needed', key: 'resourse', type: 'textarea' },
  { id: 4, name: 'What does Success looks like', key: 'success', type: 'textarea' },
  { id: 5, name: 'Target Date for Completion', key: 'target', type: 'date' },
  { id: 6, name: 'Potential Challenges', key: 'challenges', type: 'textarea' },
  { id: 7, name: 'Solution', key: 'solution', type: 'textarea' },
  { id: 8, name: 'Progress Metrics', key: 'progress', type: 'textarea' },
  { id: 9, name: 'Status', key: 'status', type: 'radio' },
  { id: 10, name: 'Feedback', key: 'feedback', type: 'textarea' },
  { id: 11, name: 'Evidence', key: 'evidence', type: 'file' },
])

// API call
const isLoading = ref(false)
const error = ref(null)
const goal = ref({})
// console.log(goal.value)
async function getGoals() {
  isLoading.value = true
  error.value = null
  try {
    const response = await axios.get('./goals2.json')
    if (!response) {
      throw new Error('could not fetch link')
    }
    goal.value = response.data
    // console.log(goal.value)
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
onMounted(() => {
  getGoals()
})
const fetchGoal = computed(() => {
  return goal.value.plans
})
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
          <div class="justify-items-center">
            <div class="block my-1" for="" v-for="item in store.inputItems.first" :key="item">
              <p class="my-4 py-2 border-b-2 border-[#EEEEEE] font-[600]">
                {{ item.name }}
              </p>
              <textarea
                v-if="item.key === 'textarea'"
                class="block w-90 shadow-[0_0_15px_rgba(0,0,0,0.2)] bg-[#EEEEEE] rounded-[7px]"
                name=""
                id=""
                rows="3"
              ></textarea>
              <input
                class="block w-90 bg-[#EEEEEE] shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-[7px] py-2 px-2"
                v-else-if="item.key === 'date'"
                type="date"
              />
              <select
                v-else
                class="w-90 bg-[#EEEEEE] shadow-[0_0_15px_rgba(0,0,0,0.2)] p-2 rounded-[7px]"
                name=""
                id=""
              >
                <option value="">Completed</option>
                <option value="">On going</option>
                <option value="">Not Started</option>
              </select>
            </div>
          </div>
          <!-- second form  -->
          <div class="justify-items-center">
            <div class="block my-1" for="" v-for="item in store.inputItems.second" :key="item">
              <p class="my-4 py-2 border-b-2 border-[#EEEEEE]">{{ item.name }}</p>
              <textarea
                v-if="item.key === 'textarea'"
                class="block w-90 shadow-[0_0_15px_rgba(0,0,0,0.2)] bg-[#EEEEEE] rounded-[7px]"
                name=""
                id=""
                rows="3"
              ></textarea>
            </div>
            <div class="justify-self-end mt-30 mr-5">
              <button
                class="text-white shadow-[0_0_15px_rgba(0,0,0,0.2)] py-2 px-15 rounded-[8px] bg-[#47B65C]"
              >
                Submit Request
              </button>
            </div>
          </div>
        </FormPop>
        <GraphDisplay />
        <div class="mt-5">
          <label for="" class="border-1 border-[#EEEEEE] p-3 rounded-[5px]"
            >Development Plan:
            <select class="development text-[#47B65C]" name="" id="">
              <option value="">Career Goals and Aspiration</option>
              <option value="">Area Of Interest</option>
              <option value="">Mentorship and Skill building</option>
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
              class="flex items-center hover:bg-[#EEEEEE] border-b-2 px-3 border-[#EAEAEA]"
              v-for="goals in fetchGoal"
              :key="goals.id"
            >
              <router-link to="/feedback" class="txt1 py-4 text-[#808080] text-[0.8rem]">{{
                goals.short_term.label
              }}</router-link>
              <router-link to="/feedback" class="txt2 py-4 text-[#808080] text-[0.8rem]">{{
                goals.goal
              }}</router-link>
              <router-link to="/feedback" class="txt3 py-4 text-[#808080] text-[0.8rem]">{{
                goals.completion_date
              }}</router-link>
              <router-link to="/feedback" class="txt4 py-4 text-[#808080] text-[0.8rem]">{{
                goals.status
              }}</router-link>
              <router-link to="/feedback" class="txt5 py-4 text-[#808080] text-[0.8rem]">{{
                goals.feedback
              }}</router-link>
            </div>
          </div>
          <div class="col-span-4 px-2 py-4 bg-[#EEEEEE]">
            <h3 class="pl-3 text-[1.4rem] font-[600]">Details</h3>
            <form @submit="formData" v-for="item in menuItems" :key="item.id" class="my-1 px-3">
              <div
                class="flex bg-[#ffffff] rounded-[7px] justify-between items-center px-3 py-3 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              >
                <p>{{ item.name }}</p>
                <i
                  @click.stop="store.toggleButton(item.key)"
                  :class="[
                    'pi text-[1.4rem]',
                    store.fieldDisplay !== item.key ? 'pi-angle-down' : 'pi-angle-up',
                  ]"
                ></i>
              </div>
              <div
                v-if="item.type === 'textarea' && store.fieldDisplay === item.key"
                class="bg-[#ffffff] py-3 px-4"
              >
                <textarea
                  v-model="formData.name"
                  class="w-full rounded-[7px]"
                  cols="40"
                  rows="4"
                ></textarea>
              </div>
              <div
                class="bg-[#ffffff] py-2 px-4"
                v-else-if="item.type === 'date' && store.fieldDisplay === item.key"
              >
                <input
                  class="w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-[7px] p-2"
                  type="date"
                />
              </div>
              <div
                class="bg-[#ffffff] py-2 px-4"
                v-else-if="item.type === 'file' && store.fieldDisplay === item.key"
              >
                <input
                  class="w-full text-[0.7rem] shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-[7px] p-2 cursor-pointer"
                  type="file"
                  name=""
                  id=""
                />
              </div>
              <div
                class="bg-[#ffffff] py-2 px-4"
                v-else-if="item.type === 'radio' && store.fieldDisplay === item.key"
              >
                <select class="shadow-[0_0_15px_rgba(0,0,0,0.2)] py-1 w-full" name="" id="">
                  <option value="">Completed</option>
                  <option value="">On going</option>
                  <option value="">Not Started</option>
                </select>
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