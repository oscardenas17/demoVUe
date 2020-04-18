<template>
  <main>
    <Caratula v-bind:username="getUsername('YesidCardenas')"> </Caratula>
    <Caratula  username="yesidcardenas"> </Caratula>
  </main>
</template>

<script>
// @ is an alias to /src
import Caratula from '@/components/Profile'




export default {
  
  components: {
    Caratula
  },
  data(){
    return{
      username: 'yesid.cardenas'
    }
  },
  methods: {
    getUsername(value){
      this.username = value;
      return this.username;
    }
  }
}
</script>
