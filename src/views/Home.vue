<template>
  <main>    
    <profile></profile>

     <div class="container">
       <h4>Registrate en YesidGram</h4>
       <br>

      <div class="form-register">
        <input v-model="form.username" type="text" placeholder="username">
       <label >
            <input v-model="form.password" :type="typeShow" placeholder="password"> 
            <button  class="visible" @click="showPassword()" >Show
            </button>

       </label>
       
       
        <label >
          <input v-model="form.isAcept" type="checkbox">Acepto terminos y condiciones
         
        </label>

        <button @click="sendToRegister()" >
          Registrate
        </button>

        <span class="text-danger" v-if="!form.isAcept"> acepta terminos</span>
        <span v-else>
          gracias por registrarse
        </span>
      </div>
     </div>

     
  </main>
</template>

<script>
// @ is an alias to /src

import Profile from "../components/Profile";

export default {
  components:{
    Profile
  },
  data(){
    return{
      form:{
        username:null,
        password: null,
        isAcept: null
      },
      typeShow: "password",
    }
  },
  methods: {
    sendToRegister(){
      console.log(this.form);
    },
    showPassword(){
      this.typeShow = (this.typeShow === "password") ? "text": "password";
    }
  }
};
</script>



<style lang="scss" >
.container{
  width: 500px;
  margin: 3rem auto;
}

.form-register{
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  input{
    padding: .25rem .75rem;
    border: 1px solid #cecece;
  }

  button{
    background-color: cadetblue;
    color: black;
    padding: 1.25rem .75rem;
    border: 1px solid #cecece;
    border-radius: .25rem;

  }

  .text-danger{
    color: red;
    font-size: .8 rem;
    font-style: italic;
  }

  .visible{
    background-color: cornsilk;
    color: black;
     padding: .25rem .75rem;
     margin: 0 1rem ;
  }
}
</style>
