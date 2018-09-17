<template>
  <section>
    <h1> Hello World {{ talk.title }} </h1>
    <nuxtent-body :body="talk.body" />
  </section>
</template>

<script>
export default {

 async asyncData({ app, route }) {
  return {
    talk: await app.$content("/").get(route.path)
  }
},

  name: 'Talk',


  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>