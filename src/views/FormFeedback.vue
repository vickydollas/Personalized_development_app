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
    { id: 1, name: 'Goal', key: 'textarea' },
    { id: 2, name: 'Resources and Support Needed', key: 'textarea' },
    { id: 3, name: 'Potential Chanllenges', key: 'textarea' },
    { id: 4, name: 'Target Date for completion', key: 'date' },
    { id: 5, name: 'Progress Metric (Outcome Based)', key: 'textarea' },
    { id: 6, name: 'Feedback', key: 'textarea' },
  ],
})
</script>
<template>
  <div>
    <TopHeader />
    <div>
      <h1>Learn to improve content writing skill</h1>
      <div class="flex px-3" action="">
        <div class="" v-for="item in inputItems.first" :key="item.id">
          <p>{{ item.name }}</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div v-for="item in inputItems.second" :key="item.id">
          <p>{{ item.name }}</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>