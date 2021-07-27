<template>
  <div>
    <Header />
    <div class="d-flex justify-content-center mt-3 container-fluid">
      <div class="row">
        <div class="text-light bg-danger p-4 w-full rounded shadow mb-5">
          <h5 class="fw-bold">Site Yönetim Paneli</h5>
          <p>
            Sitenize ait içeriklerinizi aşağıdaki menülerden yönetebilirsiniz.
          </p>
        </div>
        <div class="col-6">
          <div class="border shadow p-3 d-block mb-3 rounded bg-dark">
            <NuxtLink to="admin/categories" class="text-light">
              <h5 class="fw-bold">Kategoriler</h5>
              <p>Ürün veya hizmetlerinize ait kategoriler</p>
            </NuxtLink>
          </div>
          <div class="border shadow p-3 d-block mb-3 rounded bg-info">
            <NuxtLink to="/references" class="text-light">
              <h5 class="fw-bold">Referanslar</h5>
              <p>Firmanızın referansları</p>
            </NuxtLink>
          </div>
          <div class="border shadow p-3 d-block mb-3 rounded bg-green">
            <NuxtLink to="/slides" class="text-light">
              <h5 class="fw-bold">Slaytlar</h5>
              <p>Anasayfa geçişli büyük fotoğraflar</p>
            </NuxtLink>
          </div>
        </div>
        <div class="col-6">
          <div class="border shadow p-3 d-block mb-3 rounded bg-primary">
            <NuxtLink to="/products" class="text-light">
              <h5 class="fw-bold">Ürünler / Hizmetler</h5>
              <p>Tanıtmak istediğiniz ürün veya hizmetleriniz</p>
            </NuxtLink>
          </div>
          <div class="border shadow p-3 d-block mb-3 rounded bg-warning">
            <NuxtLink to="/admin/contact" class="text-light">
              <h5 class="fw-bold">İletişim</h5>
              <p>İletişim sayfası</p>
            </NuxtLink>
          </div>
          <div class="border shadow p-3 d-block mb-3 rounded bg-purple">
            <NuxtLink to="/admin/about" class="text-light">
              <h5 class="fw-bold">Hakkımızda</h5>
              <p>Hakkımızda sayfası</p>
            </NuxtLink>
          </div>
          <div
            class="border shadow p-3 bg-torino d-block mb-3 rounded bg-purple"
          >
            <NuxtLink to="/admin/news" class="text-light">
              <h5 class="fw-bold">Haberler</h5>
              <p>Haberler sayfası</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.bg-purple {
  background: plum;
}
.bg-green {
  background: rgb(70, 204, 115);
}
.bg-torino {
  background: rgb(165, 42, 114);
}
</style>

