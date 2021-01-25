<template>
	<Flex
		items-center
		class="flex-none h-14 yt-bg-secondary border-b yt-border-secondary space-x-3 overflow-x-auto scrollbar-none"
	>
		<YTChip text="All" />
		<YTChip
			:key="index"
			:to="sugg.to"
			:text="sugg.text"
			v-for="(sugg, index) in suggestions"
		/>
	</Flex>
</template>

<script lang="ts">
import Vue from "vue";

// Components
import YTChip from "./YTChip.vue";

export default Vue.extend({
	name: "YTSuggBar",
	components: {
		YTChip,
	},
	data() {
		return {
			suggestions: [
				{ text: "New Songs", to: "#" },
				{ text: "Funny Videos", to: "#" },
				{ text: "Learn Vue", to: "#" },
				{ text: "JavaScript", to: "#" },
				{ text: "Tailwind CSS", to: "#" },
				{ text: "Frameworks", to: "#" },
				{ text: "Crash Courses", to: "#" },
				{ text: "Live", to: "#" },
				{ text: "Recently uploaded", to: "#" },
				{ text: "Games", to: "#" },
				{ text: "Tutorials", to: "#" },
				{ text: "Upcoming movies", to: "#" },
				{ text: "New Technologies", to: "#" },
			],
		};
	},
});
</script>
