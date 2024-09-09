

function mul(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please provide a number';
    }
    const result = num1 * num2;
    return result;
}

const result = mul(5, 'seven');
console.log(result);

function fullName (first, second){
    if(typeof first !== 'string' || second !== 'string'){
        return 'name should be in string';
    }
    const full = first + ' '+ second;
    return full;
}

const full = fullName('raihan', 'kabir');
console.log(full);
