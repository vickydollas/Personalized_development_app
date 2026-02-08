<script setup>
import { ref, onMounted } from 'vue'
// modeal functionality
const closeModal = () => {
  isModalActive.value = false
}
const keyClose = (event) => {
  if (isModalActive && event.key === 'Escape') {
    closeModal()
  }
}
onMounted(() => {
  document.addEventListener('keydown', keyClose)
})
const props = defineProps({
  isModalActive: {
    type: Boolean,
    default: false,
  },
})
// items for the modal form
const inputItems = ref({
  first: [
    { id: 1, name: 'Development Plan Type', key: 'select' },
    { id: 2, name: 'Goals', key: 'textarea' },
    { id: 3, name: 'Resources and Support Needed?', key: 'textarea' },
    { id: 4, name: 'Potential Challenges', key: 'textarea' },
    { id: 5, name: 'Target Date for Completion', key: 'date' },
  ],
  second: [
    { id: 1, name: 'What i will do to achieve this', key: 'textarea' },
    { id: 2, name: 'What does success look like?', key: 'textarea' },
    { id: 3, name: 'Solution', key: 'textarea' },
  ],
})
defineEmits(['close'])
</script>
<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        @click="keyClose"
        v-if="props.isModalActive"
        class="w-full min-h-[100vh] backdrop-blur-[1px] absolute shadow-[0_0_15px_rgba(0,0,0,0.2)] left-0 top-0 rounded-[8px]"
      >
        <div class="bg-[#EEEEEE] p-1 my-10 relative rounded-[8px] w-[60%] mx-auto">
          <div class="mx-10 my-5 flex items-center justify-between">
            <h2 class="text-[1.5rem] font-[700]">Development Plan Request Form</h2>
            <i @click="$emit('close')" class="pi pi-times cursor-pointer"></i>
          </div>
          <div
            class="grid grid-cols-2 gap-5 shadow-[0_0_15px_rgba(0,0,0,0.2)] pb-10 m-10 rounded-[7px]"
            action=""
          >
            <div class="justify-items-center">
              <div class="block my-3" for="" v-for="item in inputItems.first" :key="item">
                <p class="my-4 py-2 border-b-2 border-[#EEEEEE] font-[600]">
                  {{ item.name }}
                </p>
                <textarea
                  v-if="item.key === 'textarea'"
                  class="block w-90 shadow-[0_0_15px_rgba(0,0,0,0.2)] bg-[#EEEEEE] rounded-[7px]"
                  name=""
                  id=""
                  rows="4"
                ></textarea>
                <input
                  class="block w-90 bg-[#EEEEEE] shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-[7px] py-5 px-2"
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
            <div class="justify-items-center">
              <div class="block my-3" for="" v-for="item in inputItems.second" :key="item">
                <p class="my-4 py-2 border-b-2 border-[#EEEEEE]">{{ item.name }}</p>
                <textarea
                  v-if="item.key === 'textarea'"
                  class="block w-90 shadow-[0_0_15px_rgba(0,0,0,0.2)] bg-[#EEEEEE] rounded-[7px]"
                  name=""
                  id=""
                  rows="4"
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
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>