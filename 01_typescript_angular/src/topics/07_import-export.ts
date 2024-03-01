import { Product, taxCalculation } from'./06_function_destructuring';


const shoppingCart: Product [] =[
    {
        description: 'nokia',
        price: 100,
        color: 'black'
    },
    {
        description: 'ipad',
        price: 1150,
        color: 'black'
    }
];

// tax = 0.19

const [total, tax]= taxCalculation({
    products: shoppingCart,
    tax:0.19
});

console.log(total);
console.log(tax);