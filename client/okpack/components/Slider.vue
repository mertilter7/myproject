<template>
  <div class="container mt-3">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
      v-for="item in data"
      :key="item"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          :data-bs-slide-to="i"
          class="active"
          aria-current="true"
          :aria-label="'Slide ' + i"
          :class="{ active: i == 0 }"
          v-for="(img, i) in item.Images"
          :key="i"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: i == 0 }"
          v-for="(img, i) in item.Images"
          :key="i"
        >
          <img :src="img.path" class="d-block w-100" alt="ses" />
        </div>
      </div>
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
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
button:hover {
  background: none;
}

@media screen and (min-width: 1024px) {
  img {
    height: 580px;
  }
}
@media screen and (max-width: 480px) {
  img {
    height: 200px;
  }
}
</style>
