<template>
	<section class="bg-gray-19">
		<Container>
			<Flex ic on="lg" class="h-screen relative space-x-8">
				<div class="relative w-full py-32">
					<div
						:key="i"
						class="pieces-slider__slide"
						v-for="(slider, i) in sliders"
					>
						<img :src="slider.src" class="pieces-slider__image" />
						<!-- <h2 class="pieces-slider__text">{{ slider.text }}</h2> -->
					</div>

					<canvas
						style="height: 600px"
						class="w-full relative pieces-slider__canvas"
					/>
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
					tempora harum dolorum aspernatur, earum ipsum magni modi expedita
					repellendus at mollitia? Aspernatur esse sit facere cumque,
					doloribus reiciendis pariatur cupiditate.
				</div>
			</Flex>
		</Container>
	</section>
</template>

<script>

import anime from 'animejs'
import Pieces from '@/libs/pieces.min'

export default {
	name: "AboutSection",
	data() {
		return {
			sliders: [
				{
					text: 'Status Quo',
					src: 'https://images.unsplash.com/photo-1610123598147-f632aa18b275?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZCUyMHNjYXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
				},
				{
					text: 'Amphibia',
					src: 'https://images.unsplash.com/photo-1612020500898-0c79fa74c4b1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmQlMjBzY2FwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
				},
				{
					text: 'Love Letters',
					src: 'https://images.unsplash.com/photo-1589526603318-2c0ba291ffc0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmQlMjBzY2FwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
				},
				{
					text: 'Green Flight',
					src: 'https://images.unsplash.com/photo-1586715065342-98d1f6016fd1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGxhbmQlMjBzY2FwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
				},
				{
					text: 'Fun Fun Run',
					src: 'https://images.unsplash.com/photo-1611138142628-f1a1d8828645?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fGxhbmQlMjBzY2FwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
				},
			]
		}
	},
	mounted() {

		// setInterval(() => {
		// 	nextItem()
		// }, 2000);


		// Get all images and texts, get the `canvas` element, and save slider length
		var sliderCanvas = document.querySelector(".pieces-slider__canvas");
		var imagesEl = [].slice.call(
			document.querySelectorAll(".pieces-slider__image")
		);

		var slidesLength = imagesEl.length;

		var currentIndex = 0, currentImageIndex;

		function updateIndexes() {
			currentImageIndex = currentIndex;
		}

		updateIndexes();

		var piecesSlider;

		// Options for images
		var imageOptions = {
			angle: 45,
			extraSpacing: { extraX: 100, extraY: 200 },
			piecesWidth: function () {
				return Pieces.random(50, 200);
			},
			ty: function () {
				return Pieces.random(-400, 400);
			},
		};

		// Build the array of items to draw using Pieces
		var items = [];
		var imagesReady = 0;
		for (var i = 0; i < slidesLength; i++) {
			// Wait for all images to load before initializing the slider and event listeners
			var slideImage = new Image();
			slideImage.onload = function () {
				if (++imagesReady == slidesLength) {
					initSlider();
					initEvents();
				}
			};
			// Push all elements for each slide with the corresponding options
			items.push({
				type: "image",
				value: imagesEl[i],
				options: imageOptions,
			});

			slideImage.src = imagesEl[i].src;
		}

		// Initialize a Pieces instance with all items we want to draw
		function initSlider() {
			// Stop any current animation if the slider was initialized before
			if (piecesSlider) {
				piecesSlider.stop();
			}

			// Save the new Pieces instance
			piecesSlider = new Pieces({
				canvas: sliderCanvas,
				items: items,
				x: "centerAll",
				y: "centerAll",
				piecesSpacing: 1,
				fontFamily: ["'Helvetica Neue', sans-serif"],
				animation: {
					duration: function () {
						return Pieces.random(1000, 2000);
					},
					easing: "easeOutQuint",
				},
				// debug: true
			});

			showItems();
		}

		// Init Event Listeners
		function initEvents() {

			// Select prev or next slide using arrow keys
			document.addEventListener("keydown", function (e) {
				if (e.keyCode == 37) {
					// left
					prevItem();
				} else if (e.keyCode == 39) {
					// right
					nextItem();
				}
			});

			// Handle `resize` event
			window.addEventListener("resize", resizeStart);
		}

		// Show current items: image, text and number
		function showItems() {
			piecesSlider.showPieces({
				items: currentImageIndex,
				ignore: ["tx"],
				singly: true,
				update: (anim) => {
					if (anim.progress > 60) {
						var piece = anim.animatables[0].target;
						var ty = piece.ty;
						anime.remove(piece);
						anime({
							targets: piece,
							ty:
								piece.h_ty < 300
									? [
										{ value: ty + 10, duration: 1000 },
										{ value: ty - 10, duration: 2000 },
										{ value: ty, duration: 1000 },
									]
									: [
										{ value: ty - 10, duration: 1000 },
										{ value: ty + 10, duration: 2000 },
										{ value: ty, duration: 1000 },
									],
							duration: 2000,
							easing: "linear",
							loop: true,
						});
					}
				},
			});
		}

		// Hide current items: image, text and number
		function hideItems() {
			piecesSlider.hidePieces({
				items: [currentImageIndex],
			});
		}

		// Select the prev item: hide current items, update indexes, and show the new current item
		function prevItem() {
			hideItems();
			currentIndex = currentIndex > 0 ? currentIndex - 1 : slidesLength - 1;
			updateIndexes();
			showItems();
		}

		// Select the next item: hide current items, update indexes, and show the new current item
		function nextItem() {
			hideItems();
			currentIndex = currentIndex < slidesLength - 1 ? currentIndex + 1 : 0;
			updateIndexes();
			showItems();
		}

		// Handle `resize` event

		var initial = true,
			hideTimer,
			resizeTimer;

		// User starts resizing, so wait 300 ms before reinitialize the slider
		function resizeStart() {
			if (initial) {
				initial = false;
				if (hideTimer) clearTimeout(hideTimer);
				sliderCanvas.classList.add("pieces-slider__canvas--hidden");
			}
			if (resizeTimer) clearTimeout(resizeTimer);
			resizeTimer = setTimeout(resizeEnd, 300);
		}

		// User ends resizing, then reinitialize the slider
		function resizeEnd() {
			initial = true;
			windowWidth = window.innerWidth;
			initSlider();
			hideTimer = setTimeout(() => {
				sliderCanvas.classList.remove("pieces-slider__canvas--hidden");
			}, 500);
		}

		//})
	},
	methods: {

	}
};
</script>
<style lang="scss" scoped>
	canvas {
		transition: opacity 200ms;
	}

	.pieces-slider__slide {
		position: absolute;
		right: 100%;
	}
	.pieces-slider__image {
		max-width: 600px;
		max-height: 400px;
	}
	.pieces-slider__image {
		visibility: hidden;
	}
	.pieces-slider__text {
		text-indent: -9999px;
	}
	.pieces-slider__canvas {
		position: relative;
		transition: 0.2s opacity;
	}
	.pieces-slider__canvas--hidden {
		opacity: 0;
		transition-duration: 0.3s;
	}
	.pieces-slider__button {
		position: absolute;
		left: 0;
		top: 50%;
		width: 100px;
		height: 100px;
		margin: -25px 0 0 0;
		background-color: #5104ab;
		color: #fff;
		font-family: inherit;
		font-weight: bold;
		border: none;
		cursor: pointer;
		transition: 0.1s background-color;
	}
	.pieces-slider__button:hover {
		background: #5f3abf;
	}
	.pieces-slider__button--next {
		left: auto;
		right: 0;
	}
	@media screen and (max-width: 720px) {
		.pieces-slider__image {
			max-width: 300px;
		}
	}
	@media screen and (max-width: 55em) {
		// .pieces-slider__canvas {
		// 	width: 100vw;
		// 	height: 100vw;
		// }
		.pieces-slider__button {
			width: 60px;
			height: 60px;
		}
	}
</style>
