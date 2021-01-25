<template>
	<router-link :to="to">
		<Flex
			items-center
			class="px-6 h-10 hover:yt-bg-secondary-2"
			:class="{ 'yt-bg-secondary-2': active }"
		>
			<i
				v-if="mdIcon"
				class="mr-6 material-icons flex-none"
				:class="active ? 'yt-text-primary' : 'yt-text-secondary'"
				style="font-size: 20px"
				>{{ mdIcon }}</i
			>
			<img
				v-if="src"
				class="mr-6 h-6 w-6 flex-none rounded-full"
				:src="src"
			/>
			<p v-if="text" class="text-sm font-medium capitalize">{{ text }}</p>
			<slot />
		</Flex>
	</router-link>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "YTSidebarItem",
	props: {
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
});
</script>
