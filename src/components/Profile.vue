<template>
  <section>
      <h1>
          {{ symbol+username }} 
      </h1>
  </section>
</template>

<script>
    export default{
        name: "Caratula",
        props: {
            username: {
                type: String,
                default: ""
            }
        },
        data(){
            return{
                symbol: "@"
            };
        }
    }
</script>

<style lang="scss">
    
</style>