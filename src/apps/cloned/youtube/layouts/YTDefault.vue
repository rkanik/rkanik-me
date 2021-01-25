<template>
	<div
		class="youtube yt-text-primary yt-bg-primary flex flex-col h-screen min-h-screen"
	>
		<YTHeader />
		<router-view />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import YTHeader from "../components/YTHeader.vue";
export default Vue.extend({
	name: "YTDefaultLayout",
	components: {
		YTHeader,
	},
});
</script>
<style src='@/assets/scss/youtube/youtube.scss' lang='scss'>
</style>
