function classDecorator (
    constructor:any
){
    return class extends constructor{
        newPropierty ='new porpierty';
        hello = 'override';
    }
}



@classDecorator()
export class SuperClass {
    public myPropierty: string ='ABC1234';

    print(){
        console.log('Hello world!');
    }
}

console.log(SuperClass);

const myClass = new SuperClass()
console.log(myClass);