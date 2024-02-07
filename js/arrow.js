console.log('arrow.js');

//함수 선언식 => var 선언자
function hello(name){
    console.log(name);
}

function hello(msg){
    console.log('출력 :' + msg);
}

//함수 표현식 => const 선언자 (중복선언 방지, 정확하게 이 다음부터 실행되게 제어. 13줄 위에서는 호출 불가)
//변수에 함수를 집어넣는게 함수 표현식임. 함수 호출전에 선언하자.
const hello2 = function(name){
    console.log('hello, ' + name);
}

const hello3 = (name) => console.log('hello, ' + name); //동일한 표현을 함수 표현식으로 바꿈

hello3('Javascript');

//화살표함수 문법
let msg = (msg) => console.log('result, ' + msg);
msg = () => console.log('Hellom World'); //매개변수 갯수 상관없이 괄호 써주는게 좋음. 1개일때는 생략 가능.
msg = (x,y) => console.log(x+y);

msg = (x,y) =>{
    let result = x + y;
    console.log(result); //2줄 이상은 중괄호 붙여준다(범위확인위해)
}
console.clear();

//화살표함수와 this 의 연관성 => 2개는 무관하다..? 
//화살표함수 addEventListener 사용X. 화살표함수로는 메소드만들지말것
let array=[1,3,5,7];

array.forEach(function(value, idx){
    console.log(value, this);
});

array.forEach((value, idx)=>{
    console.log(value, this);
})

