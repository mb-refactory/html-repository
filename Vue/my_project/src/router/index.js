import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import ResultsView from '../views/ResultsView.vue'
import SuggestedView from '../views/SuggestedView.vue'
import SubscribedView from '../views/SubscribedView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/results/:searchTerm',
    name: 'ResultsView',
    component: ResultsView,
    props: true
  },
  {
    path: '/suggested',
    name: 'SuggestedView',
    component: SuggestedView
  },
  {
    path: '/subscribed',
    name: 'subscribedView',
    component: SubscribedView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
