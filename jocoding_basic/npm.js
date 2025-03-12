
// figlet

var figlet = require("figlet");
//figlet이라는 모듈을 가져와서(require) figlet변수에 넣어줌 

figlet("Hello World!!", function (err, data) {
  // Hello World!! 대신 만들고 싶은 단어를 넣어주면 됨
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
