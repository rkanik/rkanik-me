import Vue, { VNode, CreateElement } from 'vue'
export default Vue.extend({
	name: "Container",
	props: {
		tag: {
			type: String,
			default: 'div'
		}
	},
	render(create: CreateElement): VNode {
		return create(this.tag, {
			staticClass: 'container mx-auto',
		}, this.$slots.default)
	}
})
