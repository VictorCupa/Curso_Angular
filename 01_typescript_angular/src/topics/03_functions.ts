
function addNumbers(a:number,b:number):number {
    return a + b;
}

const addNumbersArrow=(a:number,b:number):string=>{
    return`${a + b}`;
}
const result:number=addNumbers(1,2);
const result2:string=addNumbersArrow(1,2);

function multiply(x:number,y?:number,base:number=5):number{
    return x * base ;

}
const resultMultiply=multiply(3);
// console.log(resultMultiply);
// console.log(result);
// console.log(result2);


interface Character{
    name:string;
    hp:number;
    showHp:()=>void;
}
const healCharacter=(character:Character, amount:number)=>{

    character.hp += amount;
}
const strider:Character={
    name:'Strider',
    hp:50,
    showHp(){
        console.log(`puntos de vida ${this.hp}`);
    }
}
    healCharacter(strider,60);
    strider.showHp();

export {}