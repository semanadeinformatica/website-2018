<template>
	<section class="mt-5">
		<h2 class="container text-lowercase">Program</h2>
		<div class="section-header-divider"></div>

		<div class="container mt-5">
			<div class="row">
				<div class="offset-lg-2 col-lg-8">
					<table class="table table-borderless text-lowercase">
						<thead>
							<tr>
								<th scope="col">time</th>
								<th scope="col"></th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">14h00</th>
								<td rowspan="2">
									<div class="event">
										<div>
											<h4>Opening Cerimony</h4>
											<span>what</span><br>
											<span>what</span>
										</div>
									</div>
								</td>
								<td rowspan="2">
									<div class="event">
										<div>
											<h4>Opening Cerimony</h4>
											<span>what</span><br>
											<span>what</span>
										</div>
									</div>
								</td>
							</tr>
								<tr>
								<th scope="row">14h30</th>
							</tr>
							<tr>
								<th scope="row">15h00</th>
								<td></td>
								<td rowspan="2">
									<div class="talk">
										<div>
											<h4>talk de cenas</h4>
											<span>what</span><br>
											<span>what</span>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">15h30</th>
							</tr>
							<tr>
								<th scope="row">16h00</th>
								<td></td>
							</tr>
							<tr>
								<th scope="row">16h30</th>
								<td></td>
							</tr>

							<tr>
								<th scope="row">17h00</th>
								<td rowspan="2">
									<div class="talk">
										<div>
											<h4>workshop de cenas</h4>
											<span>what</span><br>
											<span>what</span>
										</div>
									</div>
								</td>
								<td></td>
							</tr>

							<tr>
								<th scope="row">17h30</th>
								<td></td>
							</tr>
							<tr>
								<th scope="row">18h00</th>
								<td rowspan="2">
									<div class="event">
										<div>
											<h4>workshop de cenas</h4>
											<span>what</span><br>
											<span>what</span>
										</div>
									</div>
								</td>
								<td></td>
							</tr>

							<tr>
								<th scope="row">18h30</th>
								<td></td>
							</tr>

							<tr>
								<th scope="row">19h00</th>
							</tr>

						</tbody>
					</table>

				</div>
			</div>
		</div>

	</section>
</template>

<script>
	export default {

		name: 'Program',

		layout: 'navbar',

		head () {
			return {
				title: "program | semana de informática",
			}
		},


		async asyncData({ app }) {
			return {
				team: await app.$content("/team")
				.getAll()
			}},

			data () {
				return {

				}
			}
		}
	</script>

	<style lang="scss" scoped>
	.table {
		tr, td, th {
		}
		font-size: 1.25rem;

		tr th:first-child {
			width: 5em;
		}	

		tr {
			height: 3em;
		}

		td {
			max-width: 5em;
		}

		.talk {
			background-color: white;
			color: black;
			margin: -0.25em;
			div {
				padding: 0.5em;
			}
		}

		.event {
			background-color: #DA291C;
			margin: -0.25em;
			div {
				padding: 0.5em;
			}
		}
	}

</style>