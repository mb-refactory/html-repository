<template>
  <div class="home">
    <main>
        <div class="container text-center py-2 mt-5 mb-5">
            <div class="row m-1 m-lg-5">
                <div class="col-xl-4 col-lg-12 mb-3">
                    <a class="btn btn-dark btn-lg fw-bold fs-1 p-5 rounded-4 d-flex flex-fill justify-content-center text-nowrap your-podcasts-btn"
                        href="#" role="button">Your Podcasts</a>
                </div>
                <div class="col-xl-4 col-lg-12 mb-3">
                    <a class="btn btn-secondary btn-lg fw-bold fs-1 p-5 rounded-4 d-flex flex-fill justify-content-center suggested-btn"
                        href="#" role="button">Suggested</a>
                </div>
                <div class="col-xl-4 col-lg-12 mb-3">
                  <router-link to="/search" class="btn btn-warning btn-lg fw-bold fs-1 p-5 rounded-4 d-flex justify-content-center search-btn text-white">Search</router-link>
                </div>
              </div>
        </div>
    </main>
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>
