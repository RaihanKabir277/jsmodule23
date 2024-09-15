
function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input";
    }
  let remainingBalance = 0;
  let tax = 0;
  remainingBalance = income - expenses;  
  tax = remainingBalance * 0.20;
  return tax;
}

function calculateTax(income, expenses) {

    if(income < 0 || expenses < 0 || expenses > income){
    
    return "Invalid Input";
    
    }
    
    let remainingBalance = 0;
    
    let tax = 0;
    
    remainingBalance = income - expenses;
    
    tax = remainingBalance * 0.20;
    
    return tax;
    
    }



function sendNotification(email) {
    if(!email.includes('@')){
        return "Invalid Email";
    }
    const [name, domain] = email.split('@'); 
    let add = name + ' ' + 'sent you an email from' + ' ' + domain;
    return add;
 }
 
 
function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return 'Invalid Input';
    }
   for(let element of name){
    if(!isNaN(element)){
        return "true";
    }
   }
   return "false";
}



function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || Array.isArray(obj)){
        return "Invalid Input";
    }
   const totalScore = obj.testScore + obj.schoolGrade;
   if(totalScore >= 60 && obj.isFFamily === true){
    return "true";
   }
   return "false";
}


function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }
    let sum =0;
    let avg =0;
    let waiting =0;
    serial = serialNumber - 1;
    const length = waitingTimes.length
    for(let times of waitingTimes){
      sum += times;
    }
   avg = Math.round(sum / length);
   waiting = avg * (serial - length);
   return waiting;
}












