<template>
<div class="container">
    <span class="skills-list">
        <div class="card" v-for="skill in skills" :key="skill.name">
            <div class="card-body">
                <h5 class="card-title">{{skill.name}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{skill.percentage}}</h6>
                <p class="card-text">{{skill.description}}</p>
            </div>
        </div>
    </span>
   
 </div>
 </template>


<script>
export default {
  props:{
    skills:{
      type: Array,
      required: true
    }
  }
}
</script>
