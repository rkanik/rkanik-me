// Vue
import TImage from '@/components/custom/TImage.vue'
import TIconButton from '@/components/custom/TIconButton.vue'

// TS
import Flex from '@/components/utils/Flex'
import Container from '@/components/utils/Container'

export default {
	register(Vue: any) {
		Vue.component(TImage.name, TImage)
		Vue.component(TIconButton.name, TIconButton)

		Vue.component('Flex', Flex)
		Vue.component('Container', Container)
	}
}
