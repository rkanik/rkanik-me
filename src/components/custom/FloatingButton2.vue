<template>
	<div>
		<button
			@click="onClick"
			@mousedown="down"
			@touchstart="down"
			@mousemove="move"
			@touchmove="move"
			@mouseup="end"
			@touchend="end"
			ref="fu"
			class="float"
		>
			<TIconButton mdIcon="home" />
		</button>
	</div>
</template>
<script>
export default {
	name: '',
	data() {
		return {
			flags: false,//Control use
			position: {
				x: 0,
				y: 0
			},
			nx: '',
			ny: '',
			dx: '',
			dy: '',
			xPum: '',
			yPum: ''
		}
	},
	methods: {
		down() {
			this.flags = true;
			var touch;
			if (event.touches) {
				touch = event.touches[0];
			} else {
				touch = event;
			}
			this.position.x = touch.clientX;
			this.position.y = touch.clientY;
			this.dx = this.$refs.fu.offsetLeft;
			this.dy = this.$refs.fu.offsetTop;
		},
		move() {
			if (this.flags) {
				var touch;
				if (event.touches) {
					touch = event.touches[0];
				} else {
					touch = event;
				}
				this.nx = touch.clientX - this.position.x;
				this.ny = touch.clientY - this.position.y;
				this.xPum = this.dx + this.nx;
				this.yPum = this.dy + this.ny;
				let width = window.innerWidth - this.$refs.fu.offsetWidth//The width of the screen minus the width of its own controls
				let height = window.innerHeight - this.$refs.fu.offsetHeight//The height of the screen minus the height of its own controls
				this.xPum < 0 && (this.xPum = 0)
				this.yPum < 0 && (this.yPum = 0)
				this.xPum > width && (this.xPum = width)
				this.yPum > height && (this.yPum = height)
				// if (this.xPum >= 0 && this.yPum >= 0 && this.xPum<= width &&this.yPum<= height) {
				this.$refs.fu.style.left = this.xPum + 'px';
				this.$refs.fu.style.top = this.yPum + 'px';
				// }
				//Prevent page sliding default event
				document.addEventListener(
					'touchmove',
					function () {
						event.preventDefault();
					},
					false
				);
			}
		},
		//The function when the mouse is released
		end() {
			this.flags = false;
		},
		onClick() {
			//Here I am using it as a subcomponent
			this.$emit('click')
		}
	}
}
</script>

<style lang="scss" scoped>
	.float {
		position: absolute; // Locate
		right: 20px; // Initial x-axis position
		top: 60%; // Initial Y axis position
		touch-action: none; // This is the point. If the new version of Google is not added, the touch method will be ignored
		text-align: center;
		width: 48px;
		height: 48px;
		border-radius: 24px;
		line-height: 48px;
		background: rgba(95, 95, 105, 0.88);
		color: white;
	}
</style>
