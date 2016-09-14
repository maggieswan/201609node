
var  fs=require('fs');
function copy(file1,file2){
    var ws=fs.createWriteStream(file2,{});
    var rs=fs.createReadStream(file1,{});
    rs.on('data',function(data){
       //这里，如果读完了 写不进去怎么办
        var flag= ws.write(data);
        if(!flag){ // 写不进去文件了,所以要停止写
          rs.pause(); // 暂停写入
        }
    });
    ws.on('drain',function(){ //消化完了 重新开启
        rs.resume();
    });
    rs.on('end',function(){
        ws.end();
    });
}
copy('./1.png','./2.png');





