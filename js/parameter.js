// Default Function Parameter
function getComment(user = 'Anony', msg = 'no comment'){
    let result = `${msg}, from ${user}`;
    console.log(result);
}

getComment('Han', 'Today is...');
getComment('Adward');
getComment(undefined, 'Hello, World');
getComment(); //아무것도 안넣어도 최소한의 기능은 하게끔... 디폴트값은 가질 수 있게 해주기

// Rest Parameter 1.가장 마지막에 위치할 것 2.이건 배열임
// 더하는 수의 제한이 없는 더하기 계산
function sum(x=0, y=0, ...args){ //...args는 제일 마지막에 존재함. 이거 자체가 배열임.
    let result = x + y;
    for(let num of args){
        result += num;
    }
    return result;
}

console.log(sum(1,2));
console.log(sum(10,20,30,40));

let ary=[1,2,3,4,5,6,7];
console.log(sum(...ary));
//값이 들어갈 위치에 spread operator 가 들어가면 배열로..