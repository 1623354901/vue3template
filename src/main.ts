import { createApp } from 'vue'
// import './style.css'
import './styles/index.scss'
import {createPinia} from "pinia";
import App from './App.vue'
import 'virtual:svg-icons-register'
import router from '@/router/index'
import {setupDirective } from '@/directive';
// pureadmin封装好的table组件，可以直接使用，不需要再次封装
import Table from "@pureadmin/table";

setupDirective (App)

createApp(App).use(createPinia()).use(router).use(Table).mount('#app')
