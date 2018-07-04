<template>
  <header>
      <h1>
          {{ title}} ( visitig counter : {{counter.count}} )
      </h1>    
      <button v-on:click="increaseCounter">Increase Internaly</button>  
  </header>
  
</template>

<script>
//imports
import {bus} from '../index';

//exports
export default {
    props: {
        title : {
            type : String
        },
        counter : {
            type : Object
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        increaseCounter:function(){
            this.counter.count ++;
            this.$emit("increaseCounter", this.counter.count);
            bus.$emit('counterIncrease',  this.counter.count);
        }
    }
}
</script>

<style scoped>

header{
    background-color: lightgreen;
    padding: 10px;
}

h1{
    color : #222;
    text-align: center;
}

</style>


