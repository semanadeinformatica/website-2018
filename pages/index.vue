<template>
	<main>
		<section>

			<div class="video-container">
				<video playsinline autoplay muted loop poster="/banner.jpeg">
						<source src="~/assets/video/banner.mp4" type="video/mp4">
							Your browser does not support the video tag.
				</video>
				<div class="header-text">
					<div class="container">
						<div class="text-center">
							<h1 class="display-3">semana de informática</h1>
							<p class="display-4 mt-5">29 outubro - 1 novembro 2018 <br>
							faculdade de engenharia da universidade do porto</p>

						</div>
					</div>
				</div>
			</div>
		</section>

			<nav class="navbar navbar-expand-sm navbar-light bg-light sticky">
				<div class="container">

					<a class="navbar-brand" href="#">
						<img src="~/assets/img/logo.png" height="64px" width="64px" alt="semana de informatica logo">
					</a>

					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarCollapse">
						<ul class="navbar-nav ml-auto text-lowercase navbar-list">
							<li class="nav-item">
								<h4>
									<a class="nav-link" href="#">About</a> 
								</h4>
							</li>
							<li class="nav-item">
								<h4>
									<a class="nav-link" href="#">Program</a>
								</h4>
							</li>
							<li class="nav-item">
								<h4>
									<a class="nav-link" href="#">Speakers</a>
								</h4>
							</li>
							<li class="nav-item">
								<h4>
									<a class="nav-link" href="#">Tickets</a>
								</h4>
							</li>
							<li class="nav-item">
								<h4>
									<a class="nav-link" href="#">Contact Us</a>
								</h4>
							</li>
						</ul>
					</div>
				</div>
			</nav>

		<section id="about" class="mt-5">
			<h2 class="container text-lowercase">About</h2>
			<div class="section-header-divider"></div>

			<div class="container mt-5 d-flex flex-wrap flex-lg-nowrap">
				<div class="flex-fill">
					<p class="lead">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque quam vel blandit pretium. Duis augue purus, porta in neque posuere, malesuada laoreet nunc. Etiam euismod quam nisi, a vehicula orci mollis eu. Suspendisse purus enim, congue in semper non, semper eget enim. Fusce suscipit, ligula in pharetra aliquam, eros massa venenatis eros, ac tincidunt velit tortor at diam. Quisque elementum eleifend blandit. In ut tortor eget nisi tincidunt blandit. Ut nibh leo, ultrices eu eros gravida, tristique finibus sapien. Phasellus est erat, tincidunt sed nibh sit amet, faucibus suscipit diam.
					</p>
				</div>
					<div class="mx-5 mt-5 square square-1">
						<div class="square square-2 d-flex justify-content-center align-items-center">
							<a href=""><h4 class="text-dark">meet the team</h4></a>
						</div>
					</div>
			</div>
		</section>

		<section id="speakers" class="mt-5">
			<h2 class="container text-lowercase">Speakers</h2>
			<div class="section-header-divider"></div>

			<div class="container mt-5 d-flex flex-wrap speakers-list">

				<div v-for='talk in contentPreview' :key='talk.name' class="text-lowercase">
					<img src="https://via.placeholder.com/200x200" class="my-2">
					<h3>{{ talk.speaker }}</h3>
					<p class="lead">{{ talk.occupation }} @ {{ talk.workplace }}</p>
				</div>
				<div class="text-lowercase">
					<img src="https://via.placeholder.com/200x200" class="my-2">
					<h3>John Doe</h3>
					<p class="lead">occupation @ place</p>
				</div>
				<div class="text-lowercase">
					<img src="https://via.placeholder.com/200x200" class="my-2">
					<h3>John Doe</h3>
					<p class="lead">occupation @ place</p>
				</div>
				<div class="text-lowercase">
					<img src="https://via.placeholder.com/200x200" class="my-2">
					<h3>John Doe</h3>
					<p class="lead">occupation @ place</p>
				</div>
				<div class="text-lowercase">
					<img src="https://via.placeholder.com/200x200" class="my-2">
					<h3>John Doe</h3>
					<p class="lead">occupation @ place</p>
				</div>
				<div class="text-lowercase">
					<img src="https://via.placeholder.com/200x200" class="my-2">
					<h3>John Doe</h3>
					<p class="lead">occupation @ place</p>
				</div>
				<div class="text-lowercase">
					<img src="https://via.placeholder.com/200x200" class="my-2">
					<h3>John Doe</h3>
					<p class="lead">occupation @ place</p>
				</div>
				<div class="text-lowercase">
					<img src="https://via.placeholder.com/200x200" class="my-2">
					<h3>John Doe</h3>
					<p class="lead">occupation @ place</p>
				</div>
				<div class="text-lowercase">
					<img src="https://via.placeholder.com/200x200" class="my-2">
					<h3>John Doe</h3>
					<p class="lead">occupation @ place</p>
				</div>
				<div class="text-lowercase">
					<img src="https://via.placeholder.com/200x200" class="my-2">
					<h3>John Doe</h3>
					<p class="lead">occupation @ place</p>
				</div>
			</div>
		</section>

		<div id="contact" class="mt-5 mb-3">
			<div class="pre-footer"></div>
			<h2 class="container text-lowercase">Contact Us</h2>
			<div class="section-header-divider"></div>

			<div class="container mt-3 d-flex flex-wrap white-anchors">
				<div class="d-flex flex-column">
					<span class="lead my-2"><i class="fas fa-envelope-square mr-2 fa-lg"></i> <a href="mailto:sinf.feup@gmail.com"> sinf.feup@gmail.com</a></span>
					<span class="lead my-2"><i class="fab fa-facebook-square mr-2 fa-lg"></i><a href="https://www.facebook.com/semanainformaticaFEUP/"> semanainformaticaFEUP</a></span>
					<span class="lead my-2"><i class="fab fa-linkedin mr-2 fa-lg"></i><a href="https://www.linkedin.com/company/semanainformaticafeup/"> semanainformaticaFEUP</a></span>
				</div>
				<div class="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
					<span class="lead my-2"><i class="fas fa-map-marker-alt mr-2 fa-lg"></i> faculdade de engenharia da universidade do porto</span>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default {

		name: 'Index',

		async asyncData ({ app }) {
			return {
				contentPreview: await app.$content('/talks')
				.query({ exclude: ['body'] })
				.getAll()
			}
		},

		data () {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>

.square {
	width: 100%;
	max-width: 250px;
	max-height: 250px;
	z-index: -100;
}

.square:after {
	content: "";
	display: block;
	padding-bottom: 100%;
}

.square-1 {
	border-style: solid;
	border-width: 0.4em;
	border-color: #da291c;
	position: relative;
}

.square-2 {
	background-color: white;
	position: absolute;
	bottom: 3em;
	left: 3em;
}

@media (min-width: 961px) {
	video {
		height: auto;
		vertical-align: middle;
		width: 100%;
	}
}

@media (max-width: 961px) {
	video {
		height: 100%;
		vertical-align: middle;
		width: auto;
	}
}

.video-container {
  position: relative;
}

.header-text {
	background: rgba(0,0,0,0.5);
	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}

.navbar-list > li {
	margin-right: 1.5em;
}

.sticky {
	position: sticky;
	bottom: 0;
	top: -1px;
}

.section-header-divider {
	background-color: #DA291C;
	width: 100%;
	height: 1em;
}

.speakers-list div {
	flex: 1 1 225px;
}

</style>