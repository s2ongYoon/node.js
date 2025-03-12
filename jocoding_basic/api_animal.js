// api 실습해보기
// GET 방식 /sound/:name
// name 에 따라서 다른 울음 소리

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sound/:name', function (req, res) {
  const { name } = req.params
  // key값을 넣어주면 변수에 value값이 바로 저장됨
  const sound = ''
  console(name)

  if(name == 'dog') {
    sound = '멍멍'
  } else if(name == 'cat') {
    sound = '야옹'
  } else if(name == 'pig') {
    sound = '꿀꿀'
  } else {
    sound = '알수 없음'
  } 

  res.send({'sound' : sound})
})

app.listen(3000)