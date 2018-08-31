<template>
	<section>

		<div class="my-5">
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

<style lang="scss" scoped>
	.navbar-list > li {
		margin-right: 1.5em;
	}
</style>