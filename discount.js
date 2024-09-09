

/*
* upto 100: 100
* upto 101 - 200: 90
* more than 200: 70
*/

// function discountedPrice(quanity){
//     if(quanity <= 100){
//         const total =  quanity * 100;
//         return total;
//     }
//     else if(quanity <= 200){
//         const total = quanity * 90;
//         return total
//     }
//     else {
//         const total = quanity * 70;
//         return total;
//     }
// }

// const discount = discountedPrice(101);
// console.log(discount);


// --------multi-layerd discount ---------

function layeredDiscount(quanity){
   const first100Price = 100;
   const second100Price = 90;
   const remainPrice = 70;
   if(quanity <= 100){
    const total = quanity * first100Price;
    return total;
   }
   else if (quanity <= 200){
    const first100Total = 100 * first100Price;
    const remainingQuantity = quanity - 100;
    const remainingTotal = remainingQuantity * second100Price;
    const total = first100Total + remainingTotal;
    return total;
   }
   else {
    const first100Total = 100 * first100Price;
    const second100Total = 100 * second100Price;
    const remainingQuantity = quanity - 200;
    const remainingTotal = remainingQuantity * remainPrice;
    const total = first100Total + second100Total + remainingTotal;
    return total;
   }
}

const discount = layeredDiscount(105);
console.log(discount);