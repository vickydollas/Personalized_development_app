<script setup>
import { computed, ref } from 'vue'
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
})

const getSeries = ref([
  {
    series: [45, 30, 25],
    labels: ['Completed', 'On going', 'Not Started'],
    text: 'Career goals and inspiration',
  },
  {
    series: [25, 45, 30],
    labels: ['Completed', 'On going', 'Not Started'],
    text: 'Area Of Interest',
  },
  {
    series: [35, 30, 35],
    labels: ['Completed', 'On going', 'Not Started'],
    text: 'Mentorship and Skill building',
  },
])

const getOptions = (item) => {
  return {
    chart: {
      type: 'donut',
    },
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
  if (props.showLast) {
    return getSeries.value.slice(-1)
  }
  return getSeries.value
})
</script>
<template>
  <div
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
</template>