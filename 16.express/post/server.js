var express=require('express');
var fs=require('fs');
var querystring=require('querystring');
//bodyParser  请求体的处理器 即解析请求体
var bodyParser=require('body-parser'); //中间件 不是express自带的 需要安装 npm install body-parser
var app=express();
app.use(function(req,res,next){
var  str='';
       req.on('data',function(data){
str+=data.toString();
});
       req.on('end',function(data){
           req.body= querystring.parse(str);
              next();
       });
});
//app.use(  //bodyParser是中间件 所以应该放到app.use里面
//    bodyParser.urlencoded({extended:true}) //urlencodeds是bodyParser的一个属性，这个属性是个函数可以调用 ； extended为true表示会使用express自带的解析器解析
//);
app.get('/',function(req,res){
       fs.createReadStream('./index.html').pipe(res);
});
app.post('/login',function(req,res){
//当使用了bodyParser.urlencoded（）这个方法后，req就多了body属性（以前是没有的） ，这个是把请求体转成了对象
       console.log(req.body);
       res.send(req.body);
});
app.listen(8010);




