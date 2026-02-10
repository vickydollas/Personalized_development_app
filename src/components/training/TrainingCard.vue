<script setup>
import { computed } from 'vue'
import { useTrainingCard } from '../../stores/trainingCard'
import GraphDisplay from '../body/GraphDisplay.vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})
const store = useTrainingCard()
const menu = store.menuItems
const selectiveItems = computed(() => {
  return props.show ? menu.slice(0, 5) : menu.slice(0, 10)
})
// console.log(menu)
</script>
<template>
  <!-- <GraphDisplay /> -->
  <div class="">
    <div v-if="props.show" class="flex items-center justify-between mt-2">
      <label for="" class="border-2 border-[#EEEEEE] p-2 rounded-[5px]"
        >Filter by:
        <select class="ml-1" name="" id="">
          <option value="All">All</option>
          <option value="">Months</option>
          <option value="">Department</option>
        </select>
      </label>
      <div>
        <i class="pi pi-search relative left-65 top-1 text-[1.2rem]"></i>
        <input
          type="text"
          placeholder="Search"
          class="relative pl-2 h-11 w-70 shadow-[0_0_15px_rgba(0,0,0,0.2] border-3 border-[#EEEEEE] rounded-[7px]"
        />
      </div>
    </div>
    <div class="my-4 border-2 border-[#EAEAEA]">
      <div class="flex items-center border-b-2 border-[#EAEAEA] py-3">
        <p :class="[props.show ? 'flex-[0_0_10%]' : 'flex-[0_0_5%]']" class="text-[0.7rem]">
          {{ props.show ? 'Name' : 'S/N' }}
        </p>
        <p v-if="props.show" class="flex-[0_0_7%] text-[0.7rem]">Department</p>
        <p :class="[props.show ? 'flex-[0_0_7%]' : 'flex-[0_0_25%]']" class="text-[0.7rem]">
          Months
        </p>
        <p :class="[props.show ? 'flex-[0_0_8%]' : 'flex-[0_0_20%]']" class="text-[0.7rem]">
          Training Topic
        </p>
        <p v-if="props.show" class="flex-[0_0_15%] text-[0.7rem]">Learning Outcome</p>
        <p :class="[props.show ? 'flex-[0_0_10%]' : 'flex-[0_0_15%]']" class="text-[0.7rem]">
          Training Method
        </p>
        <p v-if="props.show" class="flex-[0_0_10%] text-[0.7rem]">Skills Matrix Mapping</p>
        <p :class="[props.show ? 'flex-[0_0_8%]' : 'flex-[0_0_20%]']" class="text-[0.7rem]">
          Status
        </p>
        <p v-if="props.show" class="flex-[0_0_10%] text-[0.7rem]">Due Date</p>
        <p v-if="props.show" class="flex-[0_0_5%] text-[0.7rem]">Evidence</p>
        <p :class="[props.show ? 'flex-[0_0_10%]' : 'flex-[0_0_15%]']" class="text-[0.7rem]">
          Rating
        </p>
      </div>
      <div
        v-for="(item, index) in selectiveItems"
        :key="item.id"
        class="flex hover:bg-[#EEEEEE] items-center"
      >
        <router-link
          to="/feedback"
          :class="[props.show ? 'flex-[0_0_10%]' : 'flex-[0_0_5%]']"
          class="text-[#808080] text-[0.8rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ props.show ? item.employee : index }}
        </router-link>
        <router-link
          to="/feedback"
          v-if="props.show"
          class="text-[#808080] flex-[0_0_7%] text-[0.8rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.department }}
        </router-link>
        <router-link
          to="/feedback"
          :class="[props.show ? 'flex-[0_0_7%]' : 'flex-[0_0_25%]']"
          class="text-[#808080] text-[0.8rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.month }}
        </router-link>
        <router-link
          to="/feedback"
          :class="[props.show ? 'flex-[0_0_8%]' : 'flex-[0_0_20%]']"
          class="text-[#808080] text-[0.8rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.topic }}
        </router-link>
        <router-link
          to="/feedback"
          v-if="props.show"
          class="text-[#808080] flex-[0_0_15%] text-[0.8rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.outcome }}
        </router-link>
        <router-link
          to="/feedback"
          :class="[props.show ? 'flex-[0_0_10%]' : 'flex-[0_0_15%]']"
          class="text-[#808080] text-[0.8rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.method }}
        </router-link>
        <router-link
          to="/feedback"
          v-if="props.show"
          class="text-[#808080] flex-[0_0_10%] text-[0.8rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.skillsMapping }}
        </router-link>
        <router-link
          to="/feedback"
          :class="[props.show ? 'flex-[0_0_8%]' : 'flex-[0_0_20%]']"
          class="text-[#808080] text-[0.8rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.status }}
        </router-link>
        <router-link
          to="/feedback"
          v-if="props.show"
          class="text-[#808080] flex-[0_0_10%] text-[0.8rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.dueDate }}
        </router-link>
        <router-link
          to="/feedback"
          v-if="props.show"
          class="text-[#808080] flex-[0_0_5%] text-[0.8rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.evidence }}
        </router-link>
        <router-link
          to="/feedback"
          :class="[props.show ? 'flex-[0_0_10%]' : 'flex-[0_0_15%]']"
          class="text-[#808080] border-b-2 border-[#EAEAEA] text-[0.8rem] py-4"
        >
          <i
            v-for="star in 5"
            :key="star"
            @click="store.setRating(item, star)"
            :class="['pi', star <= item.rating ? 'pi-star-fill text-[#FFB800]' : 'pi-star']"
          ></i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
option {
  border: none;
  font-size: 0.8rem;
}
select:hover {
  border: none;
}
a {
  font-size: 0.6rem !important;
}
</style>