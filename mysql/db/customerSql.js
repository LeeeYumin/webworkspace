//customerSql.js
//쿼리문 쓸 때는 뒤에 ; 빼기

let customerList =
` SELECT id
        , name
        , email
        , phone
        , address
FROM customers `

let customerInfo =
` SELECT id
        , name
        , email
        , phone
        , address
FROM customers
WHERE id = ? `
// 1) 배열인지 아닌지 : 물음표 갯수로 확인 (1개면 배열 아님. 2개 이상이면 반드시 배열.)
    //배열 순서는 위에서 아래로, 왼쪽에서 오른쪽 형태로 값이 채워짐
// 2) ? 별로 객체타입인지 단일값인지 :(어느 컬럼에 들어가는 값인지 구분 가능 여부.)
    // ? 앞에 컬럼인지 보면됨. 앞에 컬럼이 명시되어 있는지 보기. 명확하지 않으면 객체..

let customerInsert = 
`INSERT INTO customers
SET ?` //객체, 필드명 == 컬럼명 이어야 함.

//update는 2가지 방식
let customerUpdateAll = 
`UPDATE customers
SET ?
WHERE id = ?`; //배열 [ 객체 , 단일값 ]. 물음표 갯수가 자리수임. 

//특정
let customerUpdateInfo = 
`UPDATE customers
SET email = ?, phone = ?, address = ?
WHERE id = ?`; //배열 [ 단일값, 단일값, 단일값, 단일값]. 순서는 지켜줘야된다. email~id.

module.exports = {
    customerList,
    customerInfo,
    customerInsert,
    customerUpdateAll,
    customerUpdateInfo
} //쿼리문을 변수에 담고 밑에 추가. 여기서 라우팅 만든다.