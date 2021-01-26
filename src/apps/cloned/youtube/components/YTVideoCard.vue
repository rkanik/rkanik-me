<template>
	<div>
		<div class="relative">
			<router-link :to="watch">
				<TImage :alt="title" :src="thumbnail" class="max-h-48 w-full" />
				<div
					class="absolute bottom-1 right-1 rounded-sm bg-black bg-opacity-80 text-xs py-1 px-2"
				>
					{{ duration }}
				</div>
			</router-link>
		</div>
		<Flex class="p-3">
			<router-link to="#" class="flex-none">
				<TImage
					circle
					class="h-9 w-9"
					:alt="channel.name"
					:src="channel.thumbnail"
				/>
			</router-link>
			<div class="ml-3">
				<router-link :to="watch">
					<h4
						class="text-sm 2xl:text-base font-bold max-h-10 2xl:max-h-12 overflow-hidden"
					>
						{{ title }}
					</h4>
				</router-link>
				<router-link to="#">
					<h6
						class="font-medium text-xs 2xl:text-sm yt-text-secondary flex items-center"
					>
						<span class="mr-1">{{ channel.name }}</span>
						<i
							v-if="channel.verified"
							class="material-icons text-xs 2xl:text-sm yt-text-secondary"
							>check_circle</i
						>
					</h6>
				</router-link>
				<p class="text-xs 2xl:text-sm yt-text-secondary flex items-center">
					<span>{{ views }} Views</span>
					<span class="mx-1">•</span>
					<span>{{ publishedAt }}</span>
				</p>
			</div>
		</Flex>
	</div>
</template>

<script>
export default {
	name: "YTVideoCard",
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
			}
		},
	},
	computed: {
		watch() {
			return `/apps/cloned/youtube/watch?v=${this.id}`
		}
	}
};
</script>
