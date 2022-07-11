import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./style.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";


import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(fas,far);

let auth= getAuth();

let app;

onAuthStateChanged(auth,()=> {
    if(!app) {
        app=createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');
    }
})

