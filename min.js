

const prices = [20000, 16000, 10000, 120000];

function getMin(numbers){
    let min = numbers[0];
 for(const num of numbers){
   if(num < min){
    min = num;
   }
 }
 return min;
}
const cheap = getMin(prices);
console.log('cheapest one is', cheap);


const mobiles = [
    {name: 'samsung', price:20000, camera:'12mp', color: 'black'},
    {name: 'xoami', price:18000, camera:'12mp', color: 'black'},
    {name: 'oppo', price:30000, camera:'12mp', color: 'black'},
    {name: 'Iphone', price:100000, camera:'12mp', color: 'black'},
    {name: 'Walton', price:15000, camera:'12mp', color: 'black'},
    {name: 'HTC', price:25000, camera:'12mp', color: 'black'},

]

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
      if(phone.price < min.price){
        min = phone;
      }
    }
    return min;
}

const cheap1 = getCheapestPhone(mobiles);
console.log('cheapest phine is:', cheap1);