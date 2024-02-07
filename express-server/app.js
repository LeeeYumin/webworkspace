const fs = require('fs');
const express = require('express');
const userRouter = require('./user.js'); //모듈 아니니까 파일로 인식시킴. 경로로 찾아감.
const app = express(); //서버 관리하는 객체 필요

//미들웨어 (한쪽으로 모으는 게 좋음)
//-- Request Data Process

//application/json
app.use(express.json({ //express는 최소한의 기능. 나머지는 추가해서 써야됨.. 위치는 상관없음
    limit : '50mb'
}))

//쿼리스트링 컨텐트타입 application/x-www-form-urlencoded
app.use(express.urlencoded({extended : false}))

//Error (내장/외장 2가지 방식)
app.use(function(err, req, res, next){
    console.log(err);
    res.status(500).json({statusCode : res.statusCode, //response 가 가지고 있는 상태코드를 변경하는 것
                          errMessage : err.message})
});

app.get('/defaultErr',(req, res)=>{
    throw new Error('기본 핸들러 동작');
})

app.get('/customErr', (req, res, next)=>{
    next(new Error('Process Fail! Check Data!')); //next가 미들웨어 호출
})


//static
app.use(express.static('./files')); //http://localhost:3010/cat1.jpg 처럼 확장자까지 불러와야됨.
app.use('/public', express.static('./files')); //파일경로까지 매핑.

//Data Loding
const jsonFile = fs.readFileSync('./db.json');
const jsonData = JSON.parse(jsonFile); //문자로 넘어왔을 때? 객체로 인식시키는 작업 필요. parse는 바꾸는 작업이라고 생각하기.

//db접속하는 쿼리문..함수.... 객체 타입의 데이터에서 검색하는 부분 구현..
const getData = (target, where)=>{
    let data = jsonData[target];
    if(Array.isArray(data)){
        let list = data;
        for(let obj of list){
            if(obj.id == where){
                data = obj;
            }
        }
    }
    return data;
}

app.use('/user', userRouter);

app.listen(3010, ()=>{ //listen : 실행하는 명령어
    console.log('http://localhost:3010');
})

app.get('/',(req, res)=>{ //listen 이 관리하는... 메소드... '/'는 경로. 콜백함수는 req, res 를 받음.
    res.send('Hello, Express.js World');
})

//전체조회
app.get('/posts', (req, res)=>{ // /posts가 엔드포인트.
    let data = getData('posts'); //자원요청 (수행하고자 하는 기능)
    res.json(data); //res.send()도 가능. json이란 형태로 돌려주겠다는 뜻
});

//단건조회
app.get('/posts/:id', (req, res)=>{ //?말고 :로 위치설정. :는 경로의 변수라고 생각하기. params.
    let postId = req.params.id; //req 객체의 params. 바로 위에서 id 선언? 했기 때문에 .치면 id 뜨는 거임
    let data = getData('posts', postId);
    res.json(data);
});


//등록
app.post('/posts', (req, res)=>{
    let data = req.body; //post로 데이터를 가져올 경우 body로 등록...
    console.log('등록', data);
    res.json(data);
});

//수정
app.put('/posts/:id', (req, res)=>{
    let postId = req.params.id; //경로는 params
    let data = req.body; //수정하는 정보는 body에서. body는 모든 데이터. 부분적으로 가져오고싶다면 [ ] 이렇게 추가로 사용.
    console.log('수정', postId, data);
    res.json({id : postId, data});
});

//삭제
app.delete('/posts/:id', (req, res)=>{
    let postId = req.params.id;
    console.log('삭제', postId);
    res.sendStatus(203); //삭제는 돌아올 값이 사라진 데이터. 상태코드 보여주기.. 203 Non-Authoritative Information
});

//전체조회 - comments
app.get('/comments',(req, res)=>{
    let data = getData('comments');
    res.json(data); 
})

//단건조회 - comments
app.get('/comments/:id', (req, res)=>{
    let commentsId = req.params.id;
    let data = getData('comments', commentsId);
    res.json(data);
})

//조회 - profile
app.get('/profile', (req, res)=>{
    let data = getData('profile');
    res.json(data);
});

//*검색을 포함하는 경우 -> QueryString
// list[0].id=100&list[0].name=Hong&...
app.get('/search',(req, res)=>{
    let keywards = req.query; //쿼리는 객체 타입으로 들어감 (내부에 들어가는 필드 구성이 제한적이지 않음)
    console.log('검색조건 구성', keywards);
    res.json(keywards);    
});