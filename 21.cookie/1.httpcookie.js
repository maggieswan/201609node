var  http=require('http');
var fs=require('fs');
var url=require('url');
var querystring=require('querystring');
http.createServer(function(req,res){
var  urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname=='/buy'){  // 表示要写一个cookied
        var ts=new Date(Date.now()+20*1000).toGMTString();
        res.setHeader('Set-Cookie','goodsname'+Math.random()+'=phone'+Math.random()+'; Expires='+ts);
        res.end('buy');
    }else if(pathname=='/cart'){ //读cookie
        var  cookie=req.headers.cookie; // 这样取到的cookie是string类型
        var  cookieObj=querystring.parse(cookie,'; ');
        console.log(cookieObj); //cookie变成对象类型
        res.end(JSON.stringify(cookieObj));
    }
}).listen(8080);
//Expires/Max-Age如果是Session，表示浏览器打开的时候cookie生效，关闭浏览器就没有了。
//当设置了过期时间，这个cookie就不会放在会话（即session）里面了，他会放在硬盘上，这时候只要在有效期内，关闭浏览器再打开这个cookie还能生效。









