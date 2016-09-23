var  express=require('express');
var  app=express();
var  session=require('express-session');
app.use(session({
    resave:true,//每次请求结束 都要重新保存 不管有没有修改
    saveUninitialized:true, // 保存未修改过的session，即session刚创建出来还没有使用过，是否要保存他
    secret:'maggie' //加密的密钥  为了防止客户端篡改
}));//使用中间件 req多了 req.session属性=上面原生的那个sessionObj
app.get('/',function(req,res){
     var isLogin=req.session.isLogin;
    if(isLogin){
        res.send('老朋友');
    }else{
        req.session.isLogin='true';
        res.send('新朋友');
    }
});
app.listen(8080);




