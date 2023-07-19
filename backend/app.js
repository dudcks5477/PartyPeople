const express = require('express');
const morgan = re
const app = express();

app.set('port',process.env.PORT || 3000); //app.get('port')로 3000뽑아 올 수있다.

app.get('/',(req,res)=>{
    res.send('hello express');
});

app.listen(app.get('port'),()=>{
    console.log("익스프레스 서버 실행")
});

mongoose.