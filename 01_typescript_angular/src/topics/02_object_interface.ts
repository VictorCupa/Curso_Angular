
const skills:string[] =['Bash','Counter','Healing'];// aqui se define un arreglo de tipo texto

interface Character{
    name:string;
    hp:number;
    skills:string[];
    hometown?:string;
}
 const strider:Character = {
    name: 'Strider',
    hp:256,
    skills:['Bash','Counter','Healing'],
 };

 strider.hometown = 'Rivendell';

 console.table(strider);
export{};