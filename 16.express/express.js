//自己写一个express模块，深入理解express内部原理
function express(){
    function app(){

    }
    app.fns=[];//这个就是竖条条装方法的那个数组
    //配置中间件
    app.use=function(path,fn){//根据上面使用方法，知道这里接收一个函数fn
        //this.fns.push(fn);   与下面保持一致
      if(typeof path=='function'){
          fn=path;
          path='/';
      }
        this.fns.push({
            path:path, //根目录
            fn:fn
        });
    }
    //配置路由
    app.get=function(path,fn){//根据上面使用方法，知道这里接收一个函数fn
        this.fns.push({
            path:path,
            fn:fn
        });
    }
    app.start=function(req,res){
        var i=0;
        function next(){
            var layer=app.fns[i++];
            console.log(req.url,layer.path);
            if(req.url.indexOf(layer.path)==0){
                    layer.fn(req,res,next);
            }else{
                next();
            }
        }
　　　　next();　
    }
    return app; //这个就是那个var app (=new  express())
}
module.exports=express;







