<template>
	<div
		class="youtube yt-text-primary yt-bg-primary flex flex-col h-screen min-h-screen"
	>
		<YTHeader @menu="onClickMenu" />
		<Flex class="flex-1 overflow-y-hidden">
			<YTSidebar
				:type="sidebar.type"
				:expanded="sidebar.expanded"
				@menu="onClickMenu"
			/>
			<router-view />
		</Flex>
		<div
			class="fixed inset-y-0 w-full blur-2 lg:hidden bg-gray-18 bg-opacity-20 z-40 transition-left"
			:class="sidebar.expanded ? 'left-0' : '-left-full'"
		></div>
	</div>
</template>

<script>
import YTHeader from "../components/YTHeader.vue";
import YTSidebar from "../components/YTSidebar.vue";
export default {
	name: "YTDefaultLayout",
	data() {
		return {
			sidebar: {
				types: {
					YTWatch: "mini",
					YTContent: "full",
				},
				type: "full",
				expanded: false
			},
		};
	},
	components: {
		YTHeader,
		YTSidebar,
	},
	mounted() {
		if (window.innerWidth < 1024)
			this.sidebar.type = 'fixed'
	},
	watch: {
		$route: {
			deep: true,
			immediate: true,
			handler({ name }) {
				this.sidebar.type = this.sidebar.types[name];
			},
		},
	},
	methods: {
		onClickMenu() {
			this.sidebar.expanded = !this.sidebar.expanded
		}
	}
};
</script>
<style src='@/assets/scss/youtube/yt-main.scss' lang='scss'/>
