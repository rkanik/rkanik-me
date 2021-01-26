<template>
	<div class="flex-1 overflow-y-auto">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "YTMain",
	mounted() {
		this.$el.addEventListener(
			"scroll",
			({ target: { scrollTop, clientHeight, scrollHeight } }: any) => {
				if (scrollTop + clientHeight >= scrollHeight - 200) {
					console.log("NEAR BOTTOM");
					this.$emit("bottom");
				}
			}
		);
	},
	methods: {
		scroll() {
			this.$el.addEventListener("scroll", () => {
				let bottomOfWindow =
					Math.max(
						window.pageYOffset,
						document.documentElement.scrollTop,
						document.body.scrollTop
					) +
						window.innerHeight ===
					document.documentElement.offsetHeight;

				if (bottomOfWindow) {
					console.log("bottomOfWindow");
				}
			});
		},
	},
});
</script>
