<template>
  <div>
    <div class="text-light bg-special p-2 d-flex justify-content-between">
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
    <Slider :data="home" />
    <div class="container">
      <div v-for="(home, i) in home" :key="i" class="text-center mt-3">
        <h1>{{ home.title }}</h1>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <div v-for="(home, i) in home" :key="i">
          <p v-html="home.description"></p>
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
import Slider from "@/components/Slider";
export default {
  components: {
    Navbar,
    Footer,
    Slider,
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

<style>
.bg-special {
  background-color: #334756;
}
p {
  max-width: 80ch;
  text-align: justify;
}
</style>
