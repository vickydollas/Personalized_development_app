import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('counter', () => {
  const inputItems = ref({
    first: [
      { id: 1, name: 'Development Plan Type', key: 'select', field: 'objectives' },
      { id: 2, name: 'Goals', key: 'textarea', field: 'goal' },
      { id: 3, name: 'Resources and Support Needed?', key: 'textarea', field: 'resource' },
      { id: 4, name: 'Potential Challenges', key: 'textarea', field: 'challenges' },
      { id: 5, name: 'Target Date for Completion', key: 'date', field: 'completion_date' },
    ],
    second: [
      { id: 1, name: 'What i will do to achieve this', key: 'textarea', field: 'work_rate' },
      { id: 2, name: 'What does success look like?', key: 'textarea', field: 'feedback' },
      { id: 3, name: 'Solution', key: 'textarea' },
    ],
    assessment: [],
  })
  // modal function
  const toggleModal = () => {
    isModalActive.value = !isModalActive.value
  }
  const isModalActive = ref(false)
  const closeModal = () => {
    isModalActive.value = false
  }
  const keyClose = (event) => {
    if (isModalActive && event.key === 'Escape') {
      closeModal()
    }
  }
  onMounted(() => {
    document.addEventListener('keydown', keyClose)
  })
  //   function to display the textarea
  // text area display functionality
  const fieldDisplay = ref(null)
  const toggleButton = (id) => {
    fieldDisplay.value = fieldDisplay.value ? null : id
  }
  // table items
  const taskDeliverables = ref([
    {
      id: 1,
      task: 'Complete my training',
      status: 'Completed',
      timeline: '2025-01-15',
      update: 'In progress',
      evidence: 'Attach a file',
      action: '',
    },
    {
      id: 2,
      task: 'Submit my weekly task',
      status: 'On going',
      timeline: '2025-02-10',
      update: 'In progress',
      evidence: 'Attach a file',
      action: '',
    },
    {
      id: 3,
      task: 'Review monthly goals',
      status: 'Not started',
      timeline: '2025-03-05',
      update: 'In progress',
      evidence: 'Attach a file',
      action: '',
    },
    {
      id: 4,
      task: 'Update portfolio projects',
      status: 'On going',
      timeline: '2025-04-20',
      update: 'In progress',
      evidence: 'Attach a file',
      action: '',
    },
    {
      id: 5,
      task: 'Attend team sync meeting',
      status: 'Completed',
      timeline: '2025-05-12',
      update: 'In progress',
      evidence: 'Attach a file',
      action: '',
    },
    {
      id: 6,
      task: 'Draft quarterly report',
      status: 'Not started',
      timeline: '2025-06-30',
      update: 'In progress',
      evidence: 'Attach a file',
      action: '',
    },
    {
      id: 7,
      task: 'Client feedback session',
      status: 'On going',
      timeline: '2025-07-14',
      update: 'In progress',
      evidence: 'Attach a file',
      action: '',
    },
    {
      id: 8,
      task: 'Back-end server migration',
      status: 'Not started',
      timeline: '2025-08-22',
      update: 'In progress',
      evidence: 'Attach a file',
      action: '',
    },
    {
      id: 9,
      task: 'SEO audit for landing page',
      status: 'Completed',
      timeline: '2025-09-05',
      update: 'In progress',
      evidence: 'Attach a file',
      action: '',
    },
    {
      id: 10,
      task: 'Optimize image assets',
      status: 'On going',
      timeline: '2025-10-18',
      update: 'In progress',
      evidence: 'Attach a file',
      action: '',
    },
    {
      id: 11,
      task: 'Bug fixing sprint',
      status: 'Not started',
      timeline: '2025-11-10',
      update: 'In progress',
      evidence: 'Attach a file',
      action: '',
    },
    {
      id: 12,
      task: 'Final year-end review',
      status: 'Not started',
      timeline: '2025-12-20',
      update: 'In progress',
      evidence: 'Attach a file',
      action: '',
    },
  ])
  return {
    inputItems,
    isModalActive,
    toggleModal,
    closeModal,
    keyClose,
    fieldDisplay,
    toggleButton,
    taskDeliverables,
  }
})
