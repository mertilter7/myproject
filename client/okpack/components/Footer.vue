<template>
  <footer class="bg-dark text-light">
    <div class="row">
      <div class="col-12 col-md-3">
        <h1>LOGO</h1>
      </div>
      <div class="col-12 col-md-3 d-flex flex-column">
        <Nuxt-Link to="/anasayfa">Anasayfa</Nuxt-Link>
        <Nuxt-Link to="/urunler">Ürünler</Nuxt-Link>
        <Nuxt-Link to="/haberler">Haberler</Nuxt-Link>
        <Nuxt-Link to="/hakkimizda">Hakkımızda</Nuxt-Link>
        <Nuxt-Link to="/iletisim">İletişim</Nuxt-Link>
      </div>
      <div class="col-12 col-md-3 d-flex flex-column">
        <Nuxt-Link to="/anasayfa">Anasayfa</Nuxt-Link>
        <Nuxt-Link to="/urunler">Ürünler</Nuxt-Link>
        <Nuxt-Link to="/haberler">Haberler</Nuxt-Link>
        <Nuxt-Link to="/hakkimizda">Hakkımızda</Nuxt-Link>
        <Nuxt-Link to="/iletisim">İletişim</Nuxt-Link>
      </div>
      <div class="col-12 col-md-3">
        <i class="fab fa-facebook-f fa-lg me-2"></i>
        <i class="fab fa-instagram fa-lg me-2"></i>
        <i class="fab fa-twitter fa-lg"></i>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  padding: 70px;
}
a {
  display: inline-block;
  margin-bottom: 5px;
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
}
a:hover {
  color: white;
  transform: scaleY(1.3);
}
</style>
