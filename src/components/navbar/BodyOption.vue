<script setup>
import { ref, watch } from 'vue'

const input = ref({
  quarter: '',
  year: '',
  level: '',
  department: '',
})
const emit = defineEmits(['quarterExpo'])
watch(input.value, (newQuarter) => {
  emit('quarterExpo', newQuarter)
  // console.log(newQuarter)
})
</script>
<template>
  <div class="bg-[#EEEEEE] flex items-center px-20 py-5">
    <select v-model="input.level" name="" id="">
      <option value="">Level</option>
      <option value="manager">Manager</option>
      <option value="hod">HOD</option>
      <option value="it">IT</option>
      <option value="user">User</option>
      <option value="knowledge manager">User Knowledge</option>
    </select>
    <select v-model="input.department" name="" id="">
      <option value="">Department</option>
      <option value="it">IT</option>
      <option value="finance">Finance</option>
      <option value="accounting">Accounting</option>
      <option value="operation">Operation</option>
      <option value="customer service">Customer Service</option>
    </select>
    <select name="" v-model.number="input.quarter" id="">
      <option value="">Quarterly</option>
      <option value="1">Q1</option>
      <option value="2">Q2</option>
      <option value="3">Q3</option>
      <option value="4">Q4</option>
    </select>
    <select v-model.number="input.year" name="" id="">
      <option value="">Year</option>
      <option value="2026">2026</option>
      <option value="2025">2025</option>
      <option value="2024">2024</option>
      <option value="2023">2023</option>
    </select>
  </div>
</template>
<style scoped>
select {
  border: 1px solid #808080;
  margin-right: 12px;
  border-radius: 5px;
  padding: 6px;
  font-family: 'roboto', sans-serif;
  font-size: 1rem;
}
.development {
  border: none;
}
</style>