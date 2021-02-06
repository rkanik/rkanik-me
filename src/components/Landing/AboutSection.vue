<template>
	<section class="about relative" style="background-color: #101820">
		<Container>
			<Flex ic on="lg" class="h-screen relative">
				<div class="w-full relative profile max-w-xl" style="height: 75vh">
					<div
						class="profile__inner rounded-lg h-full overflow-hidden shadow-xl text-center"
					>
						<div class="profile__cover relative overflow-hidden">
							<PiecesSlider class="w-full" />
						</div>

						<div class="relative about__info-card z-20 pb-8 h-full">
							<div
								class="profile__thumbnail absolute left-1/2 transform -translate-x-1/2 -top-16 w-32 h-32 rounded-full p-1 border-4 z-10 border-gray-500"
							>
								<img
									src="https://scontent.fdac14-1.fna.fbcdn.net/v/t31.0-1/c443.225.298.298a/p720x720/22051104_1964480750486521_876468195963687844_o.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_eui2=AeHXQC_e6rOdgaxyxNDwAXNnT2goteICaXBPaCi14gJpcKXyBF6umM9Evr1qnIpbrzqZYZVdgtuFVBfqwlCF-8vb&_nc_ohc=gZdNWN7SGvwAX-b3K4-&_nc_ht=scontent.fdac14-1.fna&tp=27&oh=67ec9e4e719691bef9f04eb4b75dbc90&oe=60416EF7"
									alt="Profile Thumbail"
									class="rounded-full w-full h-full"
								/>
							</div>
							<div class="pt-20">
								<h2 class="text-3xl">RK Anik</h2>
								<p class="text-gray-400">Full Stack Developer</p>
							</div>
						</div>
					</div>
					<div
						class="profile__shadow2 shadow-lg h-24 rounded-xl absolute -bottom-6 transform left-1/2 -translate-x-1/2"
						style="width: 90%"
					/>
					<div
						class="profile__shadow1 shadow-lg h-24 rounded-xl absolute -bottom-3 transform left-1/2 -translate-x-1/2"
						style="width: 95%"
					/>
				</div>
				<div
					class="profile__content px-8 py-16 shadow-lg rounded-lg rounded-l-none text-gray-400 overflow-y-auto"
					style="max-height: 65vh"
				>
					<div>
						<h3 class="text-lg xl:text-2xl font-bold">About</h3>
						<p class="mt-4">
							I am very dedicated and passionate in programming. I can
							build website, web application, Restful API, Desktop
							application and Database design. I always write clean,
							reusable, maintainable, scalable code.I hold a Computer
							science engineering degree and 2+ year professional
							experience. I am expert in VueJS, NuxtJS, ReactJS,
							ElectronJS, NodeJS, ExpressJS, Firebase, MongoDB, SQL and
							so on.
						</p>
					</div>
					<div class="mt-12">
						<h3 class="text-lg xl:text-2xl font-bold">Experiences</h3>
						<div class="grid grid-cols-2 gap-8">
							<div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Iure distinctio quas accusamus id culpa cupiditate ut
								accusantium unde animi sunt quis ipsa consectetur natus
								possimus, eos libero facere cum laboriosam.
							</div>
							<div>
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Aliquid atque aliquam hic obcaecati non fugiat
								magnam, voluptate aspernatur. Temporibus molestiae
								inventore quo eos quam ad, ea est veniam totam neque!
							</div>
							<div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Iure distinctio quas accusamus id culpa cupiditate ut
								accusantium unde animi sunt quis ipsa consectetur natus
								possimus, eos libero facere cum laboriosam.
							</div>
							<div>
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Aliquid atque aliquam hic obcaecati non fugiat
								magnam, voluptate aspernatur. Temporibus molestiae
								inventore quo eos quam ad, ea est veniam totam neque!
							</div>
							<div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Iure distinctio quas accusamus id culpa cupiditate ut
								accusantium unde animi sunt quis ipsa consectetur natus
								possimus, eos libero facere cum laboriosam.
							</div>
							<div>
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Aliquid atque aliquam hic obcaecati non fugiat
								magnam, voluptate aspernatur. Temporibus molestiae
								inventore quo eos quam ad, ea est veniam totam neque!
							</div>
						</div>
					</div>
				</div>
			</Flex>
		</Container>
		<p class="absolute right-1 bottom-1 text-gray-700 text-sm">
			Inspired by
			<a
				target="_blank"
				class="text-yellow-800"
				href="https://ryancv.bslthemes.com/ve7/"
				>RyanCV</a
			>
		</p>
	</section>
</template>

<script>
import PiecesSlider from '@/components/Landing/PiecesSlider'
export default {
	name: "AboutSection",
	components: {
		PiecesSlider
	}
};
</script>
<style lang="scss" scoped>
	$bg-primary: #1e2b38;
	.about {
		&__info-card {
			background-color: $bg-primary;
		}
	}
	.profile {
		&__cover {
			z-index: 10;
			&::before,
			&::after {
				content: "";
				width: 100%;
				height: 4rem;
				bottom: -2rem;
				position: absolute;
				background: $bg-primary;
				z-index: 1;
			}
			&::before {
				left: -25%;
				transform: rotate(12deg);
			}
			&::after {
				right: -25%;
				transform: rotate(-12deg);
			}
		}
		&__shadow1 {
			background-color: #18242f;
		}
		&__shadow2 {
			background-color: #141e27;
		}
		&__content {
			background-color: #19242f;
			&::-webkit-scrollbar {
				width: 6px;
			}
			&::-webkit-scrollbar-thumb {
				border-radius: 2rem;
				background-color: rgba(white, 0.08);
				&:hover {
					background-color: rgba(white, 0.16);
				}
			}
		}
	}
</style>