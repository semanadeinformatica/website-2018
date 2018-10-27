<template>
	<section class="mt-5">
		<h2 class="container text-lowercase">Competição de Programação</h2>
		<div class="section-header-divider"></div>

		<div class="container mt-5 text-justified">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<p class="lead">
						A semana de informática irá contar com uma Competição de Programação a realizar-se durante os primeiros 3 dias do evento.
					</p> 

					<p class="lead mt-3">
						Todos os dias serão lançados 2 exercícios de programação de dificuldade crescente, ou seja, 6 ao todo.
					</p>

					<p class="lead mt-3">
						A participação é individual e os vencedores serão divulgados na quinta feira (dia 1).
					</p>

					<h4 class="mt-3">
						Os prémios para os vencedores são:
					</h4>

					

					<div class="row mt-4">
						<div class="offset-lg-2 col-lg-8">
							<img class="img-fluid my-2" src="~/assets/img/prizes.png" />

							<p>
								<i>Informações de inscrição serão divulgadas na sessão de abertura.</i>
							</p>
						</div>
					</div>

					<div class="row offset-lg-3">
						<p class="lead mt-3">
							<ol class="no-bullets">
								<li>1ª posição: Headphones Bluetooth Sony WH-1000XM2 </li>
								<li>2ª posição: Monitor LG 24GM79G-B 144Hz </li>
								<li>3ª posição: Raspberry Pi </li>
							</ol>
						</p>
					</div>

				</div>
			</div>

		</div>

	</section>
</template>

<script>
	export default {

		name: 'Competicao',

		layout: 'navbar',

		head () {
			return {
				title: "competição de programação | semana de informática",
			}
		},

	}
</script>

<style lang="scss" scoped>
	.no-bullets li {
		list-style-type: none;
		margin-top: 1em;
	}

</style>