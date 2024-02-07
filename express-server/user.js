const express = require('express'); //라우터를 등록해서 돌려주는 형태
const router = express.Router(); //서버 아니고 라우터임 (함수 호출X)

// user/
router.get('/',(req, res)=>{
    res.send('회원정보조회');
})

//app.js에서 app.use('/user', userRouter); 해주고 이거 씀
// user/insert
router.post('/insert', (req, res)=>{
    res.send('회원 등록');
})

// user/update
router.put('/update', (req, res)=>{
    res.send('회원 수정');
})

// user/delete
router.delete('/delete', (req, res)=>{
    res.send('회원 삭제');
})

module.exports = router; //router는 객체로 그대로 exports 시키면 됨