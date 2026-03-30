<script setup>
import { computed, ref, watch } from 'vue'
import { useTrainingCard } from '../../stores/trainingCard'
import GraphDisplay from '../body/GraphDisplay.vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  listing: {
    type: Number,
    default: 5,
  },
  quarter: {
    type: Object,
    default: null,
  },
})
const searchQuery = ref('')
const store = useTrainingCard()
const menu = store.menuItems
// filter query series
console.log(props.quarter)
const filterData = computed(() => {
  return store.applyFilter(store.menuItems, props.quarter, searchQuery.value)
})
const emit = defineEmits(['filterData'])
watch(filterData, (newVal) => {
  emit('filterData', newVal)
}, { immediate: true, deep: true })
const saveEdit = (index) => {
  menu[index] = { ...store.editBuffer }

  store.editingId = null
  store.editBuffer = {}
}
</script>
<template>
  <!-- <GraphDisplay /> -->
  <div class="">
    <div v-if="props.show" class="flex items-center justify-between mt-2">
      <div>
        <i class="pi pi-search relative left-65 top-1 text-[1.2rem]"></i>
        <input
          type="text"
          placeholder="Search"
          v-model="searchQuery"
          class="relative pl-2 h-11 w-70 shadow-[0_0_15px_rgba(0,0,0,0.2] border-3 border-[#EEEEEE] rounded-[7px]"
        />
      </div>
    </div>
    <div class="my-4 border-2 border-[#EAEAEA]">
      <div class="flex items-center border-b-2 border-[#EAEAEA] py-3">
        <p :class="[props.show ? 'flex-[0_0_10%]' : 'flex-[0_0_5%]']" class="text-[0.7rem]">
          {{ props.show ? 'Name' : 'S/N' }}
        </p>
        <p v-if="props.show" class="flex-[0_0_7%] text-[0.7rem]">Dept</p>
        <p :class="[props.show ? 'flex-[0_0_9%]' : 'flex-[0_0_25%]']" class="text-[0.7rem]">
          Months
        </p>
        <p :class="[props.show ? 'flex-[0_0_7%]' : 'flex-[0_0_20%]']" class="text-[0.7rem]">
          Topic
        </p>
        <p v-if="props.show" class="flex-[0_0_15%] text-[0.7rem]">Learning Outcome</p>
        <p :class="[props.show ? 'flex-[0_0_9%]' : 'flex-[0_0_15%]']" class="text-[0.7rem]">
          T - Method
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
        v-for="(item, index) in filterData"
        :key="item.id"
        @click="store.handleSubmit(item, index)"
        @dblclick="store.startEditing(item)"
        class="flex hover:bg-[#EEEEEE] cursor-pointer items-center"
        :class="[store.selectedId === item.id ? 'bg-[#eeeeee]' : 'bg-inherit']"
      >
        <div
          :class="[props.show ? 'flex-[0_0_10%]' : 'flex-[0_0_5%]']"
          class="text-[#808080] text-[0.6rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          <input
            v-if="store.editingId === item.id"
            type="text"
            class="w-17"
            v-model="store.editBuffer.employee"
            @keyup.esc="store.cancelEdit"
            @keyup.enter="saveEdit(index)"
          />
          <p v-else>{{ props.show ? item.employee : index }}</p>
        </div>
        <p
          v-if="props.show"
          class="text-[#808080] flex-[0_0_7%] text-[0.6rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.department }}
        </p>
        <p
          :class="[props.show ? 'flex-[0_0_9%]' : 'flex-[0_0_25%]']"
          class="text-[#808080] text-[0.6rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.month }}
        </p>
        <p
          :class="[props.show ? 'flex-[0_0_7%]' : 'flex-[0_0_20%]']"
          class="text-[#808080] text-[0.6rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.topic }}
        </p>
        <p
          v-if="props.show"
          class="text-[#808080] flex-[0_0_15%] text-[0.6rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.outcome }}
        </p>
        <p
          :class="[props.show ? 'flex-[0_0_9%]' : 'flex-[0_0_15%]']"
          class="text-[#808080] text-[0.6rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.method }}
        </p>
        <p
          v-if="props.show"
          class="text-[#808080] flex-[0_0_10%] text-[0.6rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.skillsMapping }}
        </p>
        <p
          :class="[props.show ? 'flex-[0_0_8%]' : 'flex-[0_0_20%]']"
          class="text-[#808080] text-[0.6rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.status }}
        </p>
        <p
          v-if="props.show"
          class="text-[#808080] flex-[0_0_10%] text-[0.6rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.dueDate }}
        </p>
        <p
          v-if="props.show"
          class="text-[#808080] flex-[0_0_5%] text-[0.6rem] py-4 border-b-2 border-[#EAEAEA]"
        >
          {{ item.evidence }}
        </p>
        <p
          :class="[props.show ? 'flex-[0_0_10%]' : 'flex-[0_0_15%]']"
          class="text-[#808080] border-b-2 border-[#EAEAEA] text-[0.6rem] py-4"
        >
          <i
            v-for="star in 5"
            :key="star"
            @click="store.setRating(item, star)"
            :class="['pi', star <= item.rating ? 'pi-star-fill text-[#FFB800]' : 'pi-star']"
          ></i>
        </p>
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