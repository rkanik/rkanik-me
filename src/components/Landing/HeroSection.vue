<template>
	<div class="landing-hero relative overflow-hidden" :style="bgColor">
		<Container>
			<Flex ic class="h-screen px-16">
				<Flex jb ic class="w-full relative">
					<div class="relative">
						<div class="relative z-20 blend-dodge">
							<h1 class="text-7xl font-bold text-gray-100">
								<span class="text-lg font-light text-white mb-2"
									>Hi there, I am RK Anik</span
								><br />
								Full Stack
								<span class="text-gradient js">JavaScript</span><br />
								Developer
							</h1>
							<p
								class="text-xl font-normal text-gray-400 mt-8 max-w-xl leading-normal"
							>
								I am very dedicated and passionate in programming. I can
								build website, web application, Restful API, Desktop
								application and Database design. I always write clean,
								reusable, maintainable, scalable code.
							</p>
							<div class="mt-8 relative z-20 flex space-x-8">
								<Button
									animate
									md="chevron_right"
									href="https://www.fiverr.com/rkanik"
									>Hire Me</Button
								>
								<Button
									outlined
									download
									md="download"
									href="https://firebasestorage.googleapis.com/v0/b/rkanik-me.appspot.com/o/docs%2FCV%20of%20Md.%20Rasel%20Khandkar%20%5BCF%5D.pdf?alt=media&token=60010cca-a80b-405e-a29e-1707c80b8063"
									>Download CV</Button
								>
							</div>
						</div>
						<OrganicShape class="absolute -top-28 -left-48 z-10" />
					</div>
					<div class="relative max-w-4xl">
						<svg
							width="72"
							height="64"
							viewBox="0 0 72 64"
							class="c-i-a-h-c h-96 w-96 absolute top-0 right-0 text-yellow-300 text opacity-50"
						>
							<g>
								<rect rx="32" fill="none" width="64" height="64" />
								<rect
									rx="8"
									width="16"
									height="16"
									fill="current-color"
								/>
							</g>
						</svg>
						<img
							alt="RK Anik"
							class="relative z-10 max-w-xl object-cover object-top transform translate-y-32"
							src="@/assets/images/landing/hero-me-trans.png"
						/>
						<div
							class="absolute z-0 left-1/2 transform -translate-x-1/2 top-24 w-full h-full max-h-md max-w-md rounded-full bg-white bg-opacity-50 glass-2"
						></div>
					</div>
				</Flex>
			</Flex>
		</Container>
		<img
			class="absolute bottom-0 left-0 z-0"
			src="@/assets/images/landing/triangles.png"
			alt="background triangle shape"
		/>
	</div>
</template>
<script>
import { random } from '@/helpers'
import { darkColors } from '@/consts';
import OrganicShape from './OrganicShape'
import Button from '@/components/Landing/Button.vue'
export default {
	name: "HeroSection",
	components: {
		Button,
		OrganicShape
	},
	data() {
		return {
			color: [],
			colors: darkColors,
		};
	},
	created() {
		this.changeColor()
		setInterval(this.changeColor, 10000);
	},
	computed: {
		bgColor() {
			return `background-color:${this.color};`;
		},
	},
	methods: {
		changeColor() {
			this.color = this.colors[
				random({
					max: this.colors.length
				})
			]
		},
	}
};
</script>
<style lang="scss" scoped>
	.landing-hero {
		transition: background-color 10s ease;
		font-family: "Inter", sans-serif;
	}
	.text-gradient {
		background-color: red;
		background-image: linear-gradient(
			to right,
			rgb(18, 194, 233),
			rgb(196, 113, 237),
			rgb(246, 79, 89)
		);
		background-size: 100%;
		background-repeat: no-repeat;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
		-moz-background-clip: text;
		-webkit-background-clip: text;
	}
</style>
