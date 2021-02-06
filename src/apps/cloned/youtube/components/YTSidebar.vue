<template>
	<div
		class="fixed inset-y-0 z-50 lg:left-0 lg:relative yt-bg-secondary flex-none overflow-x-hidden overflow-y-auto transition-left"
		:class="classes"
	>
		<div class="px-4 my-2 lg:hidden">
			<TIconButton
				@click="$emit('menu')"
				md-icon="arrow_back"
				class="mr-4"
			/>
		</div>
		<div class="main-navs">
			<YTSidebarItem
				v-for="nav in mainNavs"
				:type="type"
				:key="nav.name"
				:md-icon="nav.icon"
				:text="nav.name"
				:to="nav.path || '#'"
				:active="$route.path === nav.path"
			/>
		</div>
		<hr class="border-t-1 yt-border-secondary my-4" />
		<div class="user-navs">
			<YTSidebarItem
				v-for="nav in userNavs"
				:type="type"
				:key="nav.name"
				:md-icon="nav.icon"
				:text="nav.name"
				:to="nav.path || '#'"
				:active="$route.path === nav.path"
			/>
		</div>
		<hr class="border-t-1 yt-border-secondary my-4" />
		<div class="subscriptions">
			<div
				v-if="type !== 'mini'"
				class="flex items-center px-6 h-6 mb-2 text-sm uppercase font-bold yt-text-secondary"
			>
				SUBSCRIPTIONS
			</div>
			<YTSidebarItem
				:key="ci"
				:type="type"
				:src="channel.thumb"
				:text="channel.name"
				v-for="(channel, ci) in subscriptions"
			/>
		</div>
		<hr class="border-t-1 yt-border-secondary my-4" />
		<div class="more-from-youtube">
			<div
				v-if="type !== 'mini'"
				class="flex items-center px-6 h-6 mb-2 text-sm uppercase font-bold yt-text-secondary"
			>
				MORE FROM YOUTUBE
			</div>
			<YTSidebarItem :type="type" md-icon="sports_esports" text="Gaming" />
			<YTSidebarItem :type="type" md-icon="wifi" text="Live" />
		</div>
		<hr class="border-t-1 yt-border-secondary my-4" />
		<div class="settings">
			<YTSidebarItem :type="type" md-icon="settings" text="Settings" />
			<YTSidebarItem :type="type" md-icon="flag" text="Report history" />
			<YTSidebarItem :type="type" md-icon="help" text="Help" />
			<YTSidebarItem :type="type" md-icon="feedback" text="Send Feedback" />
		</div>
		<hr v-if="type !== 'mini'" class="border-t-1 yt-border-secondary my-4" />
		<div
			v-if="type !== 'mini'"
			class="px-6 flex flex-wrap font-bold yt-text-secondary"
			style="font-size: 13px"
		>
			<a href="#" class="px-1">About</a>
			<a href="#" class="px-1">Press</a>
			<a href="#" class="px-1">Copyright</a>
			<a href="#" class="px-1">Contact us</a>
			<a href="#" class="px-1">Creators</a>
			<a href="#" class="px-1">Advertise</a>
			<a href="#" class="px-1">Developers</a>
		</div>
		<div
			v-if="type !== 'mini'"
			class="mt-3 pl-6 flex flex-wrap font-bold yt-text-secondary"
			style="font-size: 13px"
		>
			<a href="#" class="px-1">Terms</a>
			<a href="#" class="px-1">Privacy</a>
			<a href="#" class="px-1">Policy & Safety</a>
			<a href="#" class="px-1">How Youtube works</a>
			<a href="#" class="px-1">Test new features</a>
		</div>
		<div v-if="type !== 'mini'" class="px-6 py-4">
			<p class="yt-text-disabled" style="font-size: 12px">
				© 2021 Google LLC
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

// Components
import YTSidebarItem from "./YTSidebarItem.vue";

export default Vue.extend({
	name: "YTSidebar",
	props: {
		type: {
			type: String,
			default: "full",
			validator(v) {
				return ["full", "mini", "fixed"].includes(v);
			},
		},
		expanded: {
			type: Boolean,
			default: false,
		},
	},
	components: {
		YTSidebarItem,
	},
	data() {
		return {
			mainNavs: [
				{
					name: "Home",
					icon: "home",
					path: "/apps/cloned/youtube",
				},
				{
					name: "Trending",
					icon: "local_fire_department",
				},
				{
					name: "Subscriptions",
					icon: "subscriptions",
				},
			],
			userNavs: [
				{
					name: "Libraby",
					icon: "video_library",
				},
				{
					name: "History",
					icon: "restore",
				},
				{
					name: "Your Videos",
					icon: "slideshow",
				},
				{
					name: "Watch Later",
					icon: "watch_later",
				},
				{
					name: "Liked Videos",
					icon: "thumb_up",
				},
			],
			subscriptions: [
				{
					name: "Old Signature",
					thumb:
						"https://yt3.ggpht.com/ytc/AAUvwngFvOT-6Y0u3CTZNFw2qcwlBLZmZh7QAeyZrHSs=s88-c-k-c0x00ffffff-no-rj",
				},
				{
					name: "Funzoa",
					thumb:
						"https://yt3.ggpht.com/ytc/AAUvwnjN93Q64_fhdHIBcFf69m76h5wlYJKaUei3b2HEIA=s88-c-k-c0x00ffffff-no-rj",
				},
				{
					name: "Sanam",
					thumb:
						"https://yt3.ggpht.com/ytc/AAUvwnjE3KIfwjX51EWbucmpLmfv9yA7F7ZyIqlaqfq8ng=s88-c-k-c0x00ffffff-no-rj",
				},
				{
					name: "Avash",
					thumb:
						"https://yt3.ggpht.com/ytc/AAUvwnj_m4T7JmznRkDDgU97oViQjhp0jS0EFobvCVtfQw=s88-c-k-c0x00ffffff-no-rj",
				},
				{
					name: "Old Signature",
					thumb:
						"https://yt3.ggpht.com/ytc/AAUvwngFvOT-6Y0u3CTZNFw2qcwlBLZmZh7QAeyZrHSs=s88-c-k-c0x00ffffff-no-rj",
				},
				{
					name: "Funzoa",
					thumb:
						"https://yt3.ggpht.com/ytc/AAUvwnjN93Q64_fhdHIBcFf69m76h5wlYJKaUei3b2HEIA=s88-c-k-c0x00ffffff-no-rj",
				},
				{
					name: "Sanam",
					thumb:
						"https://yt3.ggpht.com/ytc/AAUvwnjE3KIfwjX51EWbucmpLmfv9yA7F7ZyIqlaqfq8ng=s88-c-k-c0x00ffffff-no-rj",
				},
				{
					name: "Avash",
					thumb:
						"https://yt3.ggpht.com/ytc/AAUvwnj_m4T7JmznRkDDgU97oViQjhp0jS0EFobvCVtfQw=s88-c-k-c0x00ffffff-no-rj",
				},
			],
		};
	},
	computed: {
		classes() {
			return {
				"w-60": ["full", "fixed"].includes(this.type),
				"w-16 scrollbar-thin": this.type === "mini",
				"-left-60": !this.expanded,
				"left-0 shadow-xl": this.expanded,
			};
		},
	},
});
</script>
