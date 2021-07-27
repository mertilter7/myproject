<template>
  <div>
    <nav class="navbar navbar-dark bg-danger text-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <h5>İçerik Yönetim Paneli</h5>
      </div>
    </nav>
    <div class="collapse d-md-none" id="navbarToggleExternalContent">
      <div class="bg-danger p-4 d-flex flex-column w-md-25">
        <a href="#" class="d-inline-block mb-2 mb-md-3">Anasayfa</a>
        <a href="#" class="d-inline-block mb-2 mb-md-3">Ürünler</a>
        <a href="#" class="d-inline-block mb-2 mb-md-3">Haberler</a>
        <a href="#" class="d-inline-block mb-2 mb-md-3">Slaytlar</a>
        <a href="#" class="d-inline-block mb-2 mb-md-3">Hakkımızda</a>
        <a href="#" class="d-inline-block mb-2 mb-md-3">İletişim</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  background: white;
  color: red;
  border: 1px solid white;
  padding: 5px;
  border-radius: 5px;
}
.wh {
  width: 300px;
  height: 900px;
}
</style>
