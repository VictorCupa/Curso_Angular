export interface Product{
    description: string;
    price: number;
    color: string;
}
const phone: Product={
    description:'Xiami 8 PRO',
    price:256565,
    color: 'green'
}
const tablet: Product={
    description: "samsung",
    price: 4540,
    color:"white"
}
interface taxCalculationOptions{
    tax: number;
    products: Product[];
}
export function taxCalculation(options:taxCalculationOptions):[number,number] {
    const {tax,products} = options;
    let total=0;

    products.forEach(({price}) =>{
        total+=price
    });
    return [total, total*tax];
}
const shoppingCart =[phone, tablet];
const tax =0.19;//impuesto de los 
// const result=taxCalculation({
//     products: shoppingCart,
//     tax: tax,
// });
const [total, totalTax]=taxCalculation({
    products: shoppingCart,
    tax: tax,
});
console.log('total', total);
console.log('tax', totalTax);

export{};