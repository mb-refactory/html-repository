<template>
    <div>
      <form class="d-flex m-2">
        <input v-model="searchTerms"  @keydown.enter.prevent=""  class="form-control me-2 fs-1" type="search" placeholder="Search" aria-label="Search" autofocus required style="font-weight: bold;">
        <button @click="search" class="btn btn-warning fs-1 fw-bold" type="submit">search</button>
      </form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      searchTerms: ''
    }
  },
  methods: {
    search () {
      this.$emit('search', this.searchTerms)
    }
  }
}
</script>
