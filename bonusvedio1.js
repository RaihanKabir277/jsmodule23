

const student = {
    name:'Raihan kabir',
    id: 221,
    address: 'here there',
    isSingle: true,
    friends: ['apu', 'raaz', 'salman', 'aamir'],
    movies: [{name: 'no. 1', year: 2015},{name: 'king khan', year: 2017,}],
    act:function(){
        console.log('acting like shakib khan')
    },
    car: {
        brand: 'tesla',
        proce: 50000000,
        made: 2025,
        manufacture: {
            name: 'tesla',
            ceo : 'Elon mask',
            country: 'usa',
        }
    }
}

// console.log(student.car);
// console.log(student.act());

//    array ------------------

const products = [
    {name: 'phone', price: 12000},
    {name: 'laptop', price: 32000},
    {name: 'airbud', price: 2000},
]
// products[0];
// products[1];

// const products = [15, 56, 87]

const products1 =  {
    '0': 15,
    '1': 56,
    '2': 87,

}

// --------arguments facts ----------

function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
}
add(12,13,45,89,78);
