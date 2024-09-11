

function password(obj){
    if(obj.name === undefined || obj.birthYear === undefined || obj.birthYear.toString().length !== 4 || obj.siteName === undefined){
        return 'Invalid';
    }
    let capital = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let pass = capital + '#' + obj.name + '@' + obj.birthYear;
    return pass;
}

const object = password({name: "kolimuddin", birthYear: 1999, siteName: "google"});
console.log(object);