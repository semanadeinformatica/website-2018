<template>
	<section class="container">
			<div class="h-100 d-flex flex-column flex-lg-row justify-content-around justify-content-lg-between align-items-center">

			<div class="mt-5 square square-1">
				<div class="square square-2">
				</div>
			</div>

				<div class="text-center mt-2">
					<h1 class="display-3">semana de informática</h1>
					<p class="display-4 mt-5">29 outubro - 1 novembro 2018 <br>
					faculdade de engenharia da universidade do porto</p>

					<h2 class="mt-5">coming soon...</h2>
				</div>

				<div class="mt-2 square square-3">
					<div class="square square-4">
					</div>
				</div>
			</div>
	</section>
</template>

<script>
export default {

  name: 'Landing',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>

@media (min-width: 961px) {
	section {
		height: 100%;
	}
}

.square {
	width: 100%;
	max-width: 150px;
	max-height: 150px;
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

	@media (min-width: 961px) {
		top: -15em;
	}
}

.square-2 {
	background-color: white;
	position: absolute;
	bottom: 3em;
	left: 3em;
}

.square-3 {
	border-style: solid;
	border-width: 0.4em;
	border-color: white;
	position: relative;
	top: 3em;

	@media (min-width: 961px) {
		top: 12em;
	}
}

.square-4 {
	background-color: #da291c;
	position: absolute;
	bottom: 3em;
	left: 3em;
}

</style>