<template>
	<div
		class="hidden lg:block yt-bg-primary relative h-8 py-1 pl-2 pr-20 w-full max-w-2xl border yt-border-secondary"
	>
		<input
			type="text"
			placeholder="Search"
			class="bg-transparent yt-placeholder-primary text-base w-full"
		/>
		<button
			class="flex rounded-none items-center justify-center yt-bg-secondary-2 absolute inset-y-0 right-0 w-16"
		>
			<i class="material-icons yt-text-secondary text-xl">search</i>
		</button>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "YTSearchBox",
});
</script>
