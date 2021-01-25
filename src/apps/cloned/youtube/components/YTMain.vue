<template>
	<div class="flex-1 overflow-y-auto">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "YTMain",
});
</script>
