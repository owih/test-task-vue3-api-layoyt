import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import LayoutView from '../views/LayoutView.vue';
import HomeView from '../views/HomeView.vue';
import TableView from '../views/TableView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/table', component: TableView },
    { path: '/layout', component: LayoutView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    strict: true,
});

export default router;