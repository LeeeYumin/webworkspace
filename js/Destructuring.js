console.log('Destructuring');

//Object 구조분해할당

function getUserInfo(){
    return {
        firstName : 'John',
        lastName : 'Doe',
        age : 37,
        email : 'john@gmail.com',
        city : 'New York',
        country : 'USA',
        info : function(){
            return 'My name is ' + this.lastName;
        }
    };
}

let user = getUserInfo();
console.log(user);
console.log(user.info());
//리턴되는 객체를 변수에 담는다

//필요한 정보만 가져온다
let {firstName, lastName, info} = getUserInfo();
console.log(firstName, lastName);
console.log(info()); //함수로 변환돼서 undefined

//Array
let ary = [1,2,3];

let [x, y, z] = ary;
console.log(x, y, z);

let [a, b] = ary;
console.log(a, b);

let [e, f, g, h] = ary;
console.log(e, f, g, h);