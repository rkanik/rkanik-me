<template>
	<router-link
		:to="to"
		:class="classes"
		class="flex items-center h-10 hover:yt-bg-secondary-2"
	>
		<i
			v-if="mdIcon"
			class="mr-6 material-icons flex-none"
			:class="active ? 'yt-text-primary' : 'yt-text-secondary'"
			style="font-size: 20px"
			>{{ mdIcon }}</i
		>
		<img v-if="src" class="mr-6 h-6 w-6 flex-none rounded-full" :src="src" />
		<p v-if="text" class="text-sm font-medium capitalize">{{ text }}</p>
		<slot />
	</router-link>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "YTSidebarItem",
	props: {
		type: {
			type: String,
			default: "full",
			validator(v) {
				return ["full", "mini", "fixed"].includes(v);
			},
		},
		active: {
			default: false,
			type: Boolean,
		},
		to: {
			default: "#",
			type: [String, Boolean],
		},
		text: {
			default: false,
			type: [String, Boolean],
		},
		mdIcon: {
			default: false,
			type: [String, Boolean],
		},
		src: {
			default: false,
			type: [String, Boolean],
		},
	},
	computed: {
		classes() {
			return {
				"yt-bg-secondary-2": this.active,
				"pl-5": this.type === "mini",
				"pl-6": this.type !== "mini",
			};
		},
	},
});
</script>
