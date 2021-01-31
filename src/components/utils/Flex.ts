import Vue, { VNode, CreateElement } from 'vue'
export default Vue.extend({
	name: "Flex",
	props: {

		// breakpont
		on: {
			type: [String, Boolean],
			default: false,
		},

		// Router link
		to: {
			type: [String, Boolean],
			default: false
		},

		// Center
		center: Boolean,

		// Start align-items
		itemsEnd: Boolean,
		itemsStart: Boolean,
		itemsCenter: Boolean,
		itemsStretch: Boolean,
		// shorthands
		ic: Boolean,
		ie: Boolean,
		ist: Boolean,
		isr: Boolean,
		// End align-items

		// Start justify-content
		justifyStart: Boolean,
		justifyCenter: Boolean,
		justifyBetween: Boolean,
		justifyEnd: Boolean,
		// shorthands
		js: Boolean,
		jc: Boolean,
		jb: Boolean,
		je: Boolean,
		// End justify-content

		// Start flex-direction
		flexCol: Boolean,
		flexRow: Boolean,
		flexColReverse: Boolean,
		flexRowReverse: Boolean,
		// shorthands
		fr: Boolean,
		fc: Boolean,
		fcr: Boolean,
		frr: Boolean,
		// End flex-direction
	},
	computed: {
		classes() {
			return {
				'flex': !this.on,
				[`${this.on}:flex`]: this.on,
				// Alignment
				'items-end': this.itemsEnd || this.ie,
				'items-center': this.itemsCenter || this.ic,
				'items-stretch': this.itemsStretch || this.isr,
				'items-start': this.itemsStretch || this.ist,
				// Justify
				'justify-end': this.justifyEnd || this.je,
				'justify-start': this.justifyEnd || this.js,
				'justify-center': this.justifyCenter || this.jc,
				'justify-between': this.justifyBetween || this.jb,
				// Direction
				'flex-row': this.flexRow || this.fr,
				'flex-col': this.flexCol || this.fc,
				'flex-row-reverse': this.flexRowReverse || this.frr,
				'flex-col-reverse': this.flexColReverse || this.fcr,
				// Center
				'items-center justify-center': this.center,
				// Others
				'cursor-pointer': this.to
			}
		}
	},
	methods: {
		onClick(event: MouseEvent) {
			// @ts-ignore
			if (this.to) this.$router.push(this.to)
			else this.$emit('click', event)
		}
	},
	render(create: CreateElement): VNode {
		return create('div', {
			// @ts-ignore
			class: this.classes,
			on: {
				click: this.onClick
			}
		},
			// @ts-ignore
			this.$slots.default
		)
	}
})
