<template>
    <div>
                
      

        <p><strong>{{username}}</strong></p>
        <p class="profile_description">
        {{ description}}
        </p>
        <a :href="website">  {{website}}</a>

    </div>
</template>


<script>
export default {
    props:{
        username: {
            type: String,
            required: true
        },
        description:{
            type: String,
            default: ""
        },
        website: {
            type: String,
            default : ""
        }
    }
    
}
</script>