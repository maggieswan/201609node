var express=require('express');
var fs=require('fs');
var querystring=require('querystring');
//bodyParser  请求体的处理器 即解析请求体
var bodyParser=require('body-parser'); //中间件 不是express自带的 需要安装 npm install body-parser
var app=express();
app.use(
    bodyParser.urlencoded({extended:true})
);
app.get('/',function(req,res){
       fs.createReadStream('./index.html').pipe(res); //网站的首页
});
app.get('/login',function(req,res){
    fs.createReadStream('./login.html').pipe(res); //登录页面
});
app.post('/login',function(req,res){ //登录功能
       console.log(req.body);
     if(req.body.username){
　　　　　res.redirect('/home');//重定向  在客户端（即浏览器那里）跳转
     }else{
         res.redirect('/login');
     }
});
app.get('/home',function(req,res){
    fs.createReadStream('./home.html').pipe(res); //登录页面
});
app.listen(8010);




