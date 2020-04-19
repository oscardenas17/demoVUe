<template>
  <main>    

    <div class="profile borde">
      <div class="profile_bio">
            <img  class="profile_photo" src="https://static.cdnpub.info/files/storage/public/5d/65/04bfb0c005h6g6d7i8.jpg" alt="">
            <div class="profile_description">
              <p>@algo</p>
              
              <followers-info :followerInfo="followers" >  </followers-info> 

              <p><strong>Algo mas</strong></p>
              <p class="profile_description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatibus qui? Placeat nam magnam obcaecati, nostrum, quo officia repellendus, cum dolores libero iusto modi? Incidunt quidem exercitationem fugit non praesentium.
              </p>
              <a href="">YesiDev</a>
              </div>
       </div>
               <list-stories :stories="storie"></list-stories>       
    </div>
   
  </main>
</template>

<script>
// @ is an alias to /src
//import Caratula from '@/components/Profile'
import ListStories from "../components/listStories";
import followersInfo from "../components/followersInfo";

export default {
  
  components: {
    ListStories,
    followersInfo
  },
  data(){
    return{
      storie:[
        {img: 'https://source.unsplash.com/random/600x600',
        title: 'historia1'},
        {img: 'https://source.unsplash.com/random/600x601',
        title: 'Storie2'},
        {img: 'https://source.unsplash.com/random/600x602',
        title: 'Storie3'}
      ],
      followers: {
        post:10,
        follow: 1200,
        following: 1
      }
    }
  }
}
</script>
