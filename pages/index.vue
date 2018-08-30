<template>
	<section>

		<div class="jumbotron">
			<div class="container">
					<div class="text-center mt-2">
					<h1 class="display-3">semana de informática</h1>
					<p class="display-4 mt-5">29 outubro - 1 novembro 2018 <br>
					faculdade de engenharia da universidade do porto</p>

				</div>
			</div>
		</div>

		<nav class="navbar bottom navbar-expand-sm navbar-light bg-light">
			<div class="container">

				<a class="navbar-brand" href="#">
					<img src="~/assets/img/logo.png" height="75px" width="75px" alt="semana de informatica logo">
				</a>

				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="#">Disabled</a>
						</li>
						<li class="nav-item dropup">
							<a class="nav-link dropdown-toggle" href="https://getbootstrap.com" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropup</a>
							<div class="dropdown-menu" aria-labelledby="dropdown10">
								<a class="dropdown-item" href="#">Action</a>
								<a class="dropdown-item" href="#">Another action</a>
								<a class="dropdown-item" href="#">Something else here</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</section>
</template>

<script>
	export default {

		name: 'Index',

		data () {
			return {

			}
		}
	}
</script>

<style lang="css" scoped>
</style>