setInterval(function(){
    //四步曲
    var xhr=new XMLHttpRequest; // 1创建ajax对象
    xhr.open('GET','/clock',true); //2打开连接 请求方法 请求路径 是否异步
    xhr.onreadystatechange=function(){ //3注册回调函数，没错这里是回调函数
        if(xhr.readyState==4&&xhr.status==200){ // 如果ajax状态为就绪 并且响应码是200  成功
            document.querySelector('#clock').innerHTML=xhr.responseText;
        }
    }
    xhr.send();  //4 发送  //上面写的代码可以看出 xhr对象每过一秒会像服务器发送一次请求 请求路径是/clock
},5000);
