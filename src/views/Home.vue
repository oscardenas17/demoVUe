<template>
  <main>    
    <div class="profile">
      <list-stories :stories="storie"></list-stories>
    </div>
   
  </main>
</template>

<script>
// @ is an alias to /src
//import Caratula from '@/components/Profile'
import ListStories from "../components/listStories";

export default {
  
  components: {
    ListStories
  },
  data(){
    return{
      storie:[
        {img: 'https://github.githubassets.com/images/modules/site/logos/spotify-logo.png',
        title: 'historia1'},
        {img: 'https://github.githubassets.com/images/modules/site/logos/spotify-logo.png',
        title: 'historia2'},
      ]
    }
  }
}
</script>
