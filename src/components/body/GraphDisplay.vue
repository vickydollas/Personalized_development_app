<script setup>
import { computed, ref, watch } from 'vue'
// chart data
const widthNo = ref()
const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
  showLast: {
    type: Boolean,
    default: false,
  },
  graphData: {
    type: Object,
  },
  validation: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['exportSeries'])
const validation = props.validation
computed(() => {
  return (props.validation = validation.value)
})
const series = ref('short')
const selectedSeries = (item) => {
  series.value = item
  emit('exportSeries', series.value)
}
const getSeries = [
  {
    series: props.graphData.overAll.careerGoal,
    labels: ['Completed', 'On going', 'Not Started'],
    text: 'Career goals and inspiration',
  },
  {
    series: props.graphData.overAll.areaOfInterest,
    labels: ['Completed', 'On going', 'Not Started'],
    text: 'Area Of Interest',
  },
  {
    series: props.graphData.overAll.mentorship,
    labels: ['Completed', 'On going', 'Not Started'],
    text: 'Mentorship and Skill building',
  },
]
const updateDynamic = computed(() => {
  return props.graphData.filteredSeries
})
const dynamicSeries = {
  series: updateDynamic,
  labels: ['Completed', 'On going', 'Not Started'],
  text: 'Mentorship and Skill building',
}
const getOptions = (item) => {
  // console.log(item.labels )
  return {
    chart: {
      type: 'donut',
    },
    labels: item.labels,
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        customScale: 1.1,
        donut: {
          size: '35%',
          labels: {
            show: true, // Optional: shows the total in the now-smaller hole
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        // This shows the name + the percentage on the slice
        return opts.w.globals.labels[opts.seriesIndex] + ': ' + Math.round(val) + '%'
      },
    },
    title: {
      text: item.text,
      align: 'center',
      margin: 10,
      offsetY: 0, // Adjust this if you need it lower or higher
      verticalAlign: 'bottom',
      style: {
        fontSize: '18px',
        color: '#333',
      },
    },
  }
}
const filteredSeries = computed(() => {
  const filter = getSeries
  if (props.showLast) {
    return filter.slice(-1)
  }
  return filter
})
const filteredDynamic = computed(() => {
  const dynamic = dynamicSeries
  if (props.showLast) return dynamic.slice(-1)
  return dynamic
})
</script>
<template>
  <div>
    <div v-if="!props.showLast" class="flex items-center bg-[#EEEEEE] p-3 rounded-[50px] mt-5">
      <p
        :class="[
          'px-2 rounded-[20px] cursor-pointer',
          series === 'short' ? 'bg-[#227CBF] text-white' : 'bg-inherit',
        ]"
        @click="selectedSeries('short')"
        class="mr-10"
      >
        Short term goal (3-6 months)
      </p>
      <p
        :class="[
          'px-2 rounded-[20px] cursor-pointer',
          series === 'mid' ? 'bg-[#227CBF] text-white' : 'bg-inherit',
        ]"
        @click="selectedSeries('mid')"
        class="mr-10"
      >
        Mid term goal (7-12 months)
      </p>
      <p
        :class="[
          'px-2 rounded-[20px] cursor-pointer',
          series === 'long' ? 'bg-[#227CBF] text-white' : 'bg-inherit',
        ]"
        @click="selectedSeries('long')"
        class="mr-10"
      >
        Long term goal (13-24 months)
      </p>
    </div>
    <div
      v-if="!validation"
      :class="[
        props.showLast ? 'justify-center' : 'justify-between',
        'flex items-center shadow-[0_0_15px_rgba(0,0,0,0.2)] py-8 my-10 rounded-[6px]',
      ]"
    >
      <div v-for="(item, index) in filteredSeries" :key="index">
        <apexchart
          width="420"
          type="donut"
          :options="getOptions(item)"
          :series="item.series"
        ></apexchart>
      </div>
    </div>
    <div
      v-if="validation"
      :class="[
        props.showLast ? 'justify-center' : 'justify-center',
        'flex items-center shadow-[0_0_15px_rgba(0,0,0,0.2)] py-8 my-10 rounded-[6px]',
      ]"
    >
      <div>
        {{ dynamicSeries.series }}
        <apexchart
          width="420"
          type="donut"
          :options="getOptions(dynamicSeries)"
          :series="updateDynamic"
        ></apexchart>
      </div>
    </div>
  </div>
</template>