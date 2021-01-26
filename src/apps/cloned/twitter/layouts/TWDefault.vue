<template>
	<div
		class="twitter yt-text-primary yt-bg-primary flex flex-col h-screen min-h-screen"
	>
		Twitter sidebar
		<router-view />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "TWDefaultLayout",
	components: {},
});
</script>
<style lang='scss'>
</style>
