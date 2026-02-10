<script setup>
import { computed, ref } from 'vue'
import GraphDisplay from '../body/GraphDisplay.vue'

const props = defineProps({
  show: Boolean,
})
const menuItems = ref([
  {
    id: 1,
    employee: 'Olukayode Benson',
    department: 'Marketing',
    month: 'January 2025',
    topic: 'Ad Strategy',
    outcome: 'Certified Campaign Planner',
    method: 'Physical',
    skillsMapping: 'Proficiency',
    status: 'Completed',
    dueDate: '2025-01-15',
    evidence: 'Attached',
    rating: 5,
  },
  {
    id: 2,
    employee: 'Mariam Thompson',
    department: 'Finance',
    month: 'February 2025',
    topic: 'Tax Auditing',
    outcome: 'Senior Auditor Specialist',
    method: 'Online',
    skillsMapping: 'Proficiency',
    status: 'On going',
    dueDate: '2025-02-20',
    evidence: 'Attached',
    rating: 3,
  },
  {
    id: 3,
    employee: 'Chidi Richardson',
    department: 'IT Support',
    month: 'January 2025',
    topic: 'Cloud Ops',
    outcome: 'Azure Infrastructure Lead',
    method: 'Online',
    skillsMapping: 'Proficiency',
    status: 'Not started',
    dueDate: '2025-01-28',
    evidence: 'Attached',
    rating: 2,
  },
  {
    id: 4,
    employee: 'Fatima Al-Sayed',
    department: 'Design',
    month: 'February 2025',
    topic: 'UI Patterns',
    outcome: 'Advanced Product Designer',
    method: 'Physical',
    skillsMapping: 'Proficiency',
    status: 'Completed',
    dueDate: '2025-02-12',
    evidence: 'Attached',
    rating: 4,
  },
  {
    id: 5,
    employee: 'Anthony McGeorge',
    department: 'Sales',
    month: 'January 2025',
    topic: 'CRM Mastery',
    outcome: 'Lead Pipeline Manager',
    method: 'Physical',
    skillsMapping: 'Proficiency',
    status: 'On going',
    dueDate: '2025-01-30',
    evidence: 'Attached',
    rating: 5,
  },
  {
    id: 6,
    employee: "Grace O'Connell",
    department: 'HR Dept',
    month: 'February 2025',
    topic: 'Hiring Flow',
    outcome: 'Strategic Talent Recruiter',
    method: 'Online',
    skillsMapping: 'Proficiency',
    status: 'Completed',
    dueDate: '2025-02-25',
    evidence: 'Attached',
    rating: 4,
  },
  {
    id: 7,
    employee: 'Samuel Hendrick',
    department: 'Legal',
    month: 'January 2025',
    topic: 'IP Law 101',
    outcome: 'Intellectual Property Expert',
    method: 'Online',
    skillsMapping: 'Proficiency',
    status: 'Not started',
    dueDate: '2025-01-10',
    evidence: 'Attached',
    rating: 1,
  },
  {
    id: 8,
    employee: 'Isabella Knight',
    department: 'Security',
    month: 'February 2025',
    topic: 'Cyber Shield',
    outcome: 'Security Systems Analyst',
    method: 'Physical',
    skillsMapping: 'Proficiency',
    status: 'On going',
    dueDate: '2025-02-28',
    evidence: 'Attached',
    rating: 3,
  },
  {
    id: 9,
    employee: 'Bernardo Silva',
    department: 'Logistics',
    month: 'January 2025',
    topic: 'Fleet Mgmt',
    outcome: 'Supply Chain Coordinator',
    method: 'Online',
    skillsMapping: 'Proficiency',
    status: 'Completed',
    dueDate: '2025-01-22',
    evidence: 'Attached',
    rating: 5,
  },
  {
    id: 10,
    employee: 'Amina Abdullah',
    department: 'Writing',
    month: 'February 2025',
    topic: 'SEO Copy',
    outcome: 'Certified Content Strategist',
    method: 'Physical',
    skillsMapping: 'Proficiency',
    status: 'Not started',
    dueDate: '2025-02-05',
    evidence: 'Attached',
    rating: 2,
  },
  {
    id: 11,
    employee: 'Christopher Ray',
    department: 'Admin',
    month: 'January 2025',
    topic: 'Data Entry',
    outcome: 'Efficient Operations Clerk',
    method: 'Physical',
    skillsMapping: 'Proficiency',
    status: 'On going',
    dueDate: '2025-01-18',
    evidence: 'Attached',
    rating: 4,
  },
  {
    id: 12,
    employee: 'Victoria Prince',
    department: 'Customer',
    month: 'February 2025',
    topic: 'Conflict Res',
    outcome: 'Lead Support Specialist',
    method: 'Online',
    skillsMapping: 'Proficiency',
    status: 'Completed',
    dueDate: '2025-02-14',
    evidence: 'Attached',
    rating: 5,
  },
  {
    id: 13,
    employee: 'Jonathan Webber',
    department: 'R & D',
    month: 'January 2025',
    topic: 'Lab Safety',
    outcome: 'Qualified Safety Officer',
    method: 'Online',
    skillsMapping: 'Proficiency',
    status: 'Not started',
    dueDate: '2025-01-31',
    evidence: 'Attached',
    rating: 3,
  },
  {
    id: 14,
    employee: 'Elizabeth Moore',
    department: 'Editorial',
    month: 'February 2025',
    topic: 'Style Guide',
    outcome: 'Professional Senior Editor',
    method: 'Physical',
    skillsMapping: 'Proficiency',
    status: 'On going',
    dueDate: '2025-02-10',
    evidence: 'Attached',
    rating: 4,
  },
  {
    id: 15,
    employee: 'Benjamin Franklin',
    department: 'Billing',
    month: 'January 2025',
    topic: 'Invoicing',
    outcome: 'Accounts Payable Manager',
    method: 'Online',
    skillsMapping: 'Proficiency',
    status: 'Completed',
    dueDate: '2025-01-05',
    evidence: 'Attached',
    rating: 1,
  },
])

const selectiveItems = computed(() => {
  return props.show ? menuItems.value.slice(0, 5) : menuItems.value.slice(0, 10)
})
const setRating = (task, newRating) => {
  task.rating = newRating
}
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
        <i class="pi pi-search absolute right-26 top-70 text-[1.2rem]"></i>
        <input
          type="text"
          placeholder="Search"
          class="relative pl-2 h-11 w-70 shadow-[0_0_15px_rgba(0,0,0,0.2] border-3 border-[#EEEEEE] rounded-[7px]"
        />
      </div>
    </div>
    <div class="my-4 border-2 border-[#EAEAEA]">
      <div class="flex items-center border-b-2 border-[#EAEAEA] py-3">
        <p :class="[props.show ? 'flex-[0_0_10%]' : 'flex-[0_0_5%]']" class="text-[0.8rem]">
          {{ props.show ? 'Name' : 'S/N' }}
        </p>
        <p v-if="props.show" class="flex-[0_0_7%] text-[0.8rem]">Department</p>
        <p :class="[props.show ? 'flex-[0_0_7%]' : 'flex-[0_0_25%]']" class="text-[0.8rem]">
          Months
        </p>
        <p :class="[props.show ? 'flex-[0_0_8%]' : 'flex-[0_0_20%]']" class="text-[0.8rem]">
          Training Topic
        </p>
        <p v-if="props.show" class="flex-[0_0_15%] text-[0.8rem]">Learning Outcome</p>
        <p :class="[props.show ? 'flex-[0_0_10%]' : 'flex-[0_0_15%]']" class="text-[0.8rem]">
          Training Method
        </p>
        <p v-if="props.show" class="flex-[0_0_10%] text-[0.8rem]">Skills Matrix Mapping</p>
        <p :class="[props.show ? 'flex-[0_0_8%]' : 'flex-[0_0_20%]']" class="text-[0.8rem]">
          Status
        </p>
        <p v-if="props.show" class="flex-[0_0_10%] text-[0.8rem]">Due Date</p>
        <p v-if="props.show" class="flex-[0_0_5%] text-[0.8rem]">Evidence</p>
        <p :class="[props.show ? 'flex-[0_0_10%]' : 'flex-[0_0_15%]']" class="text-[0.8rem]">
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
            @click="setRating(item, star)"
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
</style>