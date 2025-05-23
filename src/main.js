import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBank, faBuilding, faPencil, faPhone, faPlus, faFlag, faTrash, faUser, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

library.add(faPhone);
library.add(faTrash);
library.add(faPencil);
library.add(faTag);
library.add(faBuilding);
library.add(faBank);
library.add(faPlus);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');
