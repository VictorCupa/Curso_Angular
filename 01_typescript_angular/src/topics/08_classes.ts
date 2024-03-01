//import { Person } from './08_classes';


export class Person{
    // public name: string;
    // public address: string;

    constructor(
        public firtsName:string,
        public lastName:string,
        public address?:string,
        ){
        // this.name = name;
        // this.address =address;
    }
}

// export class Hero extends Person{
//     constructor (
//         public alterEgo:string,
//         public age: number,
//         public realName:string
//     ){
//         super(realName,'cali');
//     }
// }

export class Hero{
    
    constructor (
        public alterEgo:string,
        public age: number,
        public realName:string,
        public person:Person,
    ){
      // this.person =new Person(realName);
    }
}
const tony =new Person('tony','stark','new york');
const ironman = new Hero('ironman',45,'tony',tony);

console.table(ironman);