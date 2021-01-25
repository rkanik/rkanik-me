<template>
	<div>
		<div class="relative">
			<router-link :to="url">
				<TImage
					alt="Video Thumbnail"
					src="https://i.ytimg.com/vi/Wy9q22isx3U/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDzxToz1kD_wEdNswQviyjkniGNuA"
				/>
				<div
					class="absolute bottom-1 right-1 rounded-sm bg-black bg-opacity-80 text-xs py-1 px-2"
				>
					01:08:52
				</div>
			</router-link>
		</div>
		<Flex class="p-3">
			<router-link to="#" class="flex-none">
				<TImage
					circle
					class="h-9 w-9"
					alt="Channel Thumbnail"
					src="https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s68-c-k-c0x00ffffff-no-rj"
				/>
			</router-link>
			<div class="ml-3">
				<router-link :to="url">
					<h4 class="text-base font-bold max-h-12 overflow-hidden">
						{{ title }}
					</h4>
				</router-link>
				<router-link to="#">
					<h6
						class="font-medium text-sm yt-text-secondary flex items-center"
					>
						<span class="mr-1">Traversy Media</span>
						<i class="material-icons text-sm yt-text-secondary"
							>check_circle</i
						>
					</h6>
				</router-link>
				<p class="text-sm yt-text-secondary flex items-center">
					<span>1M Views</span>
					<span class="mx-1">•</span>
					<span>2 years ago</span>
				</p>
			</div>
		</Flex>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "YTVideoCard",
	props: {
		url: {
			default: "#",
			type: String,
		},
		title: {
			type: String,
			required: true,
		},
	},
});
</script>
