

// problem 1---------

function calculateMoney(ticketSale){
    if(ticketSale < 0 || typeof ticketSale !== 'number'){
        return 'Invalid number please give me a valid one';

    }
    let result = ticketSale *120 - (500 + 8 *50);
    return result;
}

const test = calculateMoney(10);
const test2 = calculateMoney(125700);
const test3 = calculateMoney(10260);
const test4 = calculateMoney(-130);

// console.log('Remaining profit :\n',test,test2,test3,test4);
console.log('Remaining profit :\n' + test + '\n' + test2 + '\n' + test3 + '\n' + test4);
