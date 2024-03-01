import { Passenger } from './11_optional_chainings';


export interface Passenger{
    name: string;
    children?:string[];
}
const Passenger1: Passenger={
    name:'victor',

}
const Passenger2: Passenger={
    name:'alfonso',
    children:['salome', 'dana'], 
}
//preguntar cuantos hijos tiene

const printChildren =(Passenger: Passenger) => {
    const howManyChildren = Passenger.children?.length || 0 ;
    console.log(Passenger.name, howManyChildren);
}
printChildren(Passenger1)
