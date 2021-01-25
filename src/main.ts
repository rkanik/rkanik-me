import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import components from './components'

// pwa
import '@/registerServiceWorker'

// styles
import '@/assets/css/variables.css'
import '@/assets/css/tailwind.css'
import '@/assets/scss/main.scss'

// prod tip
Vue.config.productionTip = false

// global components
components.register(Vue)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
