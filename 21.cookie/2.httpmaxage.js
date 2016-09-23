var  http=require('http');
var fs=require('fs');
var url=require('url');
var querystring=require('querystring');
http.createServer(function(req,res){
var  urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname=='/buy'){
        res.setHeader('Set-Cookie','goodsname'+Math.random()+'=phone'+Math.random()+'; maxAge=20000');
        res.end('buy');
    }else if(pathname=='/cart'){
        var  cookie=req.headers.cookie;
        var  cookieObj=querystring.parse(cookie,'; ');
        console.log(cookieObj);
        res.end(JSON.stringify(cookieObj));
    }
}).listen(8080);








