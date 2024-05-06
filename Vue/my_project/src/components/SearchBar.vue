<template>
    <div>
      <form class="d-flex m-2" @submit.prevent="search">
        <input v-model="searchTerms" class="form-control me-2 fs-1" type="search" placeholder="Search" aria-label="Search" autofocus required style="font-weight: bold;">
        <button class="btn btn-warning" type="submit"><span class="material-symbols-outlined fs-1" style="vertical-align: bottom;">search</span></button>
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
