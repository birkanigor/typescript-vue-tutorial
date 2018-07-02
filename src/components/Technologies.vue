<template>
    <div id = "technologies">
        <ul>
            <li v-for="technology in technologies" v-bind:key="technology.name" v-on:click="technology.show = !technology.show">
                <h2>
                    {{technology.name}}
                </h2>
                <h3 v-show="technology.show">
                    {{technology.speciality}}
                </h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        technologies:{
            type: Array,
            required : true
        }
    },
    data(){
        return{
                    
        }
    }
}
</script>

<style scoped>
#technologies{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
    color: #1b0d87;
}    
</style>