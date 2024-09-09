const disha = 40;
const salman = 60;

if(disha > salman){
    console.log('Disha will get the strawberry');
}
else{
    console.log('salman will get the strawberry');
}


function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}


const max1 = getMax(10, 30);
const max2 = getMax(10, 40);
const lastMax = getMax(max1, max2);
console.log(lastMax);

// =====------max 3 ---------

const jim = 68;
const kim = 58;
const din = 78;
if(jim > kim && jim > din){
    console.log('jim is the boss');
}
else if(kim > jim && kim > din){
    console.log('kim is the boss');
}
else{
    console.log('din is the boss');
}


const max = Math.max(12,1,2,3);
console.log(max);