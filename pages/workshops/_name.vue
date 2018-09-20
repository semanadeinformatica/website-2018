<template>
  <section class="mt-5">
    <h2 class="container text-lowercase">workshop</h2>
    <div class="section-header-divider"></div>

    <div class="container">

      <div class="row">
        <div class="col-lg-3 my-4 pr-4">
            <img src="https://via.placeholder.com/900x900" class="img-fluid">
        </div>
        <div class="col-lg-9 p-4">
          <div class="text-lowercase">
              <h1> {{ workshop.speaker }} </h1>
              <h4 class="body-style"> {{ workshop.occupation }} </h4>
              <h4 class="body-style"> {{ workshop.workplace }} </h4>
          </div>

          <p class="lead mt-4">{{ workshop.bio }}</p>

          <div class="text-lowercase">
              <h1> {{ workshop.title }} </h1>
              <h4 class="body-style"> {{ workshop.day }}, {{ workshop.time }}, room {{ workshop.place }}. </h4>
          </div>

          <nuxtent-body class="mt-4 lead" :body="workshop.body" />
      </div>
  </div>

</div>
</section>
</template>

<script>
    export default {

    head () {
        return {
            title: this.workshop.title + " | SINF",
        }
    },

     async asyncData({ app, route }) {
      return {
        workshop: await app.$content("/").get(route.path)
    }
},

name: 'Workshop',

data () {
    return {

    }
}
}
</script>

<style lang="css" scoped>
</style>