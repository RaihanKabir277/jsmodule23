

function monthlySavings(arr, livingCost){
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return 'Invalid';
    }
    let totalIncome = 0;
    for(let array of arr){
        if(array >= 300){
            let tax = array * 0.2;
            totalIncome += array - tax;
        }
       else{
        totalIncome += array;
       }
    }
    let savings = totalIncome - livingCost;
    if(savings >= 0){
        return savings;
    }
    else{
        return 'earn more';
    }
}

const income = monthlySavings([1000,2000,3000], 5400);
console.log(income);