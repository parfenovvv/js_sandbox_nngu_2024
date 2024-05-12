const Square = require('./square').Square; //подключили квадрат
const PI= require('./square').PI;

const mySquare = new Square(4);
console.log(`PI=${PI}`);
console.log(`Area: ${mySquare.area()}`);



function test() {
    return new Promise((resolve, reject) =>{
        if(Boolean((new Date()).getSeconds()%2)){
            resolve('Success');
        } else {
            reject('Error');
        }
    });
}

//
// test().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// }).finally(()=>{
//     console.log('func test called');
// });


