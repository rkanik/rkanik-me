import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

// pwa
import '@/registerServiceWorker'

// styles
import '@/assets/css/variables.css'
import '@/assets/css/tailwind.css'
import '@/assets/scss/main.scss'

// prod tip
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
