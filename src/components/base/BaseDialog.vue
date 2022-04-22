<template>
	<span
		><transition
			enter-from-class="opacity-0"
			enter-active-class="ease-out duration-300"
			enter-to-class="opacity-100"
			leave-from-class="opacity-100"
			leave-active-class="ease-in duration-200"
			leave-to-class="opacity-0"
		>
			<teleport to="body">
				<div
					v-if="modelValue"
					aria-hidden="true"
					class="fixed inset-0 z-40 transition-opacity"
					@click="onClickOverlay"
				></div>
			</teleport>
		</transition>
		<transition
			enter-from-class="opacity-0 translate-y-2 sm:translate-y-0 sm:scale-95"
			enter-active-class="ease-out duration-300"
			enter-to-class="opacity-100 translate-y-0 sm:scale-100"
			leave-from-class="opacity-100 translate-y-0 sm:scale-100"
			leave-active-class="ease-in duration-200"
			leave-to-class="opacity-0 translate-y-2 sm:translate-y-0 sm:scale-95"
		>
			<div
				v-if="modelValue"
				class="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg text-left overflow-hidden shadow-xl transform transition-all bg-seondary dark:bg-dark-seondary"
			>
				<slot />
			</div> </transition
	></span>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "BaseDialog",
	props: {
		persistent: Boolean,
		modelValue: {
			required: true,
			type: Boolean
		}
	},
	// emits: ["close", "update:modelValue"],
	methods: {
		onClose() {
			this.$emit("update:modelValue", false);
			this.$emit("close", false);
		},
		onClickOverlay() {
			if (this.persistent) return;
			this.onClose();
		}
	}
});
</script>
