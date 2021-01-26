<template>
	<Flex class="flex-1 overflow-y-hidden">
		<div class="flex-1 pt-4 lg:pt-6">
			<div class="px-4 lg:px-0 mx-auto w-min">
				<YTPlayer
					class="mx-auto"
					:videoId="video.id"
					:size="playerSize"
					v-if="video.id && playerSize"
				/>

				<div class="pt-4 lg:pb-4 relative">
					<h2 class="text-xl max-w-screen-sm">{{ video.title }}</h2>
					<p class="text-sm mt-2 yt-text-secondary flex items-center">
						<span>{{ video.views }} Views</span>
						<span class="mx-1">•</span>
						<span>{{ video.publishedAt }}</span>
					</p>
					<Flex
						ites-center
						justify-end
						class="lg:absolute bottom-0 py-1 lg:w-max right-0 space-x-4"
					>
						<Flex items-center class="uppercase yt-text-secondary">
							<i class="material-icons text-xl mr-2">thumb_up</i>
							<span class="text-sm">1.7K</span>
						</Flex>
						<Flex items-center class="uppercase yt-text-secondary">
							<i class="material-icons text-xl mr-2">thumb_down</i>
							<span class="text-sm">100</span>
						</Flex>
						<Flex items-center class="uppercase yt-text-secondary">
							<i class="material-icons text-xl mr-2">reply</i>
							<span class="text-sm">Share</span>
						</Flex>
						<Flex items-center class="uppercase yt-text-secondary">
							<i class="material-icons text-xl mr-2">playlist_add</i>
							<span class="text-sm">Save</span>
						</Flex>
						<TIconButton
							class="h-3 w-3"
							mdIcon="more_horiz"
							iconClass="yt-text-secondary"
						/>
					</Flex>
				</div>
				<hr class="border-t-1 yt-border-secondary" />
			</div>
		</div>
		<div
			style="width: 28rem"
			class="hidden lg:flex flex-col flex-none h-full p-4 overflow-y-auto yt-bg-secondary shadow space-y-3"
		>
			<YTListVideoCard
				:key="video.id"
				v-bind="video"
				@click="onClickListItem(video)"
				v-for="video in $ytVideos.slice(0, 16)"
			/>
		</div>
	</Flex>
</template>

<script>
// Vuex
import { mapGetters } from "vuex";

// Helpers and Contstants
import { bps, yt } from '@/consts';
import { getDevice } from '@/helpers';

// Components
import YTPlayer from '@/apps/cloned/youtube/components/YTPlayer'
import YTListVideoCard from '@/apps/cloned/youtube/components/YTListVideoCard'

export default {
	name: "YTWatch",
	metaInfo() {
		return `RKAnik | Youtube Clone - ${this.video.title}`
	},
	components: {
		YTPlayer,
		YTListVideoCard
	},
	data() {
		return {
			video: {},
			playerSize: null
		};
	},
	created() {
		const vid = this.$route.query.v;
		if (!vid) return this.goBack();
		this.video = this.$ytVideos.find(v => v.id === vid);
	},
	mounted() {
		this.onChangeBreakPoint(window.innerWidth)
		//bus.$on('bp', this.onChangeBreakPoint)
		bus.$on('resize', size => this.onChangeBreakPoint(size.width))
	},
	computed: {
		...mapGetters("YT", ["$ytVideos"]),
		hasHistory() {
			return window.history.length > 2;
		},
	},
	methods: {
		onChangeBreakPoint(size) {
			console.log('onChangeBreakPoint', size)
			let width = size > 1280
				? size - yt.watchSidebarWidth - yt.miniSidebarWidth - 48
				: window.innerWidth - 32
			this.playerSize = { width, height: Math.round(width / 1.778) }
		},
		goBack() {
			return this.hasHistory
				? this.$router.back()
				: this.$router.replace("/apps/cloned/youtube");
		},
		onClickListItem(video) {
			this.video = video
		}
	},
};
</script>
