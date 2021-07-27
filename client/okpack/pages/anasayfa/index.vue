<template>
  <div>
    <div class="text-dark bg-specialgray p-2 d-flex justify-content-around">
      <div>
        <i class="fas fa-place-of-worship fa-lg me-2"></i>
        Hayat Eve Sığar..
      </div>
      <div>
        <i class="fas fa-phone me-2"></i>
        05000000000
      </div>
    </div>
    <Navbar />
    <div class="container">
      <div id="slidess">
        <!-- <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
          </div>
        </div> -->
      </div>
      <div class="d-flex justify-content-center mt-5">
        <div v-for="(home, i) in home" :key="i">
          <h3>{{ home.title }}</h3>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <div v-for="(home, i) in home" :key="i">
          <p v-html="home.description" class=""></p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import axios from "axios";
import Footer from "@/components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      url: "http://localhost:5000/home",
      home: {},
    };
  },
  async mounted() {
    await axios.get(this.url).then((response) => (this.home = response.data));
  },
};
</script>

<style>
.bg-specialgray {
  background: #dedede;
}
</style>
