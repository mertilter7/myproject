<template>
  <div class="bg-dark text-white">
    <div class="container mt-0 p-3">
      <div class="row">
        <div class="col-6">
          <h2>LOGO</h2>
        </div>
        <div class="col-6">
          <div class="d-flex justify-content-between">
            <Nuxt-Link to="/anasayfa">Anasayfa</Nuxt-Link>
            <Nuxt-Link to="/haberler">Haberler</Nuxt-Link>
            <Nuxt-Link to="/urunler">Ürünler</Nuxt-Link>
            <Nuxt-Link to="/hakkimizda">Hakkımızda</Nuxt-Link>
            <Nuxt-Link to="/iletisim">İletişim</Nuxt-Link>
          </div>
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
  transition: 0.3s ease-in-out;
}
a:hover {
  transform: scale(1.3);
  color: white;
  text-decoration: none;
}
.bg-specialgray {
  background: #dedede;
}
</style>
