<template>
	<div class="tw-default tw-text-primary tw-bg-primary">
		<div class="tw-container mx-auto">
			<div class="flex h-screen overflow-y-hidden">
				<aside class="flex flex-col justify-between w-72 flex-none px-3">
					<div class="overflow-y-auto flex-1">
						<TIconButton class="mt-1 h-14 w-14 tw-hover">
							<TWIconTwitter class="h-8" />
						</TIconButton>
						<nav class="mt-4 space-y-4">
							<Flex
								items-center
								:to="nav.path"
								:key="nav.name"
								v-for="nav in navs"
								class="tw-hover p-3 pr-6 rounded-full w-max hover:tw-text-accent"
								:class="{ 'tw-text-accent': $route.path === nav.path }"
							>
								<component :is="nav.icon" class="h-7" />
								<span class="ml-5 text-xl font-extrabold tracking-wide leading-tight">{{
									nav.name
								}}</span>
							</Flex>
						</nav>

						<button
							aria-label="Tweet"
							class="tw-bg-accent mt-4 py-4 w-full rounded-full font-bold text-base"
						>
							Tweet
						</button>
					</div>
					<div class="flex-none h-20 py-3">
						<Flex items-center class="p-2 tw-hover rounded-full">
							<img
								alt="Profile Thumbnail"
								class="h-10 w-10 rounded-full"
								src="https://i.ibb.co/hmYbNmH/rkanik-and-sadnan.jpg"
							/>
							<div class="ml-4">
								<h4 class="tw-text-primary text-base font-bold">
									RK Anik
								</h4>
								<p class="tw-text-secondary text-base leading-none">
									@RKAnik773
								</p>
							</div>
							<i class="material-icons ml-auto text-xl">more_horiz</i>
						</Flex>
					</div>
				</aside>
				<main class="flex flex-1">
					<router-view />
					<div class="flex flex-col flex-1">
						<div class="h-12 flex-none"></div>
						<div class="flex-1 overflow-y-auto"></div>
					</div>
				</main>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

// Icons
import TWIconTwitter from "@/apps/cloned/twitter/components/icons/TWIconTwitter.vue";
import TWIconHome from "@/apps/cloned/twitter/components/icons/TWIconHome.vue";
import TWIconHash from "@/apps/cloned/twitter/components/icons/TWIconHash.vue";
import TWIconBell from "@/apps/cloned/twitter/components/icons/TWIconBell.vue";
import TWIconMessage from "@/apps/cloned/twitter/components/icons/TWIconMessage.vue";
import TWIconBookmark from "@/apps/cloned/twitter/components/icons/TWIconBookmark.vue";
import TWIconList from "@/apps/cloned/twitter/components/icons/TWIconList.vue";
import TWIconProfile from "@/apps/cloned/twitter/components/icons/TWIconProfile.vue";
import TWIconMore from "@/apps/cloned/twitter/components/icons/TWIconMore.vue";

export default Vue.extend({
	name: "TWDefaultLayout",
	components: {
		// Icons
		TWIconTwitter,
		TWIconHome,
		TWIconHash,
		TWIconBell,
		TWIconMessage,
		TWIconBookmark,
		TWIconList,
		TWIconProfile,
		TWIconMore,
	},
	data() {
		return {
			navs: [
				{ name: "Home", path: "/apps/cloned/twitter", icon: "TWIconHome" },
				{
					name: "Explore",
					path: "/apps/cloned/twitter/explore",
					icon: "TWIconHash",
				},
				{
					name: "Notifications",
					path: "/apps/cloned/twitter/notifications",
					icon: "TWIconBell",
				},
				{
					name: "Messages",
					path: "/apps/cloned/twitter/messages",
					icon: "TWIconMessage",
				},
				{
					name: "Bookmarks",
					path: "/apps/cloned/twitter/bookmarks",
					icon: "TWIconBookmark",
				},
				{
					name: "Lists",
					path: "/apps/cloned/twitter/lists",
					icon: "TWIconList",
				},
				{
					name: "Profile",
					path: "/apps/cloned/twitter/:username",
					icon: "TWIconProfile",
				},
				{
					name: "More",
					type: "button",
					path: "/apps/cloned/twitter/explore",
					icon: "TWIconMore",
				},
			],
		};
	},
});
</script>
<style lang='scss' src='@/assets/scss/twitter/tw-main.scss'/>
