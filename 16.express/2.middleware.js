var express=require('express');
var app=express();
//use表示使用一个中间件函数  一看是use直接执行，同时中间件有个权利，可以继续往下走也可以不往下走
app.use(function(req,res,next){ //中间件有三个参数 next是继续下一个函数的意思，next是个函数，是一个由express提供的函数
    console.log('use');
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    next(); //调用next  意味着继续执行  ； 不调用就挂在这儿了
});

app.get('/index',function(req,res){
    console.log('suranindex');
    res.end('苏冉');//乱码
});
app.get('/home',function(req,res){
    console.log('suran用户页面');
    res.end('在家');
});

var http=require('http');
http.createServer(app.start).listen(8031); // 这个app就是一个普通的回调函数

















