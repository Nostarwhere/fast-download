import { createApp } from 'vue'
// import App from './App.vue'
import './index.css'
import route from "./router/route.js"
import MainLayout from "./components/templates/MainLayout.vue"


createApp(MainLayout).use(route).mount('#app')
