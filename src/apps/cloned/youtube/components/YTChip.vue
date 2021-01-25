<template>
	<router-link :to="to">
		<div
			v-html="text"
			class="flex items-center justify-center whitespace-nowrap rounded-full yt-bg-secondary-2 px-4 text-sm h-8 border yt-border-secondary-2 hover:bg-white-20"
		/>
	</router-link>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "YTChip",
	props: {
		to: {
			default: "#",
			type: String,
		},
		text: {
			required: true,
			type: String,
		},
	},
});
</script>
