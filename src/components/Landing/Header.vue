<template>
	<header class="fixed inset-x-0 top-0 z-50">
		<div class="absolute inset-0"></div>
		<!-- bg-gradient-to-r from-red-600 to-indigo-500 opacity-90 -->
		<div class="relative z-10">
			<Container>
				<Flex ic jb class="h-20">
					<h2 class="text-white font-semibold text-2xl">RK Anik</h2>
					<div
						class="h-8 w-8 cursor-pointer rounded-full bg-green-100"
					></div>
				</Flex>
			</Container>
		</div>
	</header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "Header",
});
</script>
