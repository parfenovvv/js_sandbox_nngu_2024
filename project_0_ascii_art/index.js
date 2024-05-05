// console.log('hello, world!!!');  

const art = require('ascii-art'); 
art.font('Hello, nodeJS', 'Doom', (err, renderredText)=>{
    if(err) {
        return; 
} 
console.log(renderredText); 
}
); 