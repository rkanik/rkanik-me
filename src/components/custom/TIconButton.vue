<template>
	<button
		@click="$emit('click', $event)"
		class="t-icon-button h-10 w-10 p-1 relative bg-transparent rounded-full flex justify-center items-center"
	>
		<i v-if="mdIcon" class="material-icons">{{ mdIcon }}</i>
		<img v-if="src" class="h-full w-full rounded-full" :src="src" />
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "TIconButton",
	props: {
		mdIcon: {
			default: false,
			type: [String, Boolean],
		},
		src: {
			default: false,
			type: [String, Boolean],
		}
	},
};
</script>
<style lang="scss" scoped>
	.t-icon-button {
		&:hover {
			background-color: rgba(white, 0.15);
		}
	}
</style>
