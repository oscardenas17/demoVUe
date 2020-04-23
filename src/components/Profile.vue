<template>
    <div class="profile borde">
      <div class="profile_bio">
            <img  class="profile_photo" :src="profile.photo" alt="">
            <div class="profile_description">
              <p> @{{profile.username}}</p>

                <followers-info :followerInfo="followers" >  </followers-info> 

                <profile-description 
                :username="profile.username" 
                :description="profile.description"
                :website ="profile.website">
                </profile-description>

              </div>
       </div>
               <list-stories :stories="storie"></list-stories>       
    </div>
</template>

<script>
import ListStories from "./listStories";
import followersInfo from "./followersInfo";
import ProfileDescription from "./profileDescription";

    export default{
        components: {
        ListStories,
        followersInfo,
        ProfileDescription
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
      },
      profile: {
        username: "Yesid Cárdenas",
        description: "desarrollo web, apps, marketing digital.",
        website: "cardenasingenieros.com",
        photo: "https://static.cdnpub.info/files/storage/public/5d/65/04bfb0c005h6g6d7i8.jpg"
      }
    }
  }
    }
</script>

<style lang="scss">
    
</style>