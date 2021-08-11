<template>
  <div class="text-dark bg-special">
    <div class="container mt-0">
      <div class="row align-items-center">
        <div class="col-6">
          <h2 class="d-inline-block p-3 text-light">LOGO</h2>
        </div>
        <div class="col-6">
          <nav class="d-none d-md-flex">
            <Nuxt-Link to="/anasayfa" class="d-inline-block p-3"
              >Anasayfa</Nuxt-Link
            >
            <Nuxt-Link to="/haberler" class="d-inline-block p-3"
              >Haberler</Nuxt-Link
            >
            <Nuxt-Link to="/urunler" class="d-inline-block p-3"
              >Ürünler</Nuxt-Link
            >
            <Nuxt-Link to="/hakkimizda" class="d-inline-block p-3"
              >Hakkımızda</Nuxt-Link
            >
            <Nuxt-Link to="/iletisim" class="d-inline-block p-3"
              >İletişim</Nuxt-Link
            >
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 1.25rem;
  transition: 0.1s ease-in-out;
}
a:hover {
  transform: scale(1.3);
  color: white;
  text-decoration: none;
}
.bg-special {
  background: #ff4c29;
}
</style>
