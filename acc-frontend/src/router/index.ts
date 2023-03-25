import { createRouter, createWebHistory } from 'vue-router'
import Vehicle from '../views/Vehicle.vue'

// createWebHistory(import.meta.env.BASE_URL),
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/vehicle',
            name:  'vehicle',
            component: Vehicle
        }
    ]
})

export default router