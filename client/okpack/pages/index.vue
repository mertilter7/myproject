<template>
  <div>
    <div class="bg- text-light p-2 d-flex justify-content-between">
      <div class="mt-1">
        <p class="ms-3">Lorem, ipsum dolor sit amet</p>
      </div>
      <div class="mt-1">
        <p class="me-3">Lorem, ipsum dolor sit amet</p>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <p class="text-light fw-bold fs-1 my-5">Welcome Our Company Web Page!</p>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-6 mt-5">
          <h2 class="text-center text-light fs-3 mt-5">
            Welcome Our Company Web Site!!!
          </h2>
          <p class="text-light mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at
            voluptatum libero. Dolores voluptatibus consequatur labore officiis
            saepe eos id nulla sint placeat eaque iure nesciunt dolore eum,
            omnis corrupti.
          </p>
        </div>
        <div class="col-6 mt-5">
          <figure class="text-center">
            <img src="~/assets/company.png" />
          </figure>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <Nuxt-Link to="/anasayfa" class="btn btn-primary spec btn-lg">
          Avantajları Keşfet!
        </Nuxt-Link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
body {
  background-color: #4d81e0;
}
Footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
}
.spec:hover {
  background-color: #4d81e0;
  color: white;
  border: none;
  outline: none !important;
  transform: scale(1.3);
  transition: 0.6s ease-in-out;
}
</style>
