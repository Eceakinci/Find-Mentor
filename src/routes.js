import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/MainPage.vue";
import Mentor from "@/pages/MentorPage.vue";
import Mentors from "@/pages/MentorsPage.vue";
import Register from "@/pages/RegisterPage.vue";

const router = createRouter({
    routes: [
        { path: '/', component: Main },
        { path: '/mentors', component: Mentors },
        { path: '/mentors/:id', component: Mentor, props: true },
        { path: '/register', component: Register },
    ],
    history: createWebHistory()
})

export default router