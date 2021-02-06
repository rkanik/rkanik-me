<template>
	<div>
		<div id="yt-player" />
		<div
			v-if="!isReady"
			class="yt-bg-primary"
			:style="`height:${size.height}px;width:${size.width}px`"
		></div>
	</div>
</template>

<script>
export default {
	name: 'YTPlayer',
	props: {
		videoId: {
			type: String,
			required: true
		},
		size: {
			height: {
				default: 600,
				type: [Number, String]
			},
			width: {
				default: 1080,
				type: [Number, String]
			}
		}
	},
	data() {
		return {
			scriptSrc: "https://www.youtube.com/iframe_api",
			scriptId: 'yt-iframe-player-api',
			player: null,
			iframe: null,
			isReady: false
		}
	},
	created() {
		window.onbeforeunload = this.beforeReload
	},
	watch: {
		videoId(videoId) {
			this.player.loadVideoById({ videoId })
		},
		size({ width, height }) {
			if (!this.iframe) return
			this.iframe.width = width
			this.iframe.height = height
		}
	},
	mounted() {
		if (window.YT) { this.initializePlayer() }
		else {
			this.injectScript()
			window.onYouTubeIframeAPIReady = this.initializePlayer
		}
	},
	methods: {
		play() { this.player.playVideo() },
		pause() { this.player.pauseVideo() },
		onStateChange(e) { this.$emit('stateChange', e) },
		seekToWhereWas() {
			let YTPlayer = localStorage.getItem('YTPlayer')
			if (YTPlayer) {
				let player = JSON.parse(YTPlayer)
				if (player.currentTime && player.id) {
					(player.id === this.videoId) && this.player.seekTo(player.currentTime)
				}
			}
		},
		onReady(e) {
			this.$emit('ready', e)
			this.seekToWhereWas()
			this.play()
		},
		beforeReload() {
			localStorage.setItem('YTPlayer', JSON.stringify({
				id: this.videoId,
				currentTime: this.player.getCurrentTime()
			}))
		},
		async initializePlayer() {
			this.player = await new YT.Player('yt-player', {
				...this.size,
				videoId: this.videoId,
				events: {
					'onReady': this.onReady,
					'onStateChange': this.onStateChange
				}
			});
			this.isReady = true
			this.iframe = document.getElementById('yt-player')
		},
		injectScript() {
			if (document.getElementById(this.scriptId)) {
				return this.initializePlayer()
			}
			let script = document.createElement('script');
			script.id = this.scriptId
			script.src = this.scriptSrc;
			let firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
		},
	},
}
</script>
