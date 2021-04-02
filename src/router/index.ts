import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Landing from '@/views/Landing.vue'

import { view, app } from '../helpers'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: Landing.name,
		component: Landing
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
								name: 'YTContent',
								component: view('apps/cloned/youtube/Index'),
							},
							{
								path: 'watch',
								name: 'YTWatch',
								component: view('apps/cloned/youtube/Watch'),
							},
							{
								path: 'search',
								name: 'YTSearch',
								component: view('apps/cloned/youtube/Search'),
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
								component: view('apps/cloned/twitter/TWHome'),
							},
							{
								path: 'explore',
								name: 'TWExplore',
								component: view('apps/cloned/twitter/TWExplore'),
							}
						]
					}
				]
			},
			{
				path: 'fiverr',
				component: view('apps/fiverr/Fiverr'),
				children: [
					{
						name: 'Vinify',
						path: 'vinify',
						component: view('apps/fiverr/Vinify')
					},
					{
						name: 'DriveNListen',
						path: 'drivenlisten',
						component: view('apps/fiverr/DriveNListen')
					},
					{
						name: 'ShoppingCart',
						path: 'shopping-cart',
						component: view('apps/fiverr/ShoppingCart')
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
