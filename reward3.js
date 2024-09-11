

function deleteInvalids(array){
    if(!Array.isArray(array) ){
        return 'Invalid Array';
    }
    let number = [];
    for(let element of array){
      if(typeof element === 'number' && isNaN(element) === false){
      number.push(element);
      }
    }
    return number;
    }

const valids = deleteInvalids([1, null, undefined, 18, 19, NaN, '12', [1,2], {ob: 'lala' }]);
console.log(valids);
