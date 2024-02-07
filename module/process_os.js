//모듈은 위에 올려두는 걸 권장함. 중간에 쓰더라도 시작위치 상관없이 모듈은 위에 모아두자. 
const process = require('process');
const os = require('os');

console.log(process.env);
console.log('================================');
console.log(os.cpus());
console.log(os.tmpdir());