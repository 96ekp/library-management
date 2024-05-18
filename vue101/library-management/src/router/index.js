import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import UserView from '../views/UserView.vue';
import ResidentView from '../views/ResidentView.vue';
import UnitView from '../views/UnitView.vue';
import HomeView from '../views/HomeView.vue';
import UserLogin from '../components/UserLogin.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/login', name: 'login', component: UserLogin },
    { path: '/login', name: 'LoginView', component: LoginView },
    { path: '/signup', component: SignupView },
    { path: '/users', component: UserView },
    { path: '/residents', component: ResidentView },
    { path: '/units', component: UnitView }
  ]
});

export default router;
