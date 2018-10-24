<template>
  <section class="mt-5">
    <h2 class="container text-lowercase">workshop</h2>
    <div class="section-header-divider"></div>

    <div class="container">

      <div class="row">
        <div class="col-lg-3 mt-5 mb-2 pr-4 d-flex flex-column">
          <div v-if='workshop.twoSpeakers' class="d-flex flex-md-column">
            <div>
              <img :src='"~/assets/img/speakers/" + workshop.img + ".jpg"' class="m-1 img-fluid">
            </div>
            <div>
              <img :src='"~/assets/img/speakers/" + workshop.img2 + ".jpg"' class="m-1 img-fluid">
            </div>
          </div>
          <div v-else>
            <img :src='"~/assets/img/speakers/" + workshop.img + ".jpg"' class="img-fluid">
          </div>

          <div class="ml-auto mt-2">
            <a class="ml-2" v-if='workshop.website' :href='workshop.website'><i class="fas fa-external-link-square-alt fa-2x"></i></a>
            <a class="ml-2" v-if='workshop.linkedin' :href='workshop.linkedin'><i class="fab fa-linkedin fa-2x"></i></a>
            <a class="ml-2" v-if='workshop.twitter' :href='workshop.twitter'><i class="fab fa-twitter-square fa-2x"></i></a>
          </div>
        </div>
        <div class="col-lg-9 mt-3 p-4">
          <div class="text-lowercase">
            <h1> {{ workshop.speaker }} {{ workshop.twoSpeakers ? '& ' + workshop.speaker2 : '' }} </h1>
            <h4 class="body-style"> {{ workshop.occupation }} </h4>
            <h4 class="body-style"> {{ workshop.workplace }} </h4>
          </div>

          <p class="lead mt-4">
            <span v-if='workshop.twoSpeakers' class="text-strong">{{ workshop.speaker }}<br></span>
            {{ workshop.bio }}
          </p>
          <p v-if='workshop.bio2' class="lead mt-4">
           <span class="text-strong">{{ workshop.speaker2 }}</span><br>
         {{ workshop.bio2 }}</p>

         <div class="text-lowercase">
          <h1> {{ workshop.title }} </h1>
          <h4 class="body-style"> {{ workshop.day }}, {{ workshop.time }}, sala {{ workshop.place }}. </h4>
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
        title: this.workshop.title + " | semana de informatica",
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
.text-strong {
  font-weight: 600;
}
</style>