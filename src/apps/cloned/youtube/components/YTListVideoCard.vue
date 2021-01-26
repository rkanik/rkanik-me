<template>
	<div @click="$emit('click')" class="flex">
		<router-link :to="watch" class="block relative flex-none">
			<TImage :src="thumbnail" :alt="title" class="w-40 h-full" />
			<div
				class="absolute bottom-1 right-1 rounded-sm bg-black bg-opacity-80 text-xs py-1 px-2"
			>
				{{ duration }}
			</div>
		</router-link>
		<div class="px-3 py-4 yt-bg-primary flex-1">
			<router-link :to="watch">
				<h4 class="text-sm font-bold max-h-11 overflow-hidden">
					{{ title }}
				</h4>
			</router-link>
			<router-link to="#">
				<h6 class="font-medium text-sm yt-text-secondary flex items-center">
					<span class="mr-1">{{ channel.name }}</span>
					<i
						v-if="channel.verified"
						class="material-icons text-sm yt-text-secondary"
						>check_circle</i
					>
				</h6>
			</router-link>
			<p class="text-xs yt-text-secondary flex items-center">
				<span>{{ views }} Views</span>
				<span class="mx-1">•</span>
				<span>{{ publishedAt }}</span>
			</p>
		</div>
	</div>
</template>

<script >
export default {
	name: "YTListVideoCard",
	props: {
		id: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		thumbnail: {
			type: String,
			required: true,
		},
		duration: {
			type: String,
			required: true,
		},
		views: {
			type: String,
			required: true,
		},
		publishedAt: {
			type: String,
			required: true,
		},
		channel: {
			name: {
				type: String,
				required: true,
			},
			thumbnail: {
				type: String,
				required: true,
			},
			verified: {
				type: String,
				required: true,
			},
		},
	},
	computed: {
		watch() {
			return `/apps/cloned/youtube/watch?v=${this.id}`;
		},
	},
};
</script>
