<script setup>
import NavMenu from '@/components/navbar/NavMenu.vue'
import TopHeader from '../components/navbar/TopHeader.vue'
</script>
<template>
  <div class="bg-[#EEEEEE]">
    <TopHeader />
    <NavMenu />
    <div>
      <div class="flex items-center px-20 py-5">
        <select name="" id="">
          <option value="">Level</option>
          <option value="">Manager</option>
          <option value="">HOD</option>
          <option value="">IT</option>
        </select>
        <select name="" id="">
          <option value="">Department</option>
          <option value="">IT</option>
          <option value="">Finance</option>
          <option value="">Accounting</option>
        </select>
        <select name="" id="">
          <option value="">Quarterly</option>
          <option value="">Q1</option>
          <option value="">Q2</option>
          <option value="">Q3</option>
        </select>
        <select name="" id="">
          <option value="">Year</option>
          <option value="">2026</option>
          <option value="">2025</option>
          <option value="">2024</option>
        </select>
      </div>
      <div class="py-5 px-4 bg-[#ffffff] mx-20">
        <div class="flex items-center justify-between py-5 border-b-2 border-[#808080]">
          <h2 class="text-[1.5rem] font-[600]">Development Plan</h2>
          <button class="bg-[#47B65C] text-white cursor-pointer px-10 py-2 rounded-[5px]">
            Development Plan Request
          </button>
        </div>
        <div class="flex items-center bg-[#EEEEEE] p-3 rounded-[50px] mt-5">
          <p class="mr-10">Short term goal (3-6 months)</p>
          <p class="mr-10">Mid term goal (7-12 months)</p>
          <p class="mr-10">Short term goal (13-24 months)</p>
        </div>
        <div class="mt-5">
          <div class="">
            <label for="" class="border-1 border-[#EEEEEE] p-3 rounded-[5px]"
              >Development Plan:
              <select class="development" name="" id="">
                <option value="">Career Goals and Aspiration</option>
                <option value="">Area Of Interest</option>
                <option value="">Mentorship and Skill building</option>
              </select>
            </label>
            <div class="flex items-center my-4">
              <p>S/N</p>
              <p>Goals</p>
              <p>Date of Completion</p>
              <p>Status</p>
              <p>Feedback</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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