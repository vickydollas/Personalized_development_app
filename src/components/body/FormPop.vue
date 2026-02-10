<script setup>
import { useStore } from '../../stores/formPop'

const store = useStore()
const props = defineProps({
  isModalActive: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Development Plan Request Form',
  },
  layOut: {
    type: Boolean,
    default: false,
  },
})

// defineEmits(['close'])
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
        v-if="store.isModalActive"
        class="w-full min-h-[100vh] backdrop-blur-[1px] absolute shadow-[0_0_15px_rgba(0,0,0,0.2)] left-0 top-0 rounded-[8px]"
      >
        <div
          :class="[
            'bg-[#EEEEEE] p-1 my-3 relative rounded-[8px] mx-auto',
            props.layOut ? 'w-[40%]' : 'w-[60%]',
          ]"
        >
          <div class="mx-10 my-1 flex items-center justify-between">
            <h2 class="text-[1.5rem] font-[700]">{{ props.title }}</h2>
            <i @click="store.toggleModal" class="pi pi-times cursor-pointer"></i>
          </div>
          <div
            :class="[
              'shadow-[0_0_15px_rgba(0,0,0,0.2)] pb-10 my-2 mx-10 rounded-[7px]',
              props.layOut ? 'flex flex-col items-center justify-center' : 'grid grid-cols-2 gap-5',
            ]"
            action=""
          >
            <!-- first form -->
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style scoped>
h1 {
}
</style>