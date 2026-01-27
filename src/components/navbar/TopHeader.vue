<script setup>
import logo from '../../assets/super-finance.png'
import profile1 from '../../assets/profile1.jpg'
</script>
<template>
  <div class="flex justify-between items-center px-7 bg-[#ffffff] py-2 border-b-5 border-[#3CA57A]">
    <div><img class="w-50" :src="logo" alt="" /></div>
    <h3 class="text-[#227CBF] text-[2rem]">Personalized Development Plan</h3>
    <div class="flex items-center">
      <i class="pi pi-bell text-[1.5rem] mr-10"></i>
      <div class="flex items-center mr-7">
        <img class="w-10 rounded-[50px] mr-2" :src="profile1" alt="" />
        <p>John Snow</p>
      </div>
      <div class="flex items-center">
        <i class="pi pi-sign-out mr-2"></i>
        <p>Logout</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
h3 {
  font-family: var(--roboto-mono);
  font-weight: 700;
}
p {
  font-family: var(--roboto-mono);
}
</style>