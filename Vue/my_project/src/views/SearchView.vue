<template>
  <div class="search">
    <div class="row justify-content-center mt-5">
      <div class="col-9">
        <h1 class="alert alert-success">Pagina di ricerca</h1>
      </div>
    </div>
    <div class="row m-2">
      <!-- Usa il componente SearchBar -->
      <SearchBar @search="handleSearch"> </SearchBar>
    </div>
  </div>
</template>
<script>
// Importa il  componente SearchBar
import SearchBar from '@/components/SearchBar.vue'
export default {
  components: {
    SearchBar
  },
  methods: {
    handleSearch (searchTerms) {
      console.log('Stai cercando:', searchTerms)
      this.$router.push({ name: 'ResultsView', params: { searchTerm: searchTerms } })
    }
  }
}
</script>
