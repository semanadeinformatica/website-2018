<template>
  <section class="mt-5">
    <h2 class="container text-lowercase">speaker</h2>
    <div class="section-header-divider"></div>

    <div class="container">

      <div class="row">
        <div class="col-lg-3 my-4 pr-4">
            <img src="https://via.placeholder.com/900x900" class="img-fluid">
        </div>
        <div class="col-lg-9 p-4">
          <div class="text-lowercase">
              <h1> {{ talk.speaker }} </h1>
              <h4 class="body-style"> {{ talk.occupation }} </h4>
              <h4 class="body-style"> {{ talk.workplace }} </h4>
          </div>

          <p class="lead mt-4">{{ talk.bio }}</p>

          <div class="text-lowercase">
              <h1> {{ talk.title }} </h1>
              <h4 class="body-style"> {{ talk.day }}, {{ talk.time }}, room {{ talk.place }}. </h4>
          </div>

          <nuxtent-body class="mt-4 lead" :body="talk.body" />
      </div>
  </div>

</div>
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