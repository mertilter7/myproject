<template>
  <div>
    <Header />
    <div class="container">
      <div class="d-flex justify-content-center my-3">
        <div class="shadow bg-danger text-light p-4 rounded">
          <h3 class="text-center">Hakkımızda Sayfası</h3>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-column">
          <form @submit.prevent="onSubmit" method="POST">
            <div class="my-3">
              <span class="fw-bold fs-5 d-inline-block">Başlık</span>
              <input
                v-model="title"
                name="title"
                type="text"
                class="form-control"
              />
            </div>
            <textarea v-model="description" name="editor1"></textarea>
            <button type="submit" class="btn btn-danger mt-3">Gönder</button>
          </form>
        </div>
      </div>
      <h6 class="text-center mt-4">
        Hakkımızda sayfası içeriğini silmek veya <br />
        güncellemek için aşağıdan işlemi seçiniz
      </h6>
      <div class="d-flex justify-content-center">
        <div class="w-50 shadow bg-danger text-light p-2 my-3 rounded">
          <ul>
            <li v-for="(about, i) in abouts" :key="i" class="list-unstyled">
              <div class="d-flex justify-content-between">
                <div>
                  {{ about.title }}
                </div>
                <div v-for="(about, i) in abouts" :key="i">
                  <NuxtLink :to="'about/' + about.Id">
                    <i class="far fa-edit me-1"></i>
                  </NuxtLink>
                  <button @click="deleteAbouts(about.Id)">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import axios from "axios";
export default {
  components: {
    Header,
  },
  data() {
    return {
      title: "",
      description: "",
      url: "http://localhost:5000/abouts",
      abouts: [],
      editor: "",
    };
  },
  // GÜNCELLEME METHODU EKLENECEK !!!
  methods: {
    async onSubmit() {
      await axios
        .post(this.url, {
          title: this.title,
          description: this.editor.instances.editor1.getData(),
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteAbouts(id) {
      axios.delete("http://localhost:5000/abouts/" + id).then((response) => {
        this.abouts.splice(id, 1);
        console.log(response);
      });
    },
  },
  async created() {
    await axios.get(this.url).then((response) => (this.abouts = response.data));
  },
  mounted() {
    this.editor = CKEDITOR;
    this.editor.replace("editor1");
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
