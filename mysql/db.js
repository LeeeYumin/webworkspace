//db.js
const mysql = require('mysql');
const sql = require('./db/customerSql.js');
//sql.customerList

const connectionPool = mysql.createPool({
    host : '127.0.0.1', //local 도 상관없음. ip랑 같음
    port : '3306',
    user : 'dev01',
    password : '1234',
    database : 'dev',
    connectionLimit : 10,
    debug :true
});

const executeQuery = async (alias, values)=>{
    return new Promise((resolve, reject)=>{ //포인트 1. Promise 쓰는 이유
        let executeSql = sql[alias]; //포인트 2. 왜[ ]사용하는지
        connectionPool.query(executeSql, values, (err, results)=>{
            if(err){
                console.log(err);
                reject({err}); //객체형태로 넘김
            }else{
                console.log(results);
                resolve(results);
            }
        })
    })
}

module.exports = {
    executeQuery
}