var  express=require('express');
var cookieParser=require('cookie-parser');
var app=express();
app.use(cookieParser());
/*使用了cookieParser中间件之后，会多两个方法（或说，是属性）  即读cookie 写cookie
* */
app.get('/',function(req,res){
var  isVisited=req.cookies.isVisited;//req.cookies 即用户提交过来的cookie对象
    if(isVisited){ //有值  cookie已经种植了
          res.send('欢迎老朋友');
    }else{//没值  给cookie种植一下  res.cookie用于向客户端（浏览器）写入cookie
　　      res.cookie('isVisited','1',{maxAge:20*1000});
        res.send('欢迎new');
    }
});
app.listen(8080);











