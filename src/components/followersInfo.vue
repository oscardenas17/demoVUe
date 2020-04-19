<template>
    <div class="followers-info">
        <p>{{ followerInfo.posts}} Post</p>
        <a href=""> {{ followerInfo.follow}}  Following </a>
          <a href=""> {{ followerInfo.following}} Follower</a>
    </div>
</template>


<script>
export default {
        props:{
           followerInfo: {
               type: Object,
               required: true
           }
        }
}
</script>