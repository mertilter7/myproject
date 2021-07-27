<template>
  <div>
    <div class="text-light bg-dark p-2 d-flex justify-content-around">
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
      <div class="d-flex justify-content-center mt-5">
        <div v-for="(about, i) in abouts" :key="i">
          <h3>{{ about.title }}</h3>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <div v-for="(about, i) in abouts" :key="i">
          <p v-html="about.description" class=""></p>
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
      url: "http://localhost:5000/abouts",
      abouts: {},
    };
  },
  async mounted() {
    await axios.get(this.url).then((response) => (this.abouts = response.data));
  },
};
</script>

<style>
</style>
