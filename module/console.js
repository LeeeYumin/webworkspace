const fs = require('fs');
const { Console } = require('console'); //Console 기본클래스

const output = fs.createWriteStream('./stdout.log'); // ./ : 같은 경로
const errorOutput = fs.createWriteStream('./stderr.log'); // 각 파일의 stream 연다

const logger = new Console({stdout : output, stderr : errorOutput}); //logger : 로그를 남기는 객체(주체) stdout : 일반

const msg = 'Log Writing';

logger.log('Result : %s', msg); //stdout 쪽으로 로그 남김
logger.error(`Result : ${msg}`); //stderr 쪽으로 로그 남김