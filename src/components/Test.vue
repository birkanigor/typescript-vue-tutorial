<template>
    <div>   
        <h1>Test Component</h1>
        <p >{{internalName}} : Internal Name</p>
        <p >{{externalName}} : external Name</p>
        <p >{{greeting()}} : greeting</p>
        <technology></technology>
    </div>
  
</template>

<script lang="ts">
    import Vue from "vue";
    import Technologies from "./Technologies.vue";

    export default Vue.extend({
        components : {
            "technology":Technologies
        },
        props: ['externalName'],
        data() {
            return {                
                internalName: "Constant from template",
            }
        },
        methods:{
            greeting():string{
                return "Greeting from template";
            },
            changeName(newName:string){
                this.internalName = newName;
            }
        }
    });
</script>

<style scope>
    p{
        font-size: 20px;
        font-weight: bold;
    }

    h1{
        color: purple;
    }
</style>