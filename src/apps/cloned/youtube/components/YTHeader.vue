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
			<YTSearchBox />

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

// Icons
import YTLogo from "./icons/YTLogo.vue";
import YTAddVideo from "./icons/YTAddVideo.vue";

// Components
import YTSearchBox from "./YTSearchBox.vue";

export default Vue.extend({
	name: "YTHeader",
	components: {
		YTLogo,
		YTSearchBox,
		YTAddVideo,
	},
});
</script>
