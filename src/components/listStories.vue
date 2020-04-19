<template>
    <div class="list-stories">
        <div v-for="(storie, i) in stories"  :key="i" class="storie">
            <img 
            class="storie__photo" 
            v-bind:src="storie.img" 
            :alt="storie.title">
            <p>{{storie.title}}</p>
        </div>
    </div>
</template>


<script>
export default {
    props:{
        stories: {
            type: Array,
            required: true
        }
    }
}
</script>