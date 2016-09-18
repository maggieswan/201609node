var express=require('express');
var app=express();  //构建一个express实例：这样写，因为上面的var express其实是一个函数,我们调用它express()得到一个app，app也是一个函数
//项目中一般都用express,但是很少用原生的去写
//下面写路由(根据不同路径进行不同处理)   处理get请求，get动词是一个方法名
app.get('/index',function(req,res){
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.end('苏冉');//乱码
});
app.get('/home',function(req,res){
    res.end('home');
});
//匹配任意路径
app.get('*',function(req,res){
    res.end('404');
});
//匹配所有的方法，不管是get 还是 post...都能匹配上
//app.all();
//启动
app.listen('8030');











