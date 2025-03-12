const express = require('express')
const app = express()

app.get('/', function (req, res) {
    // get : http메소드, '/' : 라우팅, ()=>{} : 콜백함수
  res.send('Hello World')
})

app.listen(3000) // localhost3000번 포트로 실행

// express 공식홈페이지 코드
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(port, () => {
//   console.log('Example app listening on port $(port)')
// })