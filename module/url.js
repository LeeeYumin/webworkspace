let data = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash';

//레거시 API : 일반 객체로 인식.
const url = require('url'); //별도의 require 진행
let legercy = url.parse(data); //정해진 parsing 으로 작업. 기능은 사용가능하고 지원은 끊길예정
console.log(legercy);

//WHATWG (웹표준) API : 클래스 기반. 내장된거. 콘솔창에 origin 추가됨
const whatwg = new URL(data);
console.log(whatwg);
console.log(whatwg.searchParams instanceof URLSearchParams); //searchParams는 필드. 특정 클래스로 정의되어 있음. URLSearchParams는 인스턴스.
console.log(whatwg.searchParams.get('query')) //내부에 있는 걸 꺼내는형태?