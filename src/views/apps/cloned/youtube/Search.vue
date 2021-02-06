<template>
	<div class="YTSearch p-8">
		<h4>This is Search component</h4>
		<p>{{ $route.query.q }}</p>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "YTSearch",
});
</script>
