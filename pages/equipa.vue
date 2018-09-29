<template>
	<section class="mt-5">
		<h2 class="container text-lowercase">Equipa</h2>
		<div class="section-header-divider"></div>

		<div class="container mt-5">
			<div class="row">
				<div v-for='member in sortedTeam' :key='member.index' class="col-md-6 col-lg-3 text-lowercase">
					<div class="m-3">
						<div class="image-container mb-2">
							<img :src='"~/assets/img/team/" + member.pic + ".jpg"' class="img-fluid">
							<div class="middle">
								<div class="text">
									<a class="m-2" :href='member.linkedin'><i class="fab fa-linkedin fa-3x"></i></a>

									<a class="m-2" :href='member.github'><i class="fab fa-github-square fa-3x"></i></a>
								</div>
							</div>
						</div>
						<h3>{{ member.title }}</h3>
						<p class="lead">{{ member.role }} </p>
					</div>
				</div>
			</div>
		</div>

	</section>
</template>

<script>
	export default {

		name: 'Equipa',

		layout: 'navbar',

		head () {
			return {
				title: "Equipa | semana de informática",
			}
		},


		async asyncData({ app }) {
			return {
				team: await app.$content("/team")
				.getAll()
			}},

			data () {
				return {

				}
			},

			computed: {
				sortedTeam: function () {
					return this.team.slice(0).sort((member1, member2) => {
						return member1.index - member2.index
					})
				}
		}
	}
	</script>

	<style lang="scss" scoped>
	.image-container {
		position: relative;
		overflow: hidden;

		&:hover img {
			filter: grayscale(100%) brightness(30%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8);

		}

		&:hover {
			border-style: solid;
			border-width: 0.25em;
			border-color: white;
			transition: .25s ease-in;
		}

		img {
			opacity: 1;
			display: block;
			width: 100%;
			height: auto;
			transition: .25s ease-in;
			backface-visibility: hidden;
			margin:-1px;
			padding:1px;
		}

		&:hover .middle {
			opacity: 1;
		}
	}

	.middle {
		transition: .5s ease;
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		text-align: center;
	}
</style>