<template>
	<div>
		<div ref="images">
			<img
				:key="i"
				:src="slider"
				class="absolute right-full invisible max-w-7xl max-h-screen"
				v-for="(slider, i) in sliders"
			/>
		</div>
		<canvas
			ref="canvas"
			style="min-height: 250px"
			class="w-full relative transition-opacity duration-200"
			:class="{ 'opacity-0 duration-300': isCanvasHidden }"
		/>
	</div>
</template>
<script>
import anime from 'animejs'
import Pieces from '@/libs/pieces.min'
export default {
	name: 'PiecesSlider',
	data() {
		return {
			// Nulls
			pieces: null,
			hideTimer: null,
			resizeTimer: null,
			nextInterval: null,

			// Numbers
			currentIndex: 0,
			imagesLength: 0,

			// Booleans
			initial: true,
			isCanvasHidden: false,

			options: {
				angle: 45,
				extraSpacing: {
					extraX: 100,
					extraY: 200
				},
				ty: () => Pieces.random(-400, 400),
				piecesWidth: () => Pieces.random(50, 200),
			},

			// Arrays
			items: [],
			sliders: [
				'https://scontent.fdac14-1.fna.fbcdn.net/v/t1.0-9/131631207_2804412906493297_375058983162225215_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_eui2=AeGlxkAGZ2ehJIpny3b1cWBPLUzfijy6-mAtTN-KPLr6YPyAlPhDe8Ae9gnVZMpFP7sUXdk6qMQNGP3RKTOaDJwA&_nc_ohc=nY2QB-fLxHsAX9mdJl9&_nc_ht=scontent.fdac14-1.fna&oh=4478258911da66d1a075a3a67d3ccd85&oe=6040BFFC',
				'https://scontent.fdac14-1.fna.fbcdn.net/v/t31.0-8/27164196_2022169731384289_4454800625339925732_o.jpg?_nc_cat=107&ccb=2&_nc_sid=19026a&_nc_eui2=AeFTml7SJ0mb17c9jTK_ZfxDrWZo9RBXJIGtZmj1EFckgbn6v79gdxRA5gWEWovjqeafFHyx9gZLzZVi5APxFXR3&_nc_ohc=EXefSRfCod0AX875nbE&_nc_ht=scontent.fdac14-1.fna&oh=8dc04b91a15dd4734caf2dea6c06e20b&oe=603F35FA',
				'https://scontent.fdac14-1.fna.fbcdn.net/v/t31.0-8/27024087_2021067471494515_8735964938173997164_o.jpg?_nc_cat=101&ccb=2&_nc_sid=19026a&_nc_eui2=AeH4OQmK0XbwpBPWJa0TxD6t7tflEA2is2Tu1-UQDaKzZHp-H0uNFOpZJNcn6sRqond2AvBXlc0RS6FGIijz4Zi3&_nc_ohc=vK3cvkCgKiwAX_fs3uM&_nc_ht=scontent.fdac14-1.fna&oh=1aa13b4b24bbd7072dacf8b6a7bab51d&oe=6042416B',
				'https://scontent.fdac14-1.fna.fbcdn.net/v/t31.0-8/22528885_1973935412874388_8118478198883959413_o.jpg?_nc_cat=108&ccb=2&_nc_sid=19026a&_nc_eui2=AeHhtB7gpEIDJxZCi1SYWWG8HIBCMMk5_A8cgEIwyTn8D7kRdaoYgOXlryAB-ZGCDBu5FUkWYyMR00ChEV3ZSJwY&_nc_ohc=40cpaZ9j7UYAX8zPSp-&_nc_ht=scontent.fdac14-1.fna&oh=6520360e83f3fbc767572605896e3095&oe=604082B3',
				'https://scontent.fdac14-1.fna.fbcdn.net/v/t31.0-8/13246255_1715373212063944_1159802925668246254_o.jpg?_nc_cat=101&ccb=2&_nc_sid=19026a&_nc_eui2=AeG50cI_kp3I9LPM03xzgaoTmj0vv5JyICiaPS-_knIgKMkIUImHvCdlZn0KFw4Gup51j7EXZ7S7GSwS5AyOzh1M&_nc_ohc=mksEsS3WKWUAX98f-gV&_nc_ht=scontent.fdac14-1.fna&oh=0f42d209172f2bfbf794b7f3c20982e9&oe=603FBA79',
				'https://scontent.fdac14-1.fna.fbcdn.net/v/t31.0-8/13063420_1701860516748547_6274681793074074535_o.jpg?_nc_cat=107&ccb=2&_nc_sid=19026a&_nc_eui2=AeFRSmuEhIdUX1elXsnz20e0RAOvcg1yAONEA69yDXIA4-Wq64MMJ1_KOKur6LjuuXFgPHM2DpKI8y49JbFRHwro&_nc_ohc=c1Dy7PkAxIUAX-7ryMy&_nc_oc=AQnLd0o1T5IuorDHUX6fMwE_O-E6rrUQbcIrWuVJHElMfGUDt6TgdqvFzfD9jpr82W4&_nc_ht=scontent.fdac14-1.fna&oh=497a3d8d7cc29566831c3fe91d554176&oe=603F83B9',
				'https://scontent.fdac14-1.fna.fbcdn.net/v/t31.0-8/12983903_1697814663819799_3707848491318017444_o.jpg?_nc_cat=102&ccb=2&_nc_sid=19026a&_nc_eui2=AeELK4EcP6Qmd43pCp6XC1VHzGXsA58CAdrMZewDnwIB2h-7HnwXqN9_A2sEcVfaRtvixMx9_rvMroofHDSmo4YZ&_nc_ohc=yZiyDs0cfpkAX_jtNHN&_nc_ht=scontent.fdac14-1.fna&oh=7993a99b984bca67fc35cdce7769d0c3&oe=6040D2B3',
				'https://scontent.fdac14-1.fna.fbcdn.net/v/t31.0-8/12983903_1697814663819799_3707848491318017444_o.jpg?_nc_cat=102&ccb=2&_nc_sid=19026a&_nc_eui2=AeELK4EcP6Qmd43pCp6XC1VHzGXsA58CAdrMZewDnwIB2h-7HnwXqN9_A2sEcVfaRtvixMx9_rvMroofHDSmo4YZ&_nc_ohc=yZiyDs0cfpkAX_jtNHN&_nc_ht=scontent.fdac14-1.fna&oh=7993a99b984bca67fc35cdce7769d0c3&oe=6040D2B3',

			]
		}
	},
	mounted() {
		let imagesEl = this.$refs.images.querySelectorAll('img')
		this.imagesLength = imagesEl.length;
		this.loadImages(Array.from(imagesEl))
	},
	methods: {
		async loadImages(imgs) {
			this.items = await Promise.all(imgs.map(
				img => new Promise(resolve => {
					let image = new Image();
					image.onload = () => resolve({
						type: "image", value: img,
						options: this.options,
					})
					image.src = img.src
				})
			))
			this.initSlider();
			this.initEvents();
			this.nextInterval = setInterval(() => {
				this.changeImage()
			}, 6000)
		},
		updateIndex({ reverse = false }) {
			this.currentIndex = reverse
				? (this.currentIndex < this.imagesLength - 1
					? this.currentIndex + 1
					: 0)
				: (this.currentIndex > 0
					? this.currentIndex - 1
					: this.imagesLength - 1)

		},
		changeImage({ prev } = { prev: false }) {
			this.hidePieces();
			this.updateIndex({ reverse: prev })
			this.showPieces();
		},
		hidePieces() {
			this.pieces.hidePieces({
				items: [
					this.currentIndex
				],
			});
		},
		animatePiece(el, config) {
			anime({
				...config,
				targets: el,
				duration: 2000,
				easing: "linear",
				loop: true,
			});
		},
		onUpdatePiece(anim) {
			if (anim.progress < 60) return
			let piece = anim.animatables[0].target;
			let ty = piece.ty;
			anime.remove(piece);
			this.animatePiece(piece, {
				ty: piece.h_ty < 300
					? [
						{ value: ty + 10, duration: 1000 },
						{ value: ty - 10, duration: 2000 },
						{ value: ty, duration: 1000 },
					]
					: [
						{ value: ty - 10, duration: 1000 },
						{ value: ty + 10, duration: 2000 },
						{ value: ty, duration: 1000 },
					]
			})

		},
		showPieces() {
			this.pieces.showPieces({
				singly: true,
				ignore: ["tx"],
				items: this.currentIndex,
				update: this.onUpdatePiece
			});
		},
		initSlider() {
			if (this.pieces) { this.pieces.stop(); }
			this.pieces = new Pieces({
				canvas: this.$refs.canvas,
				items: this.items,
				x: "centerAll",
				y: "centerAll",
				piecesSpacing: 2,
				animation: {
					easing: "easeOutQuint",
					duration: () => Pieces.random(1000, 2000),
				},
			});
			this.showPieces();
		},
		onResizeEnd() {
			this.initial = true;
			this.initSlider();
			this.hideTimer = setTimeout(() =>
				(this.isCanvasHidden = false), 500
			);
		},
		onResize() {
			if (this.initial) {
				this.initial = false;
				if (this.hideTimer) clearTimeout(this.hideTimer);
				this.isCanvasHidden = true
			}
			if (this.resizeTimer) clearTimeout(this.resizeTimer);
			this.resizeTimer = setTimeout(this.onResizeEnd, 300);
		},
		onKeyDown({ keyCode }) {
			if (![37, 39].includes(keyCode)) return
			this.changeImage({ prev: keyCode === 37 })
		},
		initEvents() {
			document.addEventListener("keydown", this.onKeyDown);
			window.addEventListener("resize", this.onResize);
		}
	},
	onDestroy() {
		if (this.nextInterval)
			clearInterval(this.nextInterval)
	}
}
</script>