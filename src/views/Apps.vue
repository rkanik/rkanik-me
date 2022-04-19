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
				<router-link
					v-for="app in apps"
					:key="app.name"
					:to="app.link"
					class="block h-48 overflow-hidden relative rounded-md group transform transition-all duration-500 scale-100 hover:scale-90 border-2 border-solid border-gray-700 hover:border-teal-500"
				>
					<img
						:alt="app.name"
						:src="app.thumbnail"
						class="w-full h-full object-cover object-top transform transition-all duration-500 scale-100 group-hover:scale-150"
					/>
					<div
						class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 text-white bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500"
					>
						<h3 class=" text-2xl">{{ app.name }}</h3>
						<p class="text-base text-gray-400">{{ app.description }}</p>
					</div>
				</router-link>
			</div>
		</div>
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
		apps: [
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
			}
		]
	}),
	computed: {
		keywords() {
			return [...new Set(this.apps.map(app => app.keywords).flat())].sort();
		}
	}
});
</script>
