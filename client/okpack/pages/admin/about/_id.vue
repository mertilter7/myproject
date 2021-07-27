<template>
  <div>
    <Header />
    <div class="container">
      <div class="d-flex justify-content-center my-3">
        <div class="shadow bg-danger text-light p-4 rounded">
          <h3 class="text-center">Hakkımızda Sayfası</h3>
        </div>
      </div>
      {{ this.abouts }}
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-column">
          <form @submit.prevent="onSubmit" method="POST">
            <div class="my-3">
              <span class="fw-bold fs-5 d-inline-block">Başlık</span>
              <input
                v-model="abouts.title"
                name="title"
                type="text"
                class="form-control"
              />
            </div>
            <textarea v-model="abouts.description" name="editor1"></textarea>
            <button type="submit" class="btn btn-danger mt-3">Gönder</button>
          </form>
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
      url: "http://localhost:5000/abouts/",
      abouts: "",
      editor: "",
    };
  },
  methods: {
    async onSubmit() {
      await axios
        .put(this.url + this.$route.params.id, {
          title: this.abouts.title,
          description: this.editor.instances.editor1.getData(),
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async created() {
    await axios
      .get(this.url + this.$route.params.id)
      .then((response) => (this.abouts = response.data));
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
