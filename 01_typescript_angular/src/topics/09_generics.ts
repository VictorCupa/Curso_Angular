//funciones genericas

export function whatsMyType<T>( argunment:T):T{ // con la T definimos que es un tipo generica la funciion

        return argunment;
}
let amistring=whatsMyType<string>('hello world'); // con <string> defino que la función retorna un string
let amiNumber=whatsMyType<number>(100); //defino que la funcion retorna un number
let amiArray=whatsMyType<number[]>([1,2,3,4,5]);// defino que la funcion retorna un array de tipo numero 


console.log(amistring.split('/'));//la funcion .split me permite separar el texto por el caracter que  quiero 
console.log(amiNumber.toFixed());//la funcion
console.log(amiArray.join('-'));//la funcionn(' '));//la funcionn(' '));//la funcionn('-'));//la funcion