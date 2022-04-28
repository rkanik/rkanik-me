// Vue
import TImage from "@/components/custom/TImage.vue";
import TIconButton from "@/components/custom/TIconButton.vue";

// TS
import Flex from "@/components/utils/Flex";
import Container from "@/components/utils/Container";
// import { registerComponents } from "vuelpers";

export default {
	register(Vue: any) {
		// registerComponents(
		// 	require.context("./components", true, /Base[A-Z]\w+\.(vue|js|ts)$/),
		// 	Vue
		// );

		Vue.component(TImage.name, TImage);
		Vue.component(TIconButton.name, TIconButton);

		Vue.component("Flex", Flex);
		Vue.component("Container", Container);
	}
};
