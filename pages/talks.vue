<template>
	<div>
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
		<nuxt-child/>

		<div class="pre-footer"></div>
	</div>
</template>

<script>
export default {

  name: 'Talks',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>