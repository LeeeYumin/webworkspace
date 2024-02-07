const crypto = require('crypto');
const { resolve } = require('path');
const data = 'pw1234';

let encData = crypto.createHash('sha512') //알고리즘
                    .update(data)
                    .digest('base64'); //64자리 (실제 테이블에 들어가는 값)

console.log(data, encData);

encData = crypto.createHash('sha512') 
                    .update(data)
                    .digest('hex'); //base64보다 긴 길이

console.log(data, encData);

// salting 암호화 기법 (의미있는값 사용X)
const createSalt = ()=>{
    return new Promise((resolve,  reject)=>{
        crypto.randomBytes(64, (err, buf)=>{ //64 : 랜덤한거 얼마나 돌릴지. buf : 값을 가지고 있는쪽
            if(err) reject(err);
            resolve(buf.toString('base64'));
        })
    })
}

const createCryptoPassword =
 async(plainPassword)=>{
    const salt = await createSalt(); //await 붙어야 암호화 하기전에 salt 발생.

    return new Promise((resolve, reject)=>{
        crypto.pbkdf2(plainPassword, //넘어오는 원데이터
                      salt,
                      9999, //이만큼 돌리겠음
                      64,
                      'sha512', //사용할 알고리즘
                      (err, key)=>{
            if(err) reject(err);
            resolve({ password : key.toString('base64'),
                      salt})
                    })
            })
 };

 const cryptoPassword = async()=>{
    encData = await createCryptoPassword(data);
    console.log(encData);
 }

 cryptoPassword();

 createCryptoPassword(data) //여기 매개변수 제대로 들어가야 값 찍힘
 .then(result => console.log(result))
 .catch(err => console.log(err));