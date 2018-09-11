<template>
	<ul>
		<li v-for='info in contentPreview' :key='info.title'>{{ info.title }} </li>
	</ul>
</template>

<script>
export default {

  name: 'TestContent',

  async asyncData ({ app }) {
    return {
      contentPreview: await app.$content('/')
      .query({ exclude: ['body'] })
      .getAll()
    }
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>