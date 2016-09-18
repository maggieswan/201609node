var http=require('http');
//返回页面要使用fs模块
var fs=require('fs');
var  url=require('url');
http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
if(urlObj.pathname=='/'){ // 根目录
//通过管道方法 把它导入到写流里面去
    fs.createReadStream('./login.html').pipe(res);
}else if(urlObj.pathname=='/login'){
console.log(urlObj.query.username);
    res.end(urlObj.query.username);
}else{
    res.end('404');
}
    }).listen(8080);














