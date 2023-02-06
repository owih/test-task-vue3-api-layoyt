import { createApp } from 'vue';
import './assets/styles/main.scss';
import App from './App.vue';
import router from './router/index.js';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faDollar, faMessage } from '@fortawesome/free-solid-svg-icons';

const pinia = createPinia();
const app = createApp(App);



/* add icons to the library */
library.add(faUser);
library.add(faDollar);
library.add(faMessage);

app
    .use(router)
    .use(pinia)
    .component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
