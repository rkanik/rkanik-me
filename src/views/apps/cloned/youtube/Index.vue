<template>
	<Flex class="flex-1 overflow-y-hidden">
		<YTSidebar />
		<Flex flex-col class="flex-1 overflow-x-hidden">
			<YTSuggBar class="p-3" />
			<YTMain @bottom="onScrollbarNearlyBottom" class="p-4">
				<div class="grid grid-cols-4 gap-4">
					<YTVideoCard
						:key="video.id"
						v-bind="video"
						v-for="video in $ytVideos.slice(0, 8)"
					/>
				</div>
				<hr class="border-t-2 my-8 yt-border-primary" />
				<div class="py-4 px-2 text-xl font-bold">Latest YouTube posts</div>
				<div class="grid grid-cols-4 gap-4">
					<YTPostCard />
					<YTPostCard />
					<YTPostCard />
					<YTPostCard />
				</div>
				<hr class="border-t-2 my-8 yt-border-primary" />
				<div class="grid grid-cols-4 gap-4">
					<YTVideoCard
						:key="video.id"
						v-bind="video"
						v-for="video in $ytVideos.slice(8)"
					/>
				</div>
			</YTMain>
		</Flex>
	</Flex>
</template>

<script lang="ts">
import Vue from "vue";

// components
import YTMain from "@/apps/cloned/youtube/components/YTMain.vue";
import YTSuggBar from "@/apps/cloned/youtube/components/YTSuggBar.vue";
import YTSidebar from "@/apps/cloned/youtube/components/YTSidebar.vue";
import YTVideoCard from "@/apps/cloned/youtube/components/YTVideoCard.vue";
import YTPostCard from "@/apps/cloned/youtube/components/YTPostCard.vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
	name: "Youtube",
	components: {
		YTMain,
		YTSuggBar,
		YTSidebar,
		YTPostCard,
		YTVideoCard,
	},
	data() {
		return {
			fetching: false,
		};
	},
	computed: {
		...mapGetters("YT", ["$ytVideos"]),
	},
	created() {
		this.fetchVideos();
	},
	methods: {
		...mapActions("YT", ["fetchVideos"]),
		async onScrollbarNearlyBottom() {
			if (this.fetching) return;
			this.fetching = true;
			await this.fetchVideos();
			this.fetching = false;
		},
	},
});
</script>
