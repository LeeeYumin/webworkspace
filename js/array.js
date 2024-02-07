console.log('array.js');

//sort()    : 정렬함수 - 오름차순
//reverse() : 정렬함수 - 내림차순

let fruits = ["Banana","Orange","Apple","Mango"];

fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

let points = [40, 100, 1, 5, 25, 10];
//1, 5, 10, 25, 40, 100 말고 1, 10, 100, 25, 40, 5 순으로 출력됨
points.sort();
console.log(points);

points.sort(function(a,b){ //콜백함수 만들어서 넣어주면 된다
    //오름차순
    return a-b;
    //내림차순 return b-a;
});

//filter() : 기존 배열을 일정 기준 통과하면 새로운 배열을 만들어줌
let words = ['spary', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let result = words.filter((value, idx)=>{
    //return 테이터 타입은 boolean
    //return value.length > 6;
    return value.indexOf('a') > -1; //내부에 단어 포함된거 확인
});
console.log(result);
//사용할 시점에 임의의 변수에 넣어 콘솔로 찍어보면 확인가능함

let userList=[{id : 100, name : 'Hong'},
              {id : 200, name : 'Kong'},
              {id : 300, name : 'Han'}];
let newList = userList.filter(obj => {
    return obj.name.indexOf('g') > -1;
});
console.log(userList, newList);

newList.forEach(obj => { //forEach
    obj.age = 20;
})

console.log(userList, newList);
//filter()는 객체가 아닌 타입에는 참조타입에는 동일한 데이터 가짐.
//배열 내부에 참조타입(중간 프로젝트 할때 int, double 보다는 vo 사용빈도 높음)이 있으면 예외 일으키는 경우 많음

//map() : 기존 배열을 일정 기준 통과하고 조작을 해서 새로운 배열을 만들어줌
//filert()는 참거짓으로 갯수줄이는게 되지만 map()은 갯수줄이는게 안되고 새로운 형태로 만들어서 리턴. 원데이터는 같지만 새로운 형태...
userList=[{id : 100, name : 'Hong'},
          {id : 200, name : 'Kong'},
          {id : 300, name : 'Han'}];

let newArray = userList.map(function(obj){
    //return 데이터 타입에 제한 없음
    return obj.id < 300 ? obj.name : null; 
});
console.log(userList, newArray);

console.clear;

newList = userList.map((obj)=>{
    return {
        id : obj.id,
        name : obj.name 
    };
});
//객체를 복사할때.. (참조타입을 기반으로 한 경우 배열을 복사할때는 새롭게.. 복사해서.......)

console.log(userList, newList);

newList.forEach(obj => {
    obj.age = 20;
})

console.log(userList, newList);

//reduce() : 누적합계
let nums = [50, 12, 999, 6, 100];
let sumRes = nums.reduce(function(total, value){
    return total + value;
}, 0);
//리턴을 한게 다음 콜백함수에 누적되어 감. 초기값은 마음대로 조정가능. 여기서는 0으로 줌.

console.log(sumRes);

