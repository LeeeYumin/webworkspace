const defaultNum = 1;

function add(num1, num2){
    return num1 + num2;
}

function minus(num1, num2){
    return num1 - num2;
}

function multi(num1, num2){
    return num1 * num2;
}

function devide(num1, num2){
    return num1 / num2;
}

//module.exports = {
export default { //객체 자체에 대한 이름은 없고 째로 반환됨
    defNum : defaultNum, //외부에 알림.
    add, //이름은 add : 변수 정보도 add. 뒤는 복사개념..
    minus, // "minus" : minus 2개가 같으면 중복나열하지 말것
    multi,
    devide
} // 이 이상 코드는 존재 X. 이게 마지막에 와야함.