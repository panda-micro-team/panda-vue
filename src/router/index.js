import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import AboutPage from '../views/About.vue';
import ContactsPage from '../views/Contacts.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/about', name: 'AboutPage', component: AboutPage },
  { path: '/contacts', name: 'ContactsPage', component: ContactsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
