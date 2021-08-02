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
    <div class="container">
      <div v-for="item in news" :key="item">
        <div v-for="img in item.Images" :key="img">
          <img :src="img.path" alt="" class="d-block w-100 mt-3" />
        </div>
      </div>
      <!-- Fotoğraf Bitiş -->
      <div class="d-flex justify-content-center">
        <div class="my-3" v-for="(item, i) in news" :key="i">
          <h1 class="text-center">{{ item.title }}</h1>
          <h4 class="text-center">{{ item.subtitle }}</h4>
          <p v-html="item.description" class="mt-4"></p>
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
      url: "http://localhost:5000/news",
      news: {},
    };
  },

  async created() {
    await axios.get(this.url).then((response) => (this.news = response.data));
  },
};
</script>

<style scoped>
.bg-darkorange {
  background-color: darkorange;
}
</style>
