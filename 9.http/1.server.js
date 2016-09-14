
var  http=require('http');
//借助http来创建一个http服务器,一个HTTP服务器需要：IP 端口 还能处理客户端的请求（即通过回调函数来处理）
//createServer里有一个回调函数 叫请求监听.这个方法有返回值 这里返回给server
var mime={
    ".css":"text/css", //大类型（文本）/小类型（css）
    ".js":"text/javascript",
　　".jpg":"image/jpg",
    ".html":"text/html"
};
var fs=require('fs');
var path=require('path');
var  mime=require('mime');
var server=http.createServer(function(req,res){ //有请求 有响应
//客户发出请求，我们这里用res去响应，他有两个方法
    console.log(req.url);
    if(req.url=='/clock'){
        res.end(new Date().toLocaleString());
        }
    else {
        res.setHeader('Content-Type',mime.lookup(req.url)+';charset=utf-8');
        fs.readFile('.'+req.url,
            function(err,data){
            console.log(err);
            res.write(data);
            res.end();　　　
        });　　　　
            　}
    });
server.listen(8080);//调用服务器的listen方法 在本机监听8080端口
//在wbsorm里右键启动，然后在浏览器里访问localhost：8080 ，可正确得到hellomax



