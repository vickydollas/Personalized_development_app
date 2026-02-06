<script setup>
import { ref } from 'vue'
import TopHeader from '../components/navbar/TopHeader.vue'
import NavMenu from '../components/navbar/NavMenu.vue'

const inputItems = ref({
  first: [
    { id: 1, name: 'Goal', key: 'textarea' },
    { id: 2, name: 'Resources and Support Needed', key: 'textarea' },
    { id: 3, name: 'Potential Chanllenges', key: 'textarea' },
    { id: 4, name: 'Target Date for completion', key: 'date' },
    { id: 5, name: 'Progress Metric (Outcome Based)', key: 'textarea' },
    { id: 6, name: 'Feedback', key: 'textarea' },
  ],
  second: [
    { id: 1, name: 'What i will do to achieve this', key: 'textarea' },
    { id: 2, name: 'What does success look like?', key: 'textarea' },
    { id: 3, name: 'Solution', key: 'textarea' },
    { id: 4, name: 'Status', key: 'select' },
    { id: 5, name: 'Evidence', key: 'file' },
  ],
})
</script>
<template>
  <div>
    <TopHeader />
    <div class="bg-[#EEEEEE] px-20 py-10">
      <div class="bg-[#FFFFFF] rounded-[7px] py-3">
        <h1 class="text-[1.8rem] font-[700] py-2 mx-10 pt-5 border-b border-[#000000]">
          Learn to improve content writing skill
        </h1>
        <div
          class="flex gap-5 justify-center shadow-[0_0_15px_rgba(0,0,0,0.2)] pb-10 m-10 rounded-[7px]"
          action=""
        >
          <div>
            <div class="block my-3" for="" v-for="item in inputItems.first" :key="item">
              <p class="my-4 py-2 border-b-2 border-[#EEEEEE] font-[600]">{{ item.name }}</p>
              <textarea
                v-if="item.key === 'textarea'"
                class="block w-150 bg-[#EEEEEE] rounded-[7px]"
                name=""
                id=""
                rows="4"
              ></textarea>
              <input class="block w-150 bg-[#EEEEEE] rounded-[7px] py-5 px-2" v-else type="date" />
            </div>
          </div>
          <div>
            <div class="block my-3" for="" v-for="item in inputItems.second" :key="item">
              <p class="my-4 py-2 border-b-2 border-[#EEEEEE]">{{ item.name }}</p>
              <textarea
                v-if="item.key === 'textarea'"
                class="block w-150 bg-[#EEEEEE] rounded-[7px]"
                name=""
                id=""
                rows="4"
              ></textarea>
              <input
                v-else-if="item.key === 'file'"
                class="block w-150 bg-[#EEEEEE] rounded-[7px] py-3 px-2"
                type="file"
              />
              <select v-else class="w-full bg-[#EEEEEE] p-2 rounded-[7px]" name="" id="">
                <option value="">Completed</option>
                <option value="">On going</option>
                <option value="">Not Started</option>
              </select>
            </div>
            <div class="justify">
              <button
                class="shadow-[0_0_15px_rgba(0,0,0,0.2)] py-2 px-10 rounded-[8px] mr-5 bg-[#EEEEEE]"
              >
                Back
              </button>
              <button
                class="shadow-[0_0_15px_rgba(0,0,0,0.2)] py-2 px-15 rounded-[8px] bg-[#47B65C]"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.justify {
  justify-self: end;
  align-items: flex-end;
}
</style>