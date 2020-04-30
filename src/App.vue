<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
 
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="link in links" :key="link.redirect ">
            <router-link :to="link.redirect" class="nav-link" >
              {{ link.name}}
            </router-link>
          </li>
      
        </ul>
      </div>
    </nav>

    <router-view />
    
    <footer class="main-footer container">
      <div>Práctica Vue.js 2020 @OscarYesiDev</div>
    </footer>
   
   
  </div>
</template>


<script>
  export default{
    data(){
      return{
        links:[
          {
            name: "Inicio",
            redirect: "/"
          },
          {
            name: "Acerca de",
            redirect: "/about"
          },
          {
            name: "Trabajos",
            redirect: "/works"
          }
        ]
      }
    }
  }
</script>

