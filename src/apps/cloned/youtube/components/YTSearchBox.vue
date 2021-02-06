<template>
	<div class="relative w-full max-w-2xl" v-on-clickaway="() => $emit('away')">
		<div
			class="hidden lg:block yt-bg-primary relative h-8 py-1 pl-2 pr-20 border yt-border-secondary"
		>
			<input
				type="text"
				placeholder="Search"
				class="bg-transparent yt-placeholder-primary text-base w-full"
				v-model="vModel"
				@focus="$emit('focus')"
			/>
			<button
				class="flex rounded-none items-center justify-center yt-bg-secondary-2 absolute inset-y-0 right-0 w-16"
			>
				<i class="material-icons yt-text-secondary text-xl">search</i>
			</button>
		</div>
		<slot />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import { directive as onClickaway } from "vue-clickaway";
export default Vue.extend({
	name: "YTSearchBox",
	directives: {
		onClickaway,
	},
	props: {
		value: {
			type: String,
			required: true,
		},
	},
	computed: {
		vModel: {
			get() {
				// @ts-ignore
				return this.value;
			},
			set(v: String) {
				// @ts-ignore
				this.$emit("input", v);
			},
		},
	},
});
</script>
