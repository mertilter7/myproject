<template>
  <div>
    <div class="text-light bg-darkorange p-2 d-flex justify-content-around">
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
    <div v-for="item in home" :key="item">
      <div v-for="img in item.Images" :key="img">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <!-- Slayt Düzenlenecek -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="img.path" class="d-block w-100" alt="ses" />
            </div>
          </div>
          <!-- Slayt Düzenlenecek -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <div class="container">
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
  async created() {
    await axios.get(this.url).then((response) => {
      this.home = response.data;
    });
  },
};
</script>

<style scoped>
.bg-darkorange {
  background-color: darkorange;
}
</style>
