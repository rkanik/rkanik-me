<template>
	<div
		class="py-3 px-4 2xl:py-4 2xl:px-6 border yt-bg-secondary yt-border-secondary-2"
	>
		<Flex items-center>
			<router-link to="#" class="flex-none">
				<TImage
					circle
					class="h-9 w-9"
					alt="Channel Thumbnail"
					src="https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s68-c-k-c0x00ffffff-no-rj"
				/>
			</router-link>
			<p class="ml-3 text-sm yt-text-secondary flex items-center">
				<span>1M Views</span>
				<span class="mx-1">•</span>
				<span>2 years ago</span>
			</p>
		</Flex>
		<Flex items-center justify-between class="mt-4 space-x-2">
			<p class="text-sm 2xl:text-base">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
				quasi ab, dicta eos eveniet optio.
			</p>
			<TImage
				alt="Video Thumbnail"
				class="h-28 w-28 rounded-sm"
				src="https://yt3.ggpht.com/L5f1Dk1I0HwXrzZTETZx6wc-cfZYq3i1Dr4VYBwUGMv6jBV2COKIwpUdSkgcZB2rOTC3x-aTkkh1OOQ=s362-c-fcrop64=1,25090000cfb3ffff-nd"
			/>
		</Flex>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "YTPostCard",
	props: {
		url: {
			default: "#",
			type: String,
		},
		title: {
			type: String,
			required: false,
		},
	},
});
</script>
