// get방식 /dog => sound : 멍멍 응답
// get방식 /cat => sound : 야옹 응답 
// 하는 api 만들기

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', function (req, res) {
  //res.send('<h1>강아지</h1>')
  res.send({'sound' : '멍멍'})
})

app.get('/cat', function (req, res) {
   //res.send('고양이')
   res.send({'sound' : '야옹'})
})

// 변수에 담아서 요청하기
app.get('/user/:id', function (req, res) {
    
    // 1.parameter
    // const q = req.params
    // console.log(q.id)

    // 2.query
    const q = req.query
    console.log(q.q)
    console.log(q.age)    

    res.send({'user_id' : q.q})
 })


app.listen(3000)