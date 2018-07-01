import { Person } from "./person";

export class Hero implements Person {
    id: number;
    name: string;

    constructor(name:string, id:number) {
        this.name = name;
        this.id = id;
    }

    heroDetails():string
    {
        return this.id + " : " + this.name; 
    }

    getLastUpdate():string{
        let dt = new Date();
        return dt.toLocaleDateString()+" " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        
    }
  }