<template>
  <div class="podcast-card mb-4 rounded-3 bg-primary-subtle border-0 shadow-lg">
    <div class="row g-0 bg-primary rounded-3 shadow-sm">
      <div class="col-4 d-flex bg-secondary-subtle rounded-3">
        <img :src="podcastInfo.artwork" alt="cover" class="img-fluid rounded-3 bg-light object-fit-cover h-100" />
      </div>
      <div class="col-8 text-start rounded-3">
        <div class="card-body rounded-3 p-3">
          <h2 class="card-title display-5 fw-bold m-1 text-white">{{ formatTitle(podcastInfo.title) }}</h2>
        </div>
      </div>
    </div>
    <p class="card-text p-3 fs-4 fw-bold">{{ formatDescription(podcastInfo.description) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    podcastInfo: Object
  },
  methods: {
    formatTitle (title) {
      return title.length > 50 ? title.substring(0, 50) + '...' : title
    },
    formatDescription (description) {
      return description.replace(/<[^>]*>/g, '').length > 160 ? description.substring(0, 160) + '...' : description
    }
  }
}
</script>
