<template>
	<div class="h-screen w-full flex flex-col justify-center items-center">
		<h1 class="uppercase text-9xl text-gray-900 font-black">RK Anik - Me</h1>
		<!-- <router-link to="/apps/cloned/youtube" class="text-xl mt-10 text-red-500"
			>Youtube</router-link
		>
		<router-link to="/apps/cloned/twitter" class="text-xl mt-10 text-red-500"
			>Twitter</router-link
		> -->
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "Home",
	metaInfo() {
		return {
			title: "RKAnik | Home",
		};
	},
	components: {},
});
</script>
