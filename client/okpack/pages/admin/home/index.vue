<template>
  <div>
    <Header />
    <div class="container">
      <div class="d-flex justify-content-center my-3">
        <div class="shadow w-50 bg-danger text-light p-4 rounded">
          <h3 class="text-center">Anasayfa</h3>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-column my-3">
          <form
            @submit.prevent="onSubmit"
            method="POST"
            enctype="multipart/form-data"
          >
            <input
              v-model="title"
              type="text"
              class="form-control"
              placeholder="Başlık Giriniz.."
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
            <label for="file-upload" class="custom-file-upload my-3">
              <i class="fa fa-cloud-upload-alt"></i> Yüklenecek Fotoğrafları
              Seçin
            </label>
            <input
              id="file-upload"
              type="file"
              name="files"
              ref="files"
              class="custom-file-upload"
              @change="onFileSelected"
              multiple
            />
            <!-- <input
              class="custom-file-input"
              type="file"
              name="files"
              ref="files"
              @change="onFileSelected"
              multiple
            /> -->
            <textarea v-model="description" name="editor1"></textarea>
            <button type="submit" class="btn btn-danger mt-3">Gönder</button>
          </form>
        </div>
      </div>
      <h6 class="text-center mt-4">
        Anasayfa İçeriğini güncellemek yada silmek için aşağıdan işlemi seçiniz
      </h6>
      <div class="d-flex justify-content-center">
        <div class="w-50 shadow bg-danger text-light p-2 my-3 rounded">
          <ul>
            <li v-for="(hom, i) in home" :key="i" class="list-unstyled">
              <div class="d-flex justify-content-between">
                <div>
                  {{ hom.title }}
                </div>
                <div v-for="(home, i) in home" :key="i">
                  <NuxtLink :to="'home/' + home.Id">
                    <i class="far fa-edit me-1"></i>
                  </NuxtLink>
                  <button @click="deleteHomeText(home.Id)">
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
      url: "http://localhost:5000/home",
      home: {},
      editor: "",
      selectedFile: "",
    };
  },
  methods: {
    onFileSelected() {
      this.selectedFile = this.$refs.files.files;
    },
    async onSubmit() {
      let fd = new FormData();
      this.selectedFile.forEach((file) => {
        fd.append("files", file);
      });
      fd.append("title", this.title);
      fd.append("description", this.editor.instances.editor1.getData());
      await axios
        .post(this.url, fd, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
        });
    },
    deleteHomeText(id) {
      axios.delete("http://localhost:5000/home/" + id).then((response) => {
        this.home.splice(id, 1);
        console.log(response);
      });
    },
  },
  async created() {
    await axios.get(this.url).then((response) => (this.home = response.data));
  },
  mounted() {
    this.editor = CKEDITOR;
    this.editor.replace("editor1");
  },
};
</script>

<style scoped>
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: "Fotoğrafları Seçiniz";
  display: inline-block;
  border-radius: 3px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 15pt;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 580px;
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
