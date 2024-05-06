<template>
    <div>
    <h1 class="alert alert-success m-5">Pagina dei risultati</h1>
    <h2>Risultati della ricerca per "{{ $route.params.searchTerm }}":</h2>
    <div class="container-grid m-4"></div>
  </div>
</template>
<script>
import { podcastIndexSearchAPI, updateGrid, showLoadingSpinner } from '../utils.js'
export default {
  components: {
  },
  methods: {
    handleSearch (searchTerms) {
      console.log('Ricerca con i termini:', searchTerms)
    }
  },
  mounted () {
    const searchTerm = this.$route.params.searchTerm
    showLoadingSpinner()
    podcastIndexSearchAPI(searchTerm, 12).then((data) => {
      updateGrid(data.feeds, 'suggested')
    })
  }
}
</script>
