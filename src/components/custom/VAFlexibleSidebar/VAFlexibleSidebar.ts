// Imports
import Vue, { VNode, CreateElement } from 'vue'

// Styles
import "./VAFlexibleSidebar.scss"

// Animejs
import anime from 'animejs'

export default Vue.extend({
	name: 'va-flexible-sidebar',
	props: {
		value: {
			type: Boolean,
			default: false
		}
	},
	data: () => ({ expanded: true }),
	created() { this.expanded = this.value },
	mounted() {
		// @ts-ignore
		if (this.expanded) this.$el.style.left = 0
		let toggler = this.$el.firstElementChild
		window.onmousemove = (e: MouseEvent) => {
			this.delay(100).then(() => {
				if (!toggler) return
				let left = this.expanded ? 256 : (e.x > 150 ? 200 + 40 : 224 + e.x)

				let rect = toggler.getBoundingClientRect()
				let isClose = Math.abs(rect.left - e.x) < 250 && Math.abs(rect.top - e.y) < 250

				//toggler.style.left = left + 'px';
				//toggler.style.top = e.y - 24 + 'px'
				//toggler.style.cssText += isClose ? 'width:4rem;height:4rem' : 'width:3rem;height:3rem'

				anime({
					targets: toggler,
					duration: 400,
					left, top: e.y - 24,
					scale: isClose ? 1.4 : 1,
					easing: 'easeOutExpo'
				})
			})
		}
	},
	watch: { value(val: boolean) { this.expanded = val } },
	methods: {
		onClickToggler() {
			anime({
				targets: this.$el,
				left: this.expanded ? [0, '-16rem'] : ['-16rem', 0],
				duration: 400,
				easing: 'easeInOutExpo'
			})
			this.expanded = !this.expanded
			this.$emit('input', this.expanded)
		},
		delay(ms: number) {
			return new Promise((resolve: any) => {
				setTimeout(() => resolve(), ms)
			})
		}
	},
	render(create: CreateElement): VNode {
		return create('div',
			{
				staticClass: 'va-flexible-sidebar',
				class: { expanded: this.expanded }
			},
			[
				create('div',
					{
						staticClass: 'va-flexible-sidebar-toggler',
						on: { click: this.onClickToggler }
					},
					[create('span', '<')]
				),
				create('div',
					{ staticClass: 'va-flexible-sidebar-content' },
					this.$slots.default
				),
			]
		)
	}
})
