// ES6 이전
//재생산을 위한 객체 => 생성자함수 + 즉시실행함수

var Person = (function(){

    function Person(name){ //Person이 생성자함수
        // 객체가 가질 필드를 정의함
        this._name = name;
    }

    //객체가 가질 메소드
    Person.prototype.sayHi = function(){
        console.log('Hi ' + this._name);
    }

    //필드에 접근할 Setter, Getter
    Person.prototype.setName = function(name){
        this._name = name;
    }

    Person.prototype.getName = function(){
        return this._name;
    }
        return Person;
}) (); //정의하자마자 즉시 실행..

let userA = new Person('Hong');
userA.sayHi(); //내부메소드 호출
userA.setName('Adward');
userA.sayHi(); //다시 호출

// SE6 이후. 이거 실핼하려면 앞에거 주석처리 하고 해야됨. - let, const
class Person {
    constructor(name){
        this._name = name; //실제 값을 내장하는 부분은 여기
    }

    sayHi(){
        console.log('Hi, new ' +this._name);
    }

    set name(name){
        this._name = name;
    }
    get name(){
        return this._name; //get만 있으면 읽는거만 가능
    }
}

let userB = new Person('Hong');
userB.sayHi();
userB.name = 'Lee';
console.log(userB.name);
userB.sayHi();