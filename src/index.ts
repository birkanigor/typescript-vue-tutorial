import {Hero} from "./hero";
import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import TestComponent from './components/Test.vue';
import * as $ from 'jquery'; 
import {Options, Service} from "./Ajax";
import {Todo} from "./components/todoComponent";

$.ajaxSetup ({ // Disable caching of AJAX responses
  cache: false
});

let hero = new Hero('Krunal-1',0);
console.log(hero.heroDetails());

let hero2 = new Hero('Krunal-2',1);
console.log(hero2.heroDetails());    

let todo = new Todo();
todo.setComponent();

let v = new Vue({
    el: "#app",
    template: `
    <div class="hello-temp">
        Name: <input v-model="myname" type="text">
        <hello-component :name="myname" :initialEnthusiasm="5" />
        <test-component :externalName="initialName" />
    </div>
    `,
    data: { 
      myname: "World" , 
      initialName : "Initial Name"},
    components: {
        HelloComponent,TestComponent
    }
}); 

let service = new Service();
let request = {username: "igor", password:"igor1!"};
let options = new Options("http://54.76.226.97:8888/ipa/apis/json/general/login","post",request);
service.request(options, function (data:any) {
    console.log(data);
    app.setUserGroup( data.userGroupId, data.userId);
});

$('.hello-temp').css({"background-color":"#d2d484"}); 

let app = new Vue({
  el: '#app0', 
  data: {
    userGroup : 0,
    userId : 0,
    message: "",
    buttonText : "Hide The Nessage",
    buttonTextStatus : true,
    userInfo : "",
    todoList: [
      { id:0, text: 'Learn JavaScript' },
      { id:1 , text: 'Learn Vue' },
      { id:2 , text: 'Build something awesome' }
    ]
  },  
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    setUserGroup:function(user_group:number , user_id : number){
      this.userGroup  = user_group;
      this.userId = user_id;
      this.message =  hero2.getLastUpdate() + ' : Hello Vue !!! '; 
      this.userInfo = 'User Group : ' + this.userGroup + " , User-Id : " + this.userId;
    },
    presentMessage:function(){
      this.buttonTextStatus=!this.buttonTextStatus;
      this.buttonText =( this.buttonTextStatus ? "Hide" : "Show" ) + " the message";
    },
    readRefs:function(){
      console.log((<HTMLInputElement>this.$refs.input).value);      
    },
    changeExternal:function(){
      app1.textValue1 = "David";
    }
  }
});

$('#app0').css({"background-color":"#d2d4d8"}); 

let app1 = new Vue({
  el: '#app1',
  //render: h => h(TestComponent)
 /* render(h) {
        return h(TestComponent, {
            props: {
                //apiUrl:this.$el.attributes.apiUrl.value
            }
        })
    }*/
    data:{
      textValue1 : "Igor"
    },
    template:`
              <div>  
                  <test-component  :externalName="textValue1"/>      
                  <button @click="changeInternal">Change Internal</button>           
              </div>  
             `,
    components: { TestComponent  },
    methods :{
      changeInternal(){
        this.textValue1="Nataly";
      }
    }

});

app1.textValue1 = "Yaniv";
