


const products = [

    {name: 'shampo', price: 300 },
    {name: 'chiruni', price: 100 },
    {name: 'shirt', price: 700 },
    {name: 'pant', price: 1200 },
]

function getTotal(products){
    let sum = 0;
for(product of products){
  sum += product.price;
}
return sum;
} 

const total = getTotal(products);
console.log('total ajke khoroch korlam :',total);

// -------------advanced--------

const products1 = [

    {name: 'shampo', price: 300,  quanity:5 },
    {name: 'chiruni', price: 100, quanity:3 },
    {name: 'shirt', price: 700 ,  quanity:5 },
    {name: 'pant', price: 1200 ,  quanity:1 },
]

function cartTotal (products1){
    let sum = 0;
    for(const product of products1){
        const thisProductCost = product.price * product.quanity;
      sum += thisProductCost;
    }
    return sum;
}

const cost = cartTotal(products1);
console.log(cost);