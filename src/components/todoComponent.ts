import Vue from 'vue';

export class Todo{
    constructor(){}

    setComponent():void{
        Vue.component('todo-item', {
            props: ['todo'],
            template: '<li>{{ todo.text }}</li>'
        });

        Vue.component('greeting',{
            template : '<p>This is a greeting message from {{name}}<button v-on:click="changeName">Change greeting name</button></p>',
            data : function(){
                return {name : "Igor" , flag : true}
            },
            methods:{
                changeName:function(){                    
                    this.name = this.flag ? "Yaniv":"Igor";
                    this.flag=!this.flag;
                }
            }
        });
    }
}