<template>
	<div class="flex flex-col border-l border-r tw-border" style="width: 660px">
		<div
			class="flex items-center justify-between flex-none px-4 h-16 border-b tw-border"
		>
			<h2 class="font-bold text-2xl">Home</h2>
			<TIconButton class="tw-hover h-12 w-12"
				><TWIconSettings class="h-7 tw-text-accent" />
			</TIconButton>
		</div>
		<div class="flex-1 overflow-y-auto">
			<div>Twitter Home</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import TWIconSettings from "@/apps/cloned/twitter/components/icons/TWIconSettings.vue";
export default Vue.extend({
	name: "TWHome",
	components: {
		TWIconSettings,
	},
});
</script>
