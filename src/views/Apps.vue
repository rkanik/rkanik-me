<template>
	<div class="bg-gray-900">
		<div class="min-h-screen container mx-auto py-8">
			<!-- Technologies -->
			<div class="xl:px-8 text-white flex flex-wrap -ml-4 -mt-4">
				<YTChip
					v-for="keyword in keywords"
					:key="keyword"
					:text="keyword"
					tag="button"
					class="ml-4 mt-4"
				/>
			</div>

			<!-- Projects -->
			<div class="grid grid-cols-1 xl:grid-cols-4 xl:gap-8 xl:px-8 mt-8">
				<!-- :is="app.tag || 'router-link'" -->
				<component
					v-for="app in apps"
					:key="app.name"
					:to="app.link"
					:href="app.link"
					is="button"
					@click="onClickApp(app)"
					class="block h-48 overflow-hidden relative rounded-md group transform transition-all duration-500 scale-100 hover:scale-90 border-2 border-solid border-gray-700 hover:border-teal-500"
				>
					<img
						:alt="app.name"
						:src="app.thumbnail"
						class="w-full h-full object-cover object-left-top transform transition-all duration-500 scale-100 group-hover:scale-150"
					/>
					<div
						class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 text-white bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 px-3"
					>
						<h3 class=" text-2xl">{{ app.name }}</h3>
						<p class="text-base text-center text-gray-400 mx-4">
							{{ app.description }}
						</p>
					</div>
				</component>
			</div>
		</div>

		<modal
			resizable
			draggable
			width="1280"
			min-width="320"
			max-width="1920"
			height="600"
			max-height="95vh"
			name="current-app"
		>
			<iframe
				v-if="currentApp"
				:src="currentApp.link"
				class="w-full h-full"
			></iframe>
		</modal>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import YTChip from "@/apps/cloned/youtube/components/YTChip.vue";
export default Vue.extend({
	name: "Apps",
	components: {
		YTChip
	},
	metaInfo() {
		return {
			title: "App | RKAnik"
		};
	},
	data: () => ({
		currentApp: null,
		apps: [
			{
				name: "Animated Sidebar",
				description:
					"Animated sidebar example implemented using vue3 typescript tailwindcss",
				tag: "a",
				link: "https://animated-sidebar.netlify.app/",
				thumbnail: "https://i.ibb.co/V308npq/chrome-capture-2022-3-29.gif",
				keywords: ["vue", "html5", "css3", "tailwindcss", "typescript"]
			},
			{
				name: "Tcobro Communications",
				description:
					"Vuejs based web application for Sending SMS, Email, Whatsapp message and voice mail. Login with rkanik.me@gmail.com, 12345678.",
				tag: "a",
				link: "http://167.71.180.127/",
				thumbnail: "https://i.ibb.co/BsbqNqK/tcobro.png",
				keywords: ["vue", "html5", "css3", "tailwindcss", "vuetify", "laravel"]
			},
			{
				name: "Manuscripts",
				description:
					"A rich document manegement system for managing your documents. Checking grammer, spelling, adverbs, and more.",
				tag: "a",
				link: "https://manuscripts.netlify.app/",
				thumbnail: "https://i.ibb.co/vZVmDX7/manuscript.png",
				keywords: ["react"]
			},
			{
				name: "The Rotary Club of Tokyo Chuo.",
				description: "The Rotary Club of Tokyo Chuo.",
				tag: "a",
				link: "https://tokyochuo-rotary.netlify.app/",
				thumbnail: "https://i.ibb.co/7C2Q8wF/tokyochuo-rotary.png",
				keywords: ["react", "gatsby", "ghraphql"]
			},
			{
				name: "Youtube Clone",
				description: "A simple Youtube clone",
				link: "/apps/cloned/youtube",
				thumbnail:
					"https://i.ibb.co/f93G88p/screencapture-localhost-8080-apps-cloned-youtube-2022-04-20-00-27-27.png",
				keywords: ["vue", "html5", "css3", "tailwindcss", "Youtube data api"]
			},
			{
				name: "Twitter Clone",
				description: "A simple Twitter clone",
				link: "/apps/cloned/twitter",
				thumbnail:
					"https://i.ibb.co/q0kLKHL/screencapture-localhost-8080-apps-cloned-twitter-2022-04-20-00-31-58.png",
				keywords: ["vue", "html5", "css3", "tailwindcss"]
			},
			{
				name: "Discord Clone",
				description:
					"Discord static clone using tailwindcss. Discord static clone using tailwindcss",
				link: "/discord",
				thumbnail: "https://i.ibb.co/0qmqxnf/discord.png",
				keywords: ["html5", "tailwindcss"]
			},
			{
				name: "Shin Sengoku",
				description:
					"A simple static website for Shin Sengoku, a Japanese anime series",
				tag: "a",
				link: "https://shin-sengoku-rkanik.netlify.app",
				thumbnail:
					"https://i.ibb.co/GTTdGRL/screencapture-localhost-8080-2022-04-20-21-32-16.png",
				keywords: ["vue3", "tailwindcss", "typescript", "pinia"]
			},
			{
				name: "Routine Manager DIU",
				description:
					"A routine management system for DIU students. Try with ID 161-15-7040",
				tag: "a",
				link: "https://routine-diu.netlify.app/",
				thumbnail: "https://i.ibb.co/wp9NMcK/routine-diu.png",
				keywords: ["vue", "Dark Theme"]
			},
			{
				name: "Product Color Variant",
				description: "A simple static website for Product Color Variant.",
				tag: "a",
				link: "https://product-color-variants.netlify.app/",
				thumbnail:
					"https://i.ibb.co/rkYJxpr/screencapture-product-color-variants-netlify-app-2022-04-20-21-48-13.png",
				keywords: ["html5", "css3", "react"]
			},
			{
				name: "Multiple Category Selection",
				description:
					"A simple static website for selecting multiple categories and showing their respective products.",
				tag: "a",
				link: "https://cocky-hypatia-1e2715.netlify.app/",
				thumbnail:
					"https://i.ibb.co/DwYBMWt/screencapture-cocky-hypatia-1e2715-netlify-app-2022-04-20-21-51-24.png",
				keywords: ["html5", "css3", "react"]
			},
			{
				name: "Open Weather Map",
				description: "A simple react application for Open Weather Map API.",
				tag: "a",
				link: "https://rkanik-weather.netlify.app/",
				thumbnail:
					"https://i.ibb.co/W6GFXPy/screencapture-rkanik-weather-netlify-app-2022-04-20-21-55-37.png",
				keywords: ["html5", "css3", "react", "api"]
			},
			{
				name: "Car Cat",
				description:
					"Tested cars from major European countries. Leasing review within 1 hour - fast and convenient.",
				tag: "a",
				link: "https://carcat.netlify.app/",
				thumbnail: "https://i.ibb.co/J5FWD8m/Screenshot-2.png",
				keywords: ["vue", "vue2", "tailwindcss"]
			},
			{
				name: "Map Marker | Here Maps",
				description:
					"A marker map with here map api. Editable marker and draggable marker.",
				tag: "a",
				link: "https://map-marker.netlify.app/",
				thumbnail: "https://i.ibb.co/ZLLJ9nV/map-marker.png",
				keywords: ["react", "API", "Map"]
			},
			{
				name: "Crown Clothing",
				description: "Categorized ecommerce website.",
				tag: "a",
				link: "https://crwn-clothing.netlify.app/",
				thumbnail:
					"https://i.ibb.co/By61vn9/screencapture-crwn-clothing-netlify-app-2022-04-20-22-01-48.png",
				keywords: ["react", "html5", "css3"]
			},
			{
				name: "Vinify",
				description: "",
				tag: "a",
				link: "https://vinify.netlify.app/",
				thumbnail: "https://i.ibb.co/8xBZ8Zf/vinify.png",
				keywords: ["vue", "vue2", "lottie animation"]
			}
		]
	}),
	computed: {
		keywords() {
			return [...new Set(this.apps.map(app => app.keywords).flat())].sort();
		}
	},
	methods: {
		onClickApp(app: any) {
			this.currentApp = app;
			this.$modal.show("current-app", {});
		}
	}
});
</script>
