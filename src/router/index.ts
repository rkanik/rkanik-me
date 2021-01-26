import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'

import { view, app } from '../helpers'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/apps',
		name: 'Apps',
		component: view('apps/Apps'),
		children: [
			{
				path: 'cloned',
				name: 'Cloned',
				component: view('apps/cloned/Cloned'),
				children: [
					{
						path: 'youtube',
						component: app('cloned/youtube/layouts/YTDefault'),
						children: [
							{
								path: '',
								name: 'Youtube',
								component: view('apps/cloned/youtube/Index'),
							}
						]
					},
					{
						path: 'twitter',
						component: app('cloned/twitter/layouts/TWDefault'),
						children: [
							{
								path: '',
								name: 'TWHome',
								component: view('apps/cloned/twitter/Index'),
							}
						]
					}
				]
			}
		]
	},
	{
		path: '/discord',
		name: 'Discord',
		component: view('Discord')
	},
	{
		path: '/about',
		name: 'About',
		component: view('About')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
