const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

// application/x-www-form-urlencoded
const defaultParser = express.urlencoded({extended : false}); //내장되어 있는거 쓸거라서 확장X

// application/json
const jsonParser = express.json();

//app.use(defaultParser); //모든 라우터에 적용.. 전역...
app.use(jsonParser);

//특정 라우터에 적용
app.get('/search', defaultParser, (req, res)=>{
    let data = req.query.keyword;
    res.send(data + ', 검색결과');
});
// /search?keyword=${value} 사용자는 이렇게 접근

app.post('/info', defaultParser, (req, res)=>{ //post는 body 쪽으로 값 들어옴
    let data = req.body.name;
    res.send('welcome, ' + data);
});
// /info => method:post, body:name=${value}

app.post('/message', (req, res)=>{
    let data = req.body.param; //param은 객체 타입
    res.send(data.title + ', ' + data.content)
});
// /message => method:post, body: {"param" : {"title" : "","content" : ""}}

app.listen(5000, ()=>{
    console.log('Server Start');
})

let sessionSetting = session({
    secret : 'Have$A!@Nice_day', //암호화할때 고유값. 서버별로 달라야됨. 하드코딩하면안됨..
    resave : false, //계속 저장할건지?
    saveUninitialized : true,
    cookie : {
        httpOnly : true, //자바스크립트로 접근못하게 설정
        secure : false, //프로토콜이 https 일때만 동작하도록 제한걸기
        maxAge : 60000 //밀리세컨드
    }
});

app.use(sessionSetting);

app.post('/login', (req, res)=>{
    const {id, pwd} = req.body;
    if(!req.session.isLogin != undefined){
        req.session.user = id;
        req.session.isLogin = true;
    }
    req.session.save((err)=>{
        if(err) throw err;
        res.redirect('/'); //맨 첫페이지로 돌림
    });
});

app.get('/logout',(req, res)=>{
    req.session.destroy();
    res.redirect('/');
});

const corsOptions = {
    origin : 'http://127.0.0.1:5500', // *는 사용X. 이거 빈칸이면 정책블록으로 f12콘솔 에러문구뜸
    optionsSuccessStatus : 200 //상태코드
};

app.use(cors(corsOptions)); //cors 설정

app.get('/', (req, res)=>{
    res.json(req.session);
});