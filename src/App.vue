<template>
  <div>
    <app-header v-bind:title="title" v-bind:counter="counter" v-on:increaseCounter="increaseCounterGlobaly($event)"></app-header>
    <button v-on:click="counter.count++">Increase Externaly</button> 
    <hr>
    <app-technologies v-bind:technologies="technologies"></app-technologies>
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
      return {
          technologies: [
                {name: 'VUE-JS', speciality: 'Vue Components', show: false},
                {name: 'HTML5', speciality: 'HTML Wizardry', show: false},
                {name: 'JavaScript', speciality: 'Click Events', show: false},
                {name: 'JQuery', speciality: 'Conditionals', show: false},
                {name: 'TypeScript', speciality: 'Webpack', show: false},
                {name: 'Vuetify', speciality: 'Data Diggin', show: false}
            ],
            title : "Client Technologies",
            counter : { count : 10}
      }
  },
  methods:{
    increaseCounterGlobaly:function(newCounter){
      this.counter.count =newCounter;
    }
  }
}
</script>

<style>

</style>


