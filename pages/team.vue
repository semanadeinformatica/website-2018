<template>
	<section class="mt-5">
		<h2 class="container text-lowercase">Team</h2>
		<div class="section-header-divider"></div>

		<div class="container mt-5">
			<div class="row">
				<div v-for='member in team' :key='member.title' class="col-md-6 col-lg-3 text-lowercase">
					<div class="m-3">
						<img src="https://via.placeholder.com/500x500" class="mb-2 img-fluid">
						<h3>{{ member.title }}</h3>
						<p class="lead">{{ member.role }} </p>
					</div>
				</div>
			</div>
		</div>

	</section>
</template>

<script>
export default {

  name: 'Team',

  layout: 'navbar',

  head () {
	return {
		title: "team | semana de informática",
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

<style lang="css" scoped>
</style>