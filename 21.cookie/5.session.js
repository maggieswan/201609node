/*步骤
1、在服务器端生成全局唯一标识符（session_id）
2 在服务器开辟内存,存放session_id对应的数据存储空间
3  将session_id通过cookie发送给客户端
4 以后客户端再访问服务器，会把session_id通过请求头中的cookie发送个服务器
5  S再通过session_id把对应S端的数据取出
* */
var  http=require('http');
var fs=require('fs');
var url=require('url');
var querystring=require('querystring');
var  SESSION_KEY='SESSION_KEY';// 写在这里方便后面代码复用
var sessions={};
http.createServer(function(req,res){
　　var urlObj=url.parse(req.url,true);
 var parsename=urlObj.pathname;
    if(parsename=='/'){
        var cookieObj=querystring.parse(req.headers.cookie,'; ');//req.headers.cookies是个字符串，要转成对象
　　 　var  sessionId=cookieObj[SESSION_KEY]; // 请求头里有sessionId,注意细节：node把请求头里全部改成小写
      if(sessionId){ //有值
          var sessionObj=  sessions[sessionId];
          if(sessionObj){//有值，因为sessionId在客户端可能被篡改，篡改后会找不到对应的sessionObj
              sessionObj.balance=sessionObj.balance-10;
              res.setHeader('Content-Type','text/html;charset=utf-8');
              res.end('欢迎您老人，你的卡余额：'+sessionObj.balance);
          }else{ //服务器端没有对应的
              res.setHeader('Content-Type','text/html;charset=utf-8');
              res.end('欢迎您，你的卡不能用了');
          }
        }else{
            //1 生成一个新的会话id 即sessionid
var sid=Date.now()+''+Math.random();
            var sessionObj={balance:100};
 sessions[sid]=sessionObj;//2 在服务器开辟内存,存放次id对应的数据
            res.setHeader('Set-Cookie',SESSION_KEY+'='+sid);//把sid写给客户端
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.end('欢迎您新人，送你卡，余额：'+sessionObj.balance);
        }
    }
}).listen(8080);











