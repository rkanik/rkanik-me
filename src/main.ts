import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import components from './components'
import VueMeta from 'vue-meta'
import bus from './bus'
//import ResizeMixin from '@/mixins/ResizeMixin.vue'

// pwa
import '@/registerServiceWorker'

// styles
import '@/assets/css/variables.css'
import '@/assets/css/tailwind.css'
import '@/assets/scss/main.scss'

// prod tip
Vue.config.productionTip = false

// bus
// @ts-ignore
window.bus = bus

// Plugins
Vue.use(VueMeta)

// global components
components.register(Vue)

new Vue({
	router,
	store,
	//mixins: [ResizeMixin],
	render: h => h(App)
}).$mount('#app')
