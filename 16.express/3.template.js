var express=require('express');  var  app=express();
var fs=require('fs');
app.set('view engine','ejs');
app.set('views',__dirname);  //__dirname就是当前目录下边
var path=require('path');
app.use(function(req,res,next){ // 自己写render方法
    res.maggierender=function(tmpl,data){
    //文件小 这里直接读
    fs.readFile(path.join(__dirname,tmpl),{encoding:'utf8'},function(err,result){
        result=  result.replace(/<%=(\w+)%>/,function(input,group1){ //比如替换<%=title%>
//replace方法的回调函数里，第一个参数是匹配到的字符串（即<%=(\w+)%>），第二个参数是分组（即(\w+)里的内容）
            return data[group1];
        });  //这时候result是最终的html字符串
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.send(result);
    });
}
next();
});
app.get('/',function(req,res){
//渲染模板  render的原理：
    /*
    * 1 先找到index这个模板（去__dirname下找index），然后读出模板的内容
    * 2 用第二个参数里的值，把模板里的占位替换掉
    * 3 把最终的html返回给客户端
    * */
    res.maggierender('index.ejs',{
        title:'maggie项目'
    } ); // index这个是相对路径，相对于上面views这个目录，因为指定的模板引擎ejs所以后缀可以省略
});
app.listen(9090);















