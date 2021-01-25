<template>
	<img
		:src="src"
		:alt="alt"
		:class="classes"
		class="object-cover object-center"
	/>
</template>

<script >
export default {
	name: "TImage",
	props: {
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			default: "Image",
		},
		circle: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		classes() {
			return {
				"rounded-full": this.circle,
			};
		},
	},
};
</script>
