# Express
### Express란?  
node.js의 웹 애플리케이션 프레임워크  

### Express의 특징  
  - 서버 사이드 프레임워크로 node.js의 api를 단수화하고, 유용한 기능을 추가해 쉽게 서버를 구축할 수 있게 해준다.
  - 확장성을 지향한다. 불필요한 간섭이 없고 사용자가 필요한 라이브러리를 추가해 확장 가능하다.
  - http request와 response를 컨트롤할 수 있다.

### 설치
  ``` npm i experss ```

  > <package.json>  
  "dependencies": {  
    &nbsp; "express": "^4.21.2"  
  }  

### 기본코드 실행해보기

> <exoress.js>  
const express = require('express')  
const app = express()  
app.get('/', function (req, res) {  
  res.send('Hello World')  
})  
app.listen(3000)    

\* app.listen() : 원하는 포트번호를 오픈하는 문법  
\* app.get : get요청방식의 http 메소드  
\* '/' : 라우팅   
\* 콜백함수 : 다른 코드의 힌수로서 넘겨주는 실행 가능한 코드  
&nbsp;&nbsp;함수1(함수1이 끝나고 실행할 함수=콜백함수)  


실행 ) 
``` node experss.js ```

결과 )  
![express_result.png](image/express_result.png)

서버 종료 )
ctrl + c


