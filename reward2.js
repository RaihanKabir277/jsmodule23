

function checkNamme(name){
    if(typeof name !== 'string'){
        return 'Invalid text';
    }
    let lastLetter = name.slice(-1).toLowerCase();
    // let lastLetter = name[name.length - 1];
    // let result = false;
    let vowel = ['a','e','i','o','u','w'];
    // for(let char of vowel){
    //     if(char === lastLetter){
    //         result = true;
    //     }
    // }
    let result = vowel.includes(lastLetter);
    return result ? 'good name' : 'Bad name';
}

const letter = checkNamme('salman');
console.log(letter);

