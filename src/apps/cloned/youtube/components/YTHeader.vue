<template>
	<header class="yt-header yt-bg-secondary border-b yt-border-secondary">
		<Flex justify-between items-center class="px-4 lg:px-8 h-16">
			<Flex itemsCenter>
				<TIconButton
					md-icon="menu"
					@click="$emit('menu')"
					class="mr-4 lg:hidden"
				/>
				<!-- Logo -->
				<router-link to="/apps/cloned/youtube">
					<YTLogo class="w-20" dark />
				</router-link>
			</Flex>

			<!-- Search box -->
			<YTSearchBox
				v-model="q"
				@away="showSuggestions = false"
				@focus="showSuggestions = true"
			>
				<div
					v-if="
						showSuggestions &&
						(suggestions.length || recentSearches.length)
					"
					class="absolute inset-x-0 z-10 top-9 shadow-lg py-1 yt-bg-secondary-2"
				>
					<button
						v-for="(suggestion, suggIndex) in suggestions.length
							? suggestions
							: recentSearches"
						:key="suggIndex"
						@click="onClickSuggestionItem(suggestion)"
						class="px-3 py-1 block w-full text-left yt-bg-secondary-2 hover:yt-bg-secondary text-gray-300 hover:text-white transition-colors"
					>
						<span v-if="suggestions.length">
							{{ q }}
							<b>
								{{ suggestion.replace(q.toLowerCase(), "") }}
							</b>
						</span>
						<span v-else>{{ suggestion }}</span>
					</button>
				</div>
			</YTSearchBox>

			<!-- Icons -->
			<Flex items-center class="w-max space-x-2">
				<TIconButton>
					<YTAddVideo class="h-6 w-6 fill-current" />
				</TIconButton>

				<TIconButton md-icon="apps" />
				<TIconButton md-icon="notifications" />

				<TIconButton
					class="p-0 h-8 w-8"
					src="https://i.ibb.co/hmYbNmH/rkanik-and-sadnan.jpg"
				>
				</TIconButton>
			</Flex>
		</Flex>
	</header>
</template>

<script lang="ts">
import Vue from "vue";
import youtube from "@/apis/youtube";

// Icons
import YTLogo from "./icons/YTLogo.vue";
import YTAddVideo from "./icons/YTAddVideo.vue";

// Components
import YTSearchBox from "./YTSearchBox.vue";
import Button from "@/components/Landing/Button.vue";

export default Vue.extend({
	name: "YTHeader",

	components: {
		YTLogo,
		YTSearchBox,
		YTAddVideo,
		Button,
	},
	data() {
		return {
			q: "",
			showSuggestions: false,
			recentSearches: ["hello", "new songs", "gaming videos"],
			suggestions: [],
		};
	},
	watch: {
		q(q: String) {
			this.getSuggestions(q);
		},
	},
	methods: {
		onClickSuggestionItem(q: string) {
			this.q = q;
			this.showSuggestions = false;
			this.$router.push(`/apps/cloned/youtube/search?q=${q}`);
		},
		async getSuggestions(q: String) {
			let { error, data } = await youtube.suggestions({ q });
			if (error) return;
			this.suggestions = data[1];
			this.showSuggestions = true;
		},
	},
});
</script>
