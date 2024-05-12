import Square from "./square.js";
import {PI} from "./square.js";

const mySquare = new Square(45);
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

try {
    const res = await test();
    console.log(res);
} catch (e){
    console.log(e);
}
console.log('func test called');