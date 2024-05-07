<template>
  <div>
    <h1 class="alert alert-success m-5">Pagina delle iscrizioni</h1>
    <h2 class="fw-bold mx-2">Ecco i podast a cui sei iscritto:</h2>
    <p class="fw-bold fs-3 fst-italic m-2 text-secondary"> [Da implementare] </p>

    <div class="row mx-4 my-4">
        <div class="col-lg-6 col-md-12 fade-in" v-for="podcast in podcasts" :key="podcast.id">
          <PodcastCard :podcastInfo="podcast" />
        </div>
      </div>
  </div>
</template>
<script>
// import { podcastIndexByID } from '../podcastIndexAPIs.js'
import PodcastCard from '../components/PodcastCard.vue'
export default {
  components: {
    PodcastCard
  },
  data () {
    return {
      podcasts: []
    }
  }
  // mounted () {
  //   podcastIndexByID(20, []).then((data) => {
  //     this.podcasts = data.feeds
  //   })
  // }
}
</script>
