const fs = require('fs');
 const data = 'Hello, Node.js World';

// fs.writeFile('./sample.txt', data, 'utf-8', (err)=>{
//     if(err) throw err; //에러 날 경우 던져도 됨
//     console.log('job completed'); //내부에서 처리
// })

fs.readFile('./sample.txt','utf-8', (err, datas)=>{
    if(err) throw err;
    console.log(datas); //data 썼다가 const data 랑 헷갈릴 수 있어서 수정함
})