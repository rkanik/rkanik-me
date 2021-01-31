<template>
	<component
		:href="href"
		:download="download"
		:is="href ? 'a' : 'button'"
		:target="href && '_blank'"
		:class="{ outlined: outlined }"
		class="relative flex items-center font-normal tracking-wide overflow-hidden text-base px-8 py-3 rounded-full text-white"
	>
		<span class="relative z-10">
			<slot />
		</span>
		<i
			v-if="md"
			:class="{ animate }"
			class="material-icons ml-2 relative z-10"
			>{{ md }}</i
		>
		<span
			class="circle z-0 block w-48 h-48 rounded-full absolute -top-5 -right-32 bg-white opacity-40"
		></span>
	</component>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "Button",
	props: {
		href: {
			default: false,
			type: [Boolean, String],
		},
		md: {
			default: false,
			type: [Boolean, String],
		},
		download: Boolean,
		animate: Boolean,
		outlined: Boolean,
	},
});
</script>
<style lang="scss" scoped>
	a,
	button {
		font-family: "Roboto", sans-serif;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
		&:not(.outlined) {
			background: linear-gradient(to right, #673ab7, #e53935);
		}
		&.outlined {
			.circle {
				opacity: 1;
				background: linear-gradient(to right, #e53935, #673ab7);
			}
			&:hover {
				&::before {
					border-color: #5d32a8;
				}
				&::after {
					opacity: 1;
				}
			}
			&::before,
			&::after {
				content: "";
				z-index: 0;
				display: block;
				position: absolute;
				border-radius: 4rem;
				@include inset-0;
			}
			&::before {
				transition: border-color 400ms;
				border: 2px solid #d32f2f;
			}
			&::after {
				opacity: 0;
				transition: opacity 300ms;
				background: linear-gradient(to right, #673ab7, #e53935);
			}
		}
		.circle {
			transition: right 300ms ease-in-out;
		}
		i.animate {
			animation: icon-anim 2s infinite;
		}
		&:hover {
			.circle {
				right: -80px;
			}
		}
		@keyframes icon-anim {
			0% {
				transform: translateX(0px);
			}
			50% {
				transform: translateX(12px);
			}
			100% {
				transform: translateX(0);
			}
		}
	}
</style>
