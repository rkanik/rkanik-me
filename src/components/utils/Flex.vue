<template>
	<router-link v-if="to" :to="to" :class="classes">
		<slot />
	</router-link>
	<div v-else :class="classes">
		<slot />
	</div>
</template>
<script>
export default {
	name: 'Flex',
	props: {
		on: {
			type: [String, Boolean],
			default: false,
		},
		to: {
			type: [String, Boolean],
			default: false
		},
		center: {
			type: Boolean,
			default: false
		},
		itemsCenter: {
			type: Boolean,
			default: false
		},
		itemsEnd: {
			type: Boolean,
			default: false
		},
		itemsStretch: {
			type: Boolean,
			default: false
		},
		justifyCenter: {
			type: Boolean,
			default: false
		},
		justifyBetween: {
			type: Boolean,
			default: false
		},
		justifyEnd: {
			type: Boolean,
			default: false
		},
		flexRow: {
			type: Boolean,
			default: false
		},
		flexCol: {
			type: Boolean,
			default: false
		},
		flexRowReverse: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		classes() {
			return {
				'flex': !this.on,
				[`${this.on}:flex`]: this.on,
				// Alignment
				'items-center': this.itemsCenter,
				'items-end': this.itemsEnd,
				'items-stretch': this.itemsStretch,
				// Justify
				'justify-center': this.justifyCenter,
				'justify-between': this.justifyBetween,
				'justify-end': this.justifyEnd,
				// Direction
				'flex-row': this.flexRow && !this.flexRowReverse,
				'flex-col': this.flexCol,

				'flex-row-reverse': this.flexRowReverse,

				'items-center justify-center': this.center
			}
		}
	}
}
</script>
