<template>
	<div class="landing h-screen overflow-y-auto text-white">
		<!-- <Header /> -->
		<HeroSection />

		<AboutSection />
	</div>
</template>

<script lang="ts">
import Vue from "vue";

import Header from "@/components/Landing/Header.vue";
import HeroSection from "@/components/Landing/HeroSection.vue";
import AboutSection from "@/components/Landing/AboutSection.vue";

export default Vue.extend({
	name: "Landing",
	metaInfo() {
		return {
			title: "RKAnik",
		};
	},
	components: {
		Header,
		HeroSection,
		AboutSection,
	},
});
</script>
<style lang="scss" >
	.landing {
		&::-webkit-scrollbar {
			width: 6px;
			background-color: #161616;
		}
		&::-webkit-scrollbar-thumb {
			background-color: #f44336;
			&:hover {
				background-color: #c62828;
			}
		}
	}
</style>
