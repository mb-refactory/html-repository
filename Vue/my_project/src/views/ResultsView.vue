<template>
  <div>
    <h1 class="alert alert-success m-5">Pagina dei risultati</h1>
    <h2 class="fw-bold mx-2">Risultati della ricerca per "{{ $route.params.searchTerm }}":</h2>
    <div class="row mx-4 my-4">
        <div class="col-lg-6 col-md-12 fade-in" v-for="podcast in podcasts" :key="podcast.id">
          <PodcastCard :podcastInfo="podcast" />
        </div>
      </div>
  </div>
</template>
<script>
import { podcastIndexSearchAPI } from '../podcastIndexAPIs.js'
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
  methods: {
    handleSearch (searchTerms) {
      console.log('Ricerca con i termini:', searchTerms)
    }
  },
  mounted () {
    const searchTerm = this.$route.params.searchTerm
    podcastIndexSearchAPI(searchTerm, 12).then((data) => {
      this.podcasts = data.feeds
      // updateGrid(data.feeds, 'suggested')
    })
  }
}
</script>
