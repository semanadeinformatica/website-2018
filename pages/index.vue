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
							<p class="display-4 mt-5">29 outubro - 1 novembro 2018</p>
								<p class="display-4">
							faculdade de engenharia da universidade do porto</p>

						</div>
					</div>
				</div>
			</div>
		</section>

		<nav class="navbar navbar-expand-sm navbar-light bg-light sticky">
			<div class="container">

				<a class="navbar-brand" href="/">
					<img src="~/assets/img/logo.png" height="64px" width="64px" alt="semana de informatica logo">
				</a>

				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav ml-auto text-lowercase navbar-list">
						<li class="nav-item">
							<h4>
								<a class="nav-link" href="/#sobre">Sobre</a> 
							</h4>
						</li>
						<li class="nav-item">
							<h4>
								<a class="nav-link" href="/programa">Programa</a>
							</h4>
						</li>
						<li class="nav-item">
							<h4>
								<a class="nav-link" href="/#speakers">Speakers</a>
							</h4>
						</li>
						<li class="nav-item">
							<h4>
								<a class="nav-link" href="/equipa">equipa</a>
							</h4>
						</li>
						<li class="nav-item">
							<h4>
								<a class="nav-link" href="">Bilhetes</a>
							</h4>
						</li>
						<li class="nav-item">
							<h4>
								<a class="nav-link" href="/#contacto">Contactos </a>
							</h4>
						</li>
					</ul>
				</div>
			</div>
		</nav>


		<section id="sobre" class="mt-5">
			<h2 class="container text-lowercase">semana de informática</h2>
			<div class="section-header-divider"></div>

			<div class="container mt-5 d-flex flex-wrap flex-lg-nowrap">
				<div class="flex-fill">
					<p class="lead">
						A semana de informática (SINF) é um evento que pretende oferecer aos estudantes de cursos relacionados com informática um evento que promove a aprendizagem de diferentes tópicos das diversas áreas da informática, o convívio através de eventos sociais  e o contacto com o mundo empresarial.
					</p>
					<p class="lead">

						O evento decorre entre os dias 29 de outubro e 1 de novembro de 2018, na Faculdade de Engenharia da Universidade do Porto e é organizado pelo Núcleo de Informática da Associação de Estudantes da Faculdade de Engenharia da Universidade do Porto (NIAEFEUP).
					</p>

					<p class="lead">
						Durante a SINF os estudantes poderão participar em palestras, workshops e sessões de convívio e networking, contactando assim com áreas e aspectos, quer de carácter técnico ou soft skills, que não são abrangidos no seu percurso académico.
					</p>
				</div>
					<div class="mx-5 mt-5 square square-1">
						<div class="square square-2 d-flex justify-content-center align-items-center">
							<h4 class="text-dark">
									sobre
							</h4>
						</div>
					</div>
			</div>
		</section>

		<section id="speakers" class="mt-5">
			<h2 class="container text-lowercase">Speakers</h2>
			<div class="section-header-divider"></div>

			<div class="container mt-5">

				<div class="row">	
					<div v-for='talk in contentPreview' :key='talk.title' class="col-md-6 col-lg-3 text-lowercase">
						<div class="m-2">
							<nuxt-link :to='talk.path'>
							<img src="https://via.placeholder.com/500x500" class="my-2 img-fluid">
							<h3>{{ talk.speaker }}</h3>
							<p class="lead">{{ talk.occupation }} @ {{ talk.workplace }}</p>
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div id="contactos" class="mt-5 mb-3">
			<div class="pre-footer"></div>
			<h2 class="container text-lowercase">Contactos</h2>
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

main {
}

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

	.video-container {
		height: 50em;
	}
}

.video-container {
	position: relative;
	overflow: hidden;
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

.z-max {
	z-index: 10000;
}

</style>