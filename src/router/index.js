import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import SkillAssessment from '../views/SkillAssessment.vue'
import TaskDeliverables from '../views/TaskDeliverables.vue'
import AllTraining from '../views/AllTraining.vue'
import TrainingView from '../views/TrainingView.vue'
import FormFeedback from '../views/FormFeedback.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/:feedback',
      name: 'feedback',
      component: FormFeedback
    },
    {
      path: '/assessment',
      name: 'assessment',
      component: SkillAssessment
    },
    {
      path: '/deliverables',
      name: 'deliverables',
      component: TaskDeliverables
    },
    {
      path: '/all-schedule',
      name: 'all-schedule',
      component: AllTraining
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: TrainingView
    }
  ],
})

export default router
