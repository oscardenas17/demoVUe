<template>
  <main>


    <h1>hello home</h1>
    <banner name="Yesid Cárdenas" role=" Frontend Developer & UI developer" bio="Bucaramanga- Colombia"></banner>

    <skills :skills="mySkills">    </skills>
    <contact-form> </contact-form>

  </main>
</template>

<script>
// @ is an alias to /src

//import Profile from "../components/Profile";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import ContactForm from "../components/ContactForm";

export default {
  components: {
   // Profile,
    Banner,
    Skills,
    ContactForm
  },
  data() {
    return {
      form: {
        username: null,
        password: null,
        isAcept: null
      },
      typeShow: "password",
      mySkills: [
        {
        name: " VuejJS",
        percetage:"50%",
        description:"Uso VuejS para el dia a dia"
        },
         {
        name: "SCSS",
        percetage:"80%",
        description:"Arquitectura CSS mediante preprocesadores"
        },
         {
        name: "HTML5",
        percetage:"80%",
        description:"Maqutado web enfocado el SEO"
        },
         {
        name: "Adobe XD",
        percetage:"50%",
        description:"Diseño y prototipos de websites"
        }
      ]
    };
  },
  methods: {
    sendToRegister() {
      console.log(this.form);
    },
    showPassword() {
      this.typeShow = this.typeShow === "password" ? "text" : "password";
    }
  }
};
</script>



<style lang="scss" >
.container {
  width: 500px;
  margin: 3rem auto;
}

.form-register {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  input {
    padding: 0.25rem 0.75rem;
    border: 1px solid #cecece;
  }

  button {
    background-color: cadetblue;
    color: black;
    padding: 1.25rem 0.75rem;
    border: 1px solid #cecece;
    border-radius: 0.25rem;
  }

  .text-danger {
    color: red;
    font-size: 0.8 rem;
    font-style: italic;
  }

  .visible {
    background-color: cornsilk;
    color: black;
    padding: 0.25rem 0.75rem;
    margin: 0 1rem;
  }
}
</style>
