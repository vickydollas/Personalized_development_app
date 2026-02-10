<script setup>
import NavMenu from '@/components/navbar/NavMenu.vue'
import TopHeader from '../components/navbar/TopHeader.vue'
import { computed, ref } from 'vue'
import BodyOption from '@/components/navbar/BodyOption.vue'
import { useStore } from '../stores/formPop'

const store = useStore()
// text area display functionality
const textDisplay = ref(null)
const toggleText = (id) => {
  textDisplay.value = textDisplay.value ? null : id
}
const removeItem = (index) => {
  store.taskDeliverables.splice(index, 1)
}
const isStatus = (status) => {
  if (status === 'Not started') {
    return { backgroundColor: '#FEE2E2', color: '#940505' }
  } else if (status === 'On going') {
    return { backgroundColor: '#FEF9C3', color: '#713F12' }
  } else {
    return { backgroundColor: '#DCFCE7', color: '#1D782E' }
  }
}
</script>
<template>
  <div class="bg-[#EEEEEE] pb-7">
    <TopHeader />
    <NavMenu />
    <div>
      <BodyOption />
      <div class="rounded-[7px] py-5 px-4 bg-[#ffffff] mx-20">
        <div class="flex items-center border-b-2 border-[#EEEEEE] py-1">
          <p class="txt1 text-[0.9rem]">S/N</p>
          <p class="txt2 text-[0.9rem]">Task/Deliverables</p>
          <p class="txt3 text-[0.9rem]">Status</p>
          <p class="txt4 text-[0.9rem]">Timeline</p>
          <p class="txt5 text-[0.9rem]">Update</p>
          <p class="txt6 text-[0.9rem]">Evidence of Completion</p>
          <p class="txt7 text-[0.9rem]">Action</p>
        </div>
        <div
          v-for="(task, index) in store.taskDeliverables"
          :key="task.id"
          class="flex items-center py-2 border-b-2 border-[#EEEEEE]"
        >
          <p class="txt1 text-[0.9rem] py-3 text-[#808080]">{{ index }}</p>
          <p class="txt2 text-[0.9rem] py-3 text-[#808080]">{{ task.task }}</p>
          <p class="txt3 text-[0.9rem] py-3 text-[#808080]">
            <span
              class="py-1 px-5 rounded-[30px] text-[#808080]"
              :style="[isStatus(task.status)]"
              >{{ task.status }}</span
            >
          </p>
          <p class="txt4 text-[0.9rem] py-3 text-[#808080]">{{ task.timeline }}</p>
          <p class="txt5 text-[0.9rem] py-3 text-[#808080]">{{ task.update }}</p>
          <p class="txt6 text-[0.9rem] py-3 text-[#808080]">
            {{ task.evidence }} <input type="file" />
          </p>
          <p class="txt7 text-[0.9rem] py-3 text-[#808080]">
            <i @click.stop="removeItem(index)" class="pi pi-trash text-[#FF0000] text-[1.2rem]"></i>
          </p>
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
  flex: 0 0 5%;
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
.txt6 {
  flex: 0 0 20%;
}
.txt7 {
  flex: 0 0 10%;
}
textarea {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  /* border: none; */
}
textarea:hover {
  border: none;
}
</style>