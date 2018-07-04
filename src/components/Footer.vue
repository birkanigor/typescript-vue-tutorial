<template>
    <footer>
        <p>
            {{ copyright }} - {{ counter }}
        </p>
    </footer>
</template>

<script>
//importa 
import {bus} from '../index';

//exports
export default {
  data(){
      return{
        copyright : "Copyright 2018 (c)",
        counter : 0
      }
  },
    created(){
        bus.$on('counterIncrease', (data) => {
            this.counter = data;
        });
    }
}
</script>

<style scoped>
    footer{
        background: #222;
        padding: 6px;
    }

    p{
        color: lightgreen;
        text-align: center;
    }
</style>