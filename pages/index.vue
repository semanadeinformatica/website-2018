<template>
	<main>
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

			<nav class="navbar navbar-expand-sm navbar-light bg-light sticky">
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

		<section class="mt-5">
			<h2 class="container text-lowercase">About</h2>
			<div class="section-header-divider"></div>

			<div class="container mt-5 d-flex">
				<div>
					<p class="lead">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque quam vel blandit pretium. Duis augue purus, porta in neque posuere, malesuada laoreet nunc. Etiam euismod quam nisi, a vehicula orci mollis eu. Suspendisse purus enim, congue in semper non, semper eget enim. Fusce suscipit, ligula in pharetra aliquam, eros massa venenatis eros, ac tincidunt velit tortor at diam. Quisque elementum eleifend blandit. In ut tortor eget nisi tincidunt blandit. Ut nibh leo, ultrices eu eros gravida, tristique finibus sapien. Phasellus est erat, tincidunt sed nibh sit amet, faucibus suscipit diam.
					</p>
				</div>
				<div>
					<p class="lead">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque quam vel blandit pretium. Duis augue purus, porta in neque posuere, malesuada laoreet nunc. Etiam euismod quam nisi, a vehicula orci mollis eu. Suspendisse purus enim, congue in semper non, semper eget enim. Fusce suscipit, ligula in pharetra aliquam, eros massa venenatis eros, ac tincidunt velit tortor at diam. Quisque elementum eleifend blandit. In ut tortor eget nisi tincidunt blandit. Ut nibh leo, ultrices eu eros gravida, tristique finibus sapien. Phasellus est erat, tincidunt sed nibh sit amet, faucibus suscipit diam.
					</p>
				</div>
			</div>
		</section>
	</main>
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

.sticky {
	position: sticky;
	top: 0em;
}

.section-header-divider {
	background-color: #DA291C;
	width: 100%;
	height: 1em;
}
</style>