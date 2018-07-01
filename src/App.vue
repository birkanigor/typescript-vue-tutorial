<template>
  <div>
    <app-header></app-header>
    <app-technologies></app-technologies>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Technologies from './components/Technologies.vue';

export default {
  components:{
    'app-header':Header,
    'app-footer' : Footer,
    'app-technologies' : Technologies
  },
  data(){
      return{
          
      }
  }
}
</script>

<style>

</style>


