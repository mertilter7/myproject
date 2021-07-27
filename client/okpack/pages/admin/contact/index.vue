<template>
  <div>
    <Header />
    <div class="container">
      <div class="d-flex justify-content-center my-3">
        <div class="shadow w-50 bg-danger text-light p-4 rounded">
          <h3 class="text-center">İletişim Sayfası</h3>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-column my-3">
          <form @submit.prevent="onSubmit" method="POST">
            <span class="d-inline-block mb-2"
              >İletişim Bilgilerini Giriniz..</span
            >
            <textarea v-model="description" name="editor1"></textarea>
            <button type="submit" class="btn btn-danger mt-3">Gönder</button>
          </form>
        </div>
      </div>
      <h6 class="text-center mt-4">
        İletişim sayfası içeriğini silmek veya <br />
        güncellemek için aşağıdan işlemi seçiniz
      </h6>
      <div class="d-flex justify-content-center">
        <div class="w-50 shadow bg-danger text-light p-2 my-3 rounded">
          <ul>
            <li v-for="(contact, i) in contacts" :key="i" class="list-unstyled">
              <div class="d-flex justify-content-between">
                <div v-html="contact.description"></div>
                <div v-for="(contact, i) in contacts" :key="i">
                  <i class="far fa-edit me-1"></i>
                  <button @click="deleteContacts(contact.Id)">
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
      description: "",
      url: "http://localhost:5000/contacts/",
      contacts: [],
      editor: "",
    };
  },
  methods: {
    async onSubmit() {
      await axios
        .post(this.url, {
          description: this.editor.instances.editor1.getData(),
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteContacts(id) {
      axios.delete(this.url + id).then((response) => {
        this.contacts.splice(id, 1);
        console.log(response);
      });
    },
  },
  async created() {
    await axios
      .get(this.url)
      .then((response) => (this.contacts = response.data));
  },
  mounted() {
    this.editor = CKEDITOR;
    this.editor.replace("editor1");
  },
};
</script>

<style>
</style>
