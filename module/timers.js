// 2024-01-26 15:03:50 을 출력하는 별도의 함수 만들기. 19자 출력

function format(value){
    return ('0' + value).slice(-2); //2자리 출력
}

function getDateTime(){
    let today = new Date(); //이건 많이 쓰니까 기억하기
    let year = today.getFullYear();
    let month = format(today.getMonth() + 1);
    let day = format(today.getDate());

    let hour = format(today.getHours());
    let min = format(today.getMinutes());
    let sec = format(today.getSeconds());

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}
console.log(getDateTime());

const timeout = setTimeout(()=>{
    console.log(getDateTime());
}, 3000);

//clearTimeout(timeout);

let count = 0;
const interval = setInterval(()=>{
    console.log('count', count++); //++ 빼면 무한루프. 콘솔창 ctrl C는 강제종료
    if(count == 5){
        clearInterval(interval);
    }
    console.log(getDateTime());
}, 2000);

setImmediate(()=>{
    console.log('setImmediate', getDateTime());
});

console.log('마지막 코드');