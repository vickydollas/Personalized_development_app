<script setup>
import NavMenu from '@/components/navbar/NavMenu.vue'
import TopHeader from '../components/navbar/TopHeader.vue'
import { computed, ref } from 'vue'
import BodyOption from '@/components/navbar/BodyOption.vue'
// text area display functionality
const textDisplay = ref(null)
const toggleText = (id) => {
  textDisplay.value = textDisplay.value ? null : id
}
// table items
const tableItems = ref([
  {
    id: 1,
    task: 'Complete my training',
    status: 'Completed',
    timeline: '2025-01-15',
    update: 'In progress',
    evidence: 'Attach a file',
    action: '',
  },
  {
    id: 2,
    task: 'Submit my weekly task',
    status: 'On going',
    timeline: '2025-02-10',
    update: 'In progress',
    evidence: 'Attach a file',
    action: '',
  },
  {
    id: 3,
    task: 'Review monthly goals',
    status: 'Not started',
    timeline: '2025-03-05',
    update: 'In progress',
    evidence: 'Attach a file',
    action: '',
  },
  {
    id: 4,
    task: 'Update portfolio projects',
    status: 'On going',
    timeline: '2025-04-20',
    update: 'In progress',
    evidence: 'Attach a file',
    action: '',
  },
  {
    id: 5,
    task: 'Attend team sync meeting',
    status: 'Completed',
    timeline: '2025-05-12',
    update: 'In progress',
    evidence: 'Attach a file',
    action: '',
  },
  {
    id: 6,
    task: 'Draft quarterly report',
    status: 'Not started',
    timeline: '2025-06-30',
    update: 'In progress',
    evidence: 'Attach a file',
    action: '',
  },
  {
    id: 7,
    task: 'Client feedback session',
    status: 'On going',
    timeline: '2025-07-14',
    update: 'In progress',
    evidence: 'Attach a file',
    action: '',
  },
  {
    id: 8,
    task: 'Back-end server migration',
    status: 'Not started',
    timeline: '2025-08-22',
    update: 'In progress',
    evidence: 'Attach a file',
    action: '',
  },
  {
    id: 9,
    task: 'SEO audit for landing page',
    status: 'Completed',
    timeline: '2025-09-05',
    update: 'In progress',
    evidence: 'Attach a file',
    action: '',
  },
  {
    id: 10,
    task: 'Optimize image assets',
    status: 'On going',
    timeline: '2025-10-18',
    update: 'In progress',
    evidence: 'Attach a file',
    action: '',
  },
  {
    id: 11,
    task: 'Bug fixing sprint',
    status: 'Not started',
    timeline: '2025-11-10',
    update: 'In progress',
    evidence: 'Attach a file',
    action: '',
  },
  {
    id: 12,
    task: 'Final year-end review',
    status: 'Not started',
    timeline: '2025-12-20',
    update: 'In progress',
    evidence: 'Attach a file',
    action: '',
  },
])
const removeItem = (index) => {
  console.log(tableItems.value)
  tableItems.value.splice(index, 1)
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
  <div class="bg-[#EEEEEE]">
    <TopHeader />
    <NavMenu />
    <div>
      <BodyOption />
      <div class="py-5 px-4 bg-[#ffffff] mx-20">
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
          v-for="(task, index) in tableItems"
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
          <p class="txt6 text-[0.9rem] py-3 text-[#808080]">{{ task.evidence }}</p>
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