var  express=require('express');
var  fs=require('fs');
var app=express();
var db='./users.json';
var  bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
//GET/collection 返回资源对象的列表（数组）
app.get('/users',function(req,res){
    var keyword=req.query.keyword;
    var sortBy=req.query.sortBy;
    var type=req.query.type=='desc'?-1:1; //这样写简单
    var pageNum=parseInt(req.query.pageNum);
    var  pageSize=parseInt(req.query.pageSize);
    var  start=(pageNum-1)*pageSize;
    var  end=pageNum*pageSize;
    var users=require(db);
    users=  users.filter(function(user){
      //console.log('名字是',user.name,'indexof是',user.name.indexOf(keyword));
        return user.name.indexOf(keyword)!=-1;
    }).sort(function(a,b){
            return (a[sortBy]- b[sortBy])*type;
    }).slice(start,end);//过滤--排序--分页
    res.send(users);
});
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
//PUT/collection/:id 返回完整的资源对象   是更新操作  请求体各个参数要完整   它会用 这个请求体来覆盖原来的数据，包括id
app.put('/users/:id',function(req,res){
    var newUser=req.body;
    var users=require(db);
    users=users.map(function(user){
if(user.id==req.params.id){
return newUser;  // 这样就能替换旧对象了
}else{
    return user;
}
    });//es5  新对象替换旧对象
fs.writeFile(db,JSON.stringify(users),function(err){
res.send(newUser);
    });
});
//Patch/collection/:id  打补丁 更新某几个字段  返回完整的资源对象
app.patch('/users/:id',function(req,res){
    var newUser=req.body;
    var users=require(db);
    users=users.map(function(user){
        if(user.id==req.params.id){
            //覆盖图名属性
            for(var  attr in newUser){
                if(newUser.hasOwnProperty(attr)){ // 是自己的属性
                    user[attr]=newUser[attr];
                }
            }
            newUser=user;
        　　return newUser;
        }
        else{
            return user;
        }
    });
    fs.writeFile(db,JSON.stringify(users),function(err){
        res.send(newUser);
    });
});
//Delete/collection/:id  删除  返回一个空资源
app.delete('/users/:id',function(req,res){
    var id=req.params.id;
    var users=require(db);
    users=users.filter(function(user){
        return user.id!=id;
    });
fs.writeFile(db,JSON.stringify(users),function(err){
    res.send({});
})
});

app.listen(8080);













