<template>
	<section class="mt-5">
		<h2 class="container text-lowercase">Team</h2>
		<div class="section-header-divider"></div>

		<div class="container mt-5">
			<div class="row">
				<div v-for='member in team' :key='member.title' class="col-lg text-lowercase">
					<img src="https://via.placeholder.com/250x250" class="my-2">
					<h3>{{ member.title }}</h3>
					<p class="lead">{{ member.role }} </p>
				</div>
			</div>
		</div>

	</section>
</template>

<script>
export default {

  name: 'Team',

  layout: 'navbar',

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