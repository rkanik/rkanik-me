import Flex from '@/components/utils/Flex.vue'
import TImage from '@/components/custom/TImage.vue'
import TIconButton from '@/components/custom/TIconButton.vue'

export default {
	register(Vue: any) {
		Vue.component(Flex.name, Flex)
		Vue.component(TImage.name, TImage)
		Vue.component(TIconButton.name, TIconButton)
	}
}
