const path = require('path'); //경로다루기

console.log('==절대경로');
console.log(__filename);
console.log(__dirname);
console.log('실제 파일명 : ', path.basename(__filename)); //경로에서 마지막에 해당되는거 불러옴
console.log('확장자 ', path.extname(__filename));

let pathList = process.env.PATH.split(path.delimiter); //환경변수 구분자 기준으로 잘라냄
console.log(path.delimiter); //현재 코드 기준으로..?
console.table(pathList);
console.log(path.sep);
console.table(pathList[2].split(path.sep));