
const heights = [65, 68, 60, 72, 78, 65, 66];

function getMax(numbers){
    
    let max = numbers[0];
    for(let num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}
const max = getMax(heights);
console.log('max value is', max);