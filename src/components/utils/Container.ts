import Vue, { VNode, CreateElement } from 'vue'
export default Vue.extend({
	name: "Container",
	render(create: CreateElement): VNode {
		return create('div', {
			staticClass: 'container mx-auto',
		}, this.$slots.default)
	}
})
