<template>
    <div>
        <h1 :class="$style.techHeader">Technologies Component</h1>
        <ul>
            <li v-for = "technology in technologies" :key="technology.id" v-bind:value="technology.id">{{technology.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                technologies : [
                        {id:0, name : "TypeScript"} ,
                        {id:1 , name : "VUE-CLI" }  , 
                        {id:2, name : "Vuetify"}
                    ]
            }
        }
    }
</script>

<style module>
    .techHeader{
        color: green;
    }
</style>