<template>
  <section class="mt-5">
    <h2 class="container text-lowercase">talk</h2>
    <div class="section-header-divider"></div>

    <div class="container">

      <div class="row">
        <div class="col-lg-3 mt-5 mb-2 pr-4 d-flex flex-column">
          <div v-if='talk.twoSpeakers' class="d-flex flex-md-column">
            <div>
              <img :src='"~/assets/img/speakers/" + talk.img + ".jpg"' class="m-1 img-fluid">
            </div>
            <div>
              <img :src='"~/assets/img/speakers/" + talk.img2 + ".jpg"' class="m-1 img-fluid">
            </div>
          </div>
          <div v-else>
            <img :src='"~/assets/img/speakers/" + talk.img + ".jpg"' class="img-fluid">
          </div>

          <div class="ml-auto mt-2">
            <a class="ml-2" v-if='talk.website' :href='talk.website'><i class="fas fa-external-link-square-alt fa-2x"></i></a>
            <a class="ml-2" v-if='talk.linkedin' :href='talk.linkedin'><i class="fab fa-linkedin fa-2x"></i></a>
            <a class="ml-2" v-if='talk.twitter' :href='talk.twitter'><i class="fab fa-twitter-square fa-2x"></i></a>
          </div>
        </div>
        <div class="col-lg-9 mt-3 p-4">
          <div class="text-lowercase">
            <h1> {{ talk.speaker }} {{ talk.twoSpeakers ? '& ' + talk.speaker2 : '' }} </h1>
            <h4 class="body-style"> {{ talk.occupation }} </h4>
            <h4 class="body-style"> {{ talk.workplace }} </h4>
          </div>

          <p class="lead mt-4">
            <span v-if='talk.twoSpeakers' class="text-strong">{{ talk.speaker }}<br></span>
            {{ talk.bio }}
          </p>
          <p v-if='talk.bio2' class="lead mt-4">
           <span class="text-strong">{{ talk.speaker2 }}</span><br>
         {{ talk.bio2 }}</p>

         <div class="text-lowercase">
          <h1> {{ talk.title }} </h1>
          <h4 class="body-style"> {{ talk.day }}, {{ talk.time }}, sala {{ talk.place }}. </h4>
        </div>

        <nuxtent-body class="mt-4 lead" :body="talk.body" />
      </div>
    </div>

  </div>
</section>
</template>

<script>
  export default {

    head () {
      return {
        title: this.talk.title + " | semana de informatica",
      }
    },

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
.text-strong {
  font-weight: 600;
}
</style>