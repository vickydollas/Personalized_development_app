<script setup>
import TopHeader from '../components/navbar/TopHeader.vue'
import NavMenu from '../components/navbar/NavMenu.vue'
import BodyOption from '@/components/navbar/BodyOption.vue'
import { ref } from 'vue'

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
const goal = ref([
  {
    id: 1,
    skill: 'Public Speaking',
    current_state: 'Beginner',
    desired_state: 'Expert',
    status: 'On going',
    feedback: 'Satisfactory',
  },
  {
    id: 2,
    skill: 'Public Speaking',
    current_state: 'Intermediate',
    desired_state: 'Expert',
    status: 'Completed',
    feedback: 'Satisfactory',
  },
  {
    id: 3,
    skill: 'Public Speaking',
    current_state: 'Beginner',
    desired_state: 'Expert',
    status: 'Not started',
    feedback: 'Satisfactory',
  },
  {
    id: 4,
    skill: 'Public Speaking',
    current_state: 'Intermediate',
    desired_state: 'Expert',
    status: 'On going',
    feedback: 'Satisfactory',
  },
  {
    id: 5,
    skill: 'Public Speaking',
    current_state: 'Beginner',
    desired_state: 'Expert',
    status: 'Completed',
    feedback: 'Satisfactory',
  },
  {
    id: 6,
    skill: 'Public Speaking',
    current_state: 'Intermediate',
    desired_state: 'Expert',
    status: 'Not started',
    feedback: 'Satisfactory',
  },
  {
    id: 7,
    skill: 'Public Speaking',
    current_state: 'Beginner',
    desired_state: 'Expert',
    status: 'On going',
    feedback: 'Satisfactory',
  },
  {
    id: 8,
    skill: 'Public Speaking',
    current_state: 'Intermediate',
    desired_state: 'Expert',
    status: 'Completed',
    feedback: 'Satisfactory',
  },
  {
    id: 9,
    skill: 'Public Speaking',
    current_state: 'Beginner',
    desired_state: 'Expert',
    status: 'Not started',
    feedback: 'Satisfactory',
  },
  {
    id: 10,
    skill: 'Public Speaking',
    current_state: 'Intermediate',
    desired_state: 'Expert',
    status: 'On going',
    feedback: 'Satisfactory',
  },
  {
    id: 11,
    skill: 'Public Speaking',
    current_state: 'Beginner',
    desired_state: 'Expert',
    status: 'Completed',
    feedback: 'Satisfactory',
  },
  {
    id: 12,
    skill: 'Public Speaking',
    current_state: 'Intermediate',
    desired_state: 'Expert',
    status: 'Not started',
    feedback: 'Satisfactory',
  },
])
</script>
<template>
  <div class="pb-5">
    <TopHeader />
    <NavMenu />
    <div class="bg-[#EEEEEE]">
      <BodyOption />
      <div class="py-2 px-4 bg-[#ffffff] mx-20">
        <div></div>
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
              class="flex items-center border-b-2 px-3 border-[#EAEAEA]"
              v-for="goals in goal"
              :key="goals.id"
            >
              <p class="txt1 py-4 text-[#808080] text-[0.8rem]">{{ goals.id }}</p>
              <p class="txt2 py-4 text-[#808080] text-[0.8rem]">{{ goals.skill }}</p>
              <p class="txt3 py-4 text-[#808080] text-[0.8rem]">{{ goals.current_state }}</p>
              <p class="txt4 py-4 text-[#808080] text-[0.8rem]">{{ goals.desired_state }}</p>
              <p class="txt5 py-4 text-[#808080] text-[0.8rem]">{{ goals.status }}</p>
              <p class="txt5 py-4 text-[#808080] text-[0.8rem]">{{ goals.feedback }}</p>
            </div>
          </div>
          <div class="col-span-4 px-2 py-4 bg-[#EEEEEE]">
            <h3 class="pl-3 text-[1.4rem] font-[600]">Details</h3>
            <div v-for="item in menuItems" :key="item.id" class="my-[2px] px-3">
              <div
                class="flex bg-[#ffffff] justify-between items-center px-3 py-3 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              >
                <p>{{ item.name }}</p>
                <i
                  v-show="textDisplay !== item.id"
                  @click.stop="toggleText(item.id)"
                  class="pi pi-angle-down text-[1.4rem]"
                ></i>
                <i
                  v-show="textDisplay === item.id"
                  @click="toggleText(item.id)"
                  class="pi pi-angle-up text-[1.4rem]"
                ></i>
              </div>
              <div v-show="textDisplay === item.id" class="bg-[#ffffff] py-7 px-4">
                <textarea class="w-full" cols="40" rows="4"></textarea>
              </div>
            </div>
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