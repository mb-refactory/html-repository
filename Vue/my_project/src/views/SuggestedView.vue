<template>
  <div>
    <h1 class="alert alert-success m-5">Pagina dei consigliati</h1>
    <h2 class="fw-bold mx-2">Ecco qualche consiglio per te:</h2>
    <div class="row mx-4 my-4">
        <div class="col-lg-6 col-md-12 fade-in" v-for="podcast in podcasts" :key="podcast.id">
          <PodcastCard :podcastInfo="podcast" />
        </div>
      </div>
  </div>
</template>
<script>
import { podcastIndexTrendingAPI } from '../podcastIndexAPIs.js'
import PodcastCard from '../components/PodcastCard.vue'
export default {
  components: {
    PodcastCard
  },
  data () {
    return {
      podcasts: []
    }
  },
  mounted () {
    podcastIndexTrendingAPI(20, []).then((data) => {
      this.podcasts = data.feeds
    })
  }
}
</script>
