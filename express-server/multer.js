const multer = require('multer');
const express = require('express');
const app = express();

const storage = multer.diskStorage ({ //multer의 저장소 필요
    destination : function(req, file, cb){ //저장경로 destination
        cb(null, 'files/'); //같은 폴더 안에 있음..
    },
    filename : function(req, file, cb){
        let rename = (new Date()).getMilliseconds() + file.originalname; //유니크한 값 줄 수 있게 붙여줌
        cb(null, rename); //단계적으로 실행해야하기 때문에 콜백..
    }
});

const upload = multer({storage : storage}); //일단 객체로 먼저 변환시킴

const staticUrl = '/images';
app.use(staticUrl, express.static('files'));

//싱글
app.post('/profile', upload.single('avatar'),(req, res)=>{
    // <img src=""> src 속성 사용시 가져야 할 값(경로)을 반환
    let imgUrl = `${staticUrl}\/${req.file.filename}`;
    res.send(imgUrl);

});

//멀티 (내부의 값이 배열로...)
app.post('/photos', upload.array('list'),(req, res)=>{ 
    let imgUrlList=[];
    for(let file of req.files){ //반복문 필요.
        let imgUrl = `${staticUrl}\/${file.filename}`;
        imgUrlList.push(imgUrl);
    }
    res.send(imgUrlList);
});

app.listen(4000, ()=>{
    console.log('Server Start : multer');
});