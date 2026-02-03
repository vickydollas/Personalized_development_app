<script setup>
import NavMenu from '@/components/navbar/NavMenu.vue'
import TopHeader from '../components/navbar/TopHeader.vue'
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'
import BodyOption from '@/components/navbar/BodyOption.vue'
import GraphDisplay from '../components/body/GraphDisplay.vue'
// text area display functionality
const textDisplay = ref(null)
const toggleText = (id) => {
  textDisplay.value = textDisplay.value ? null : id
}
// form parameters
const formData = reactive({
  name: '',
  achievements: '',
  resources: '',
  success: '',
})
// menuitems to document the detail of your plan
const menuItems = ref([
  { id: 1, name: 'Goals', path: '/' },
  { id: 2, name: 'What i will do to achieve this', path: '/goals' },
  { id: 3, name: 'Resources and Support Needed', path: '/portfolio' },
  { id: 4, name: 'What does Success looks like', path: '/writing' },
  { id: 5, name: 'Potential Challenges', path: '/contact' },
  { id: 5, name: 'Solution', path: '/contact' },
  { id: 5, name: 'Progress Metrics', path: '/contact' },
  { id: 5, name: 'Feedback', path: '/contact' },
])

// API call
const isLoading = ref(false)
const error = ref(null)
const goal = ref([])
async function getGoals() {
  isLoading.value = true
  error.value = null
  try {
    const response = await axios.get('./goals.json')
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
</script>
<template>
  <div class="bg-[#EEEEEE] pb-7">
    <TopHeader />
    <NavMenu />
    <div>
      <BodyOption />
      <div class="py-5 px-4 bg-[#ffffff] rounded-[6px] mx-20">
        <div class="flex items-center justify-between py-5 border-b-2 border-[#808080]">
          <h2 class="text-[1.5rem] font-[600]">Development Plan</h2>
          <button class="bg-[#47B65C] text-white cursor-pointer px-8 py-2 rounded-[5px]">
            Development Plan Request
          </button>
        </div>
        <div class="flex items-center bg-[#EEEEEE] p-3 rounded-[50px] mt-5">
          <p class="mr-10">Short term goal (3-6 months)</p>
          <p class="mr-10">Mid term goal (7-12 months)</p>
          <p class="mr-10">Short term goal (13-24 months)</p>
        </div>
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
              class="flex items-center border-b-2 px-3 border-[#EAEAEA]"
              v-for="goals in goal"
              :key="goals.id"
            >
              <p class="txt1 py-4 text-[#808080] text-[0.8rem]">{{ goals.id }}</p>
              <p class="txt2 py-4 text-[#808080] text-[0.8rem]">{{ goals.goal }}</p>
              <p class="txt3 py-4 text-[#808080] text-[0.8rem]">{{ goals.completion_date }}</p>
              <p class="txt4 py-4 text-[#808080] text-[0.8rem]">{{ goals.status }}</p>
              <p class="txt5 py-4 text-[#808080] text-[0.8rem]">{{ goals.feedback }}</p>
            </div>
          </div>
          <div class="col-span-4 px-2 py-4 bg-[#EEEEEE]">
            <h3 class="pl-3 text-[1.4rem] font-[600]">Details</h3>
            <form @submit="formData" v-for="item in menuItems" :key="item.id" class="my-1 px-3">
              <div
                class="flex bg-[#ffffff] justify-between items-center px-3 py-3 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              >
                <p>{{ item.name }}</p>
                <i
                  @click.stop="toggleText(item.id)"
                  :class="[
                    'pi text-[1.4rem]',
                    textDisplay !== item.id ? 'pi-angle-down' : 'pi-angle-up',
                  ]"
                ></i>
              </div>
              <div v-show="textDisplay === item.id" class="bg-[#ffffff] py-7 px-4">
                <textarea v-model="formData.name" class="w-full" cols="40" rows="4"></textarea>
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