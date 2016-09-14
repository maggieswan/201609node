
var  fs=require('fs');
var ws=fs.createWriteStream('./4.png',{});
var rs=fs.createReadStream('./1.png',{});
rs.pipe(ws);
/*
* response是可写流，它有wrtie  end 方法
* */
fs.createReadStream('./1.png').pipe(response);
















