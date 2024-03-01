
function addNumbers(a:number,b:number):number {
    return a + b;
}
const result:number=addNumbers(1,2);
//console.log(result);
//******************************************************************************/
const addNumbersArrow=(a:number,b:number):string=>{
    return`${a + b}`;
}
const result2:string=addNumbersArrow(1,2);
//console.log(result2);
//******************************************************************************/
function multiply(firtsNumber:number,secondNumber?:number,base:number=5){
    return((firtsNumber+secondNumber)*base);
}
const multiplyResult=multiply(3,12);
//console.log(multiplyResult);
//******************************************************************************/

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
    hp:150,
    showHp(){
        console.log(`puntos de vida ${this.hp}`);
    }
}
    healCharacter(strider,60);
    strider.showHp();

export {}