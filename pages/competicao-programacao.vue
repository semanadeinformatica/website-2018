<template>
	<section class="mt-5">
		<h2 class="container text-lowercase">Competição de Programação</h2>
		<div class="section-header-divider"></div>

		<div class="container mt-5 text-justified">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<p class="lead">
						A semana de informática irá contar com uma Competição de Programação a realizar-se durante todos os dias evento.
					</p> 

					<p class="lead mt-3">
						Serão lançados dois exercícios por dia nos primeiros três dias, de dificuldade crescente. 
					</p>

					<p class="lead mt-3">
						A participação é individual, estará aberta a partir da sessão de abertura, dia 29 de Outubro (segunda-feira), até às 14h00 de 1 de Novembro (quinta-feira), e os vencedores serão anunciados na cerimónia de encerramento.
					</p>

					<p class="lead mt-3">
						A competição decorrá online no HackerRank, onde serão utilizados mecanismos anti-cópia para detetar infracções.
					</p>

					<div>
						<h4><a class="btn btn-lg btn-primary" href="https://www.hackerrank.com/sinf">Inscrições</a></h4>
					</div>

					<h4 class="mt-5">
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