<template>
	<section class="h-100 container">
			<div class="h-100 d-flex flex-column flex-lg-row justify-content-around justify-content-lg-between align-items-center">

				<div>
					<div class="square square-1">
						<div class="square square-2">
						</div>
					</div>
				</div>

				<div class="text-center">
					<h1 class="display-3">semana de informática</h1>
					<br>
					<p class="display-4">29 outubro - 1 novembro 2018 <br>
					faculdade de engenharia da universidade do porto</p>
				</div>

				<div class="">
					<div class="square square-3">
						<div class="square square-4">
						</div>
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
.square {
	width: 100%;
	min-width: 150px;
	max-width: 172px;
	max-height: 172px;
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
	top: 3em;
	right: 3em;

	@media (min-width: 961px) {
		top: -8em;
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