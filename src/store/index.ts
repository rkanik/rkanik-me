import Vue from 'vue'
import Vuex from 'vuex'

// Plugins
import createLogger from 'vuex/dist/logger';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

// Modulee
import YT from './modules/youtube.store'

// Plugins
let plugins = []

const debug = process.env.NODE_ENV !== 'production';
if (debug) plugins.push(createLogger())

plugins.push(createPersistedState({
	key: 'RKANIK-ME',
	paths: [
		'YT.videos',
		'YT.channels',
	]
}))

export default new Vuex.Store({
	plugins,
	modules: { YT },
	state: {
		theme: {
			dark: true
		}
	},
})
