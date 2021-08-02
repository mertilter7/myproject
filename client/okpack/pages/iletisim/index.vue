<template>
  <div>
    <div class="text-light bg-darkorange p-2 d-flex justify-content-around">
      <div>
        <i class="fas fa-place-of-worship fa-lg me-2"></i>
        Hayat Eve Sığar..
      </div>
      <div>
        <i class="fas fa-phone me-2"></i>
        05000000000
      </div>
    </div>
    <Navbar />
    <div>
      <figure>
        <img
          class="img-fluid"
          src="https://www.swissbit.com/files/public/HeaderBilder/keyvisual-contacts.jpg"
          alt="iletişim görsel"
        />
      </figure>
    </div>
    <div class="container">
      <div class="row my-5">
        <div class="col-12 col-md-6">
          <div v-for="(contact, i) in contacts" :key="i">
            <p v-html="contact.description"></p>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="">
            <form method="POST">
              <h2>İletişim Formu</h2>
              <textarea
                class="w-100"
                name=""
                id="text"
                cols="30"
                rows="10"
              ></textarea>
            </form>
            <button class="btn btn-dark">Gönder</button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
// SMPTJS ile MAİLE BAĞLANACAK TEXT AREA
import Navbar from "@/components/Navbar";
import axios from "axios";
import Footer from "@/components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      url: "http://localhost:5000/contacts",
      contacts: {},
    };
  },
  async mounted() {
    axios.get(this.url).then((response) => (this.contacts = response.data));
  },
};
</script>

<style scoped>
textarea {
  resize: none;
}
button {
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 7px;
  padding-bottom: 7px;
  margin-top: 5px;
}
button:hover {
  background: white;
  color: black;
  padding-right: 35px;
  padding-left: 35px;
}
.bg-darkorange {
  background-color: darkorange;
}
</style>
