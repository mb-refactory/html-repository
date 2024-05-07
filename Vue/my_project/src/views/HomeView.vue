<template>
  <div class="home">
    <main>
        <div class="container text-center py-2 mb-5">
            <div class="row m-1 m-lg-5">
                <div class="col-xl-4 col-lg-12 mb-3">
                  <router-link to="/subscribed" class="btn btn-dark btn-lg fw-bold fs-1 p-5 rounded-4 d-flex justify-content-center search-btn text-white">Your Podcasts</router-link>
                </div>
                <div class="col-xl-4 col-lg-12 mb-3">
                  <router-link to="/suggested" class="btn btn-secondary btn-lg fw-bold fs-1 p-5 rounded-4 d-flex justify-content-center search-btn text-white">Suggested</router-link>

                </div>
                <div class="col-xl-4 col-lg-12 mb-3">
                  <router-link to="/search" class="btn btn-warning btn-lg fw-bold fs-1 p-5 rounded-4 d-flex justify-content-center search-btn text-white">Search</router-link>
                </div>
              </div>
              <img alt="Vue logo" src="../assets/logo.png">
        </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
<style>
  .home {
    background-color: rgba(72, 79, 72, 0.613);
    height: 100vh;
  }
</style>
