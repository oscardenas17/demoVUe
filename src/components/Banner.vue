<template>
    <div>
        <div class="jumbotron banner__about-me">
  <h1 class="display-4"> {{ name}}</h1>
  <p class="lead banner__title">{{ role }}</p>
 
  <p>{{ bio }}</p>
  <p class="lead">
    <router-link 
    :to="redirect" 
    class="btn btn-primary btn-lg"  > Conóceme más
    </router-link>
  </p>
</div>
    </div>
</template>

<script>
export default {
    props:{
        name:{
            type: String,
            default: ""
        },
        role:{
            type: String,
            default:""
    
        },
        bio:{
            type: String,
            default: ""
        },

        redirect: {
            type: String,
            default: "/about"
        }
    }
}
</script>