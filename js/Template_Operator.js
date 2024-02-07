console.log('Template Literals');

let subject = 'Javascript';
let tool = 'VS code';

//변수를 이용해서 문장 만들기. 
//현재 수업은 "Javascript"를 진행하고
//사용하는 툴은 "VS Code"입니다.

let msg = '현재 수업은"'+subject+'"를 진행하고';
console.log(msg);
msg = '사용하는 툴은 "'+tool+'"입니다.';
console.log(msg);

//템플릿문법 : +를 생략하고 직관적으로 보이게..
msg = 
`현재 수업은"${subject}"를 진행하고
사용하는 툴은 "${tool}"입니다.`;
console.log(msg);

//Spread Operator 펼침연산자 1.배열 2.문자열
console.log('Spread Operator');

//배열
let arr1 = [4,5,6];
let arr2 = [1,2,3];
let arr3 = [arr1, arr2];
console.log(arr3); //2차원배열됨
arr3 = [...arr1, ...arr2];
console.log(arr3);

//문자열
let word = "Hello";
//내부적인 처리는 H e l l o
let alphabet = [...word, "J", "S"];
console.log(alphabet);

//Array.isArray(arr3); //isArray는 배열인지 아닌지 체크. true면 배열. 

let user = {
            id : 100,
            name : "Hong",
            age : 20,
            address : "Daegu"
        };
let info = [];
for (let field in user){  
    console.log(field, user[field]);
    //user.field 는 사용 불가. for in은 배열 안의 값을 볼수있는 구문. 기억하기
    //user.field => {field : "js"} 들어있는 값으로 봄.

    //객체를 배열로
    info.push(field);
}
console.log(info);