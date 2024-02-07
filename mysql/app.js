const express = require('express');
const app =  express();
const mysql = require('./db.js');
//mysql.executeQuery(); 쓸거임

//application/json
app.use(express.json()); //미들웨어 등록하는 명령어 use
//app.use(function(req, res, next) {}); //매개변수 3개. 이런 방식도 있음~

//application/x-www-form-urlencoded
app.use(express.urlencoded({extended : false})); //확장은 안씀의 false

app.listen(3000, ()=>{
    console.log('Server Start, http://localhost:3000');
});

//전체 조회 get방식
app.get('/customers', async (req, res)=>{ //'/customers 엔드포인트
    let list = await mysql.executeQuery('customerList'); //customerSql.js 의 exports. 필드명이니까 문자열..
    res.json(list); //위에 let list~ 먼저, res.json(list); 는 두번째로 실행순서.
});

//단건 조회
app.get('/customers/:id', async (req, res)=>{
    let customerId = req.params.id; //경로에 선언된 id값으로 대체.. params...
    let info = (await mysql.executeQuery('customerInfo',customerId))[0]; //json 동작 전에 데이터가 와야함.
    //let info = await mysql.executeQuery('customerInfo',customerId);
    //info = info[0];
    res.json(info);
})

//등록
app.post('/customers',async (req, res)=>{
    let data = req.body.param; //객체
    //body까지만 넣어도 되고(쿼리스트링 가능) .param으로 더 들어가도 됨(쿼리스트링 어려움). param 이라고 특정지은 필드에만 등록하겠다~
    let result = await mysql.executeQuery('customerInsert', data);
    res.json(result);    
})

//수정(2가지 방법)
app.put('/customers/:id', async(req, res)=>{ // /customer/:id 하면 404에러뜸
    let result = await updateInfo(req); //updateAll 로 바꿔서도 적용해봄
    res.json(result);
});

async function updateAll(request){
    let data = [ selectedInfo(request.body.param) , request.params.id ]; //set절, id컬럼
    let result = await mysql.executeQuery('customerUpdateAll', data);
    return result;
} //SET 절이 전부 ? 일때

/*
function selectedInfo(obj){
    let delData = ["id", "email"]; //배열로 먼저 만들어놓고..
    let newObj = {};
    for ( let field in obj ){
        if(field == "id") continue;
        newObj[field] = obj[field]; //복사해서 붙여넣기          
    }
    return newObj;
};
*/

function selectedInfo(obj){
    let delData = ["id", "email"]; 
    let newObj = {};
    let isTargeted = null;
    for ( let field in obj ){ // field : id ~ address
        isTargeted = false;
        for (let target of delData){ //안쪽 for문으로 결과를 불러냄..? email 때문에..
            if(field == target){
                isTargeted = true;
                break; //삭제할 대상이 있으면 break 하고 값을 알려줌
            }
        }
        if(!isTargeted){ //삭제대상이 아니면
            newObj[field] = obj[field]; //새로운 객체에 값을 복사한다        
        }
    }
    return newObj;
}; // 터미널 결과 "SET `name` = 'homeSweetHome', `phone` = '010-9999-8888', `address` = NULL\n" + "WHERE id = '2'"

//단일값으로 구성된update문
async function updateInfo(request){
    let data = [ ...getInfo(request.body.param), request.params.id]; //컬럼 : email, phone, address, id 순서.
    let result = await mysql.executeQuery('customerUpdateInfo', data);
    return result;
}

function getInfo(obj){
    let getData = ["email", "phone", "address"]; //이건 컬럼순으로 정해져있음
    let newAry = [];
    for (let target of getData){
        for(let field in obj){
            if(field == target){
                newAry.push(obj[field]);
                break;
            }
        }
    }
    return newAry; //반환을 배열로 하는 이유 : ...펼침연산자 하려고. ["이메일", "전화번호", null] 로 들어갈거임
} // 터미널 "SET email = 'asiana@airport.com', phone = '010-9999-8888', address = NULL\n" + "WHERE id = '2'" 확인됨