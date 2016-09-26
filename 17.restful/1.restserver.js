var  express=require('express');
var  fs=require('fs');
var app=express();
var db='./users.json';
var  bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
//GET/collection 返回资源对象的列表（数组）
app.get('/users',function(req,res){
      fs.createReadStream('./users.json').pipe(res);
});  //集合的名字要用复数
//GET/collection/:id 返回单个资源对象
app.get('/users/:id',function(req,res){
　　　　var  id=req.params.id;
        var users=require('./users.json');
        var user=users.filter(function(user){
        return user.id== id; //filter方法返回的是 子数组
    })[0];
    if(user){
        res.send(user);
    }else{
        res.send({msg:'此用户不存在'});
    }

});
//post/collection 返回新生成的资源对象
app.post('/users',function(req,res){ // 增加用户
    var user= req.body;
    var users=require(db);
    user.id=users[users.length-1].id+1;

    users.push(user);
fs.writeFile(db,JSON.stringify(users),function(err){
    res.send(user);
})
});




app.listen(8080);













