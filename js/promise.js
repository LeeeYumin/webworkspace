//비동기 작업에 대한 처리가 목적

let test = new Promise((resolve, reject)=>{
    setTimeout(()=> { //setTimeout : 텀을 두고 실행
        console.log('비동기 작업 실행'); 
        reject('작업 성공'); //resolve는 then 작업 성공. reject는 catch 작업 성공 출력.
    }, 1000)    
});

test
.then(data => console.log('then', data))
.catch(err=> console.log('catch', err))
.finally(()=>console.log('작업 끝!')); //2개 주석처리해도 실행됨