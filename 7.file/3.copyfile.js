
var  fs=require('fs');
 function copy(src,target){
    var readf= fs.readFileSync('3.txt',{encoding:'utf8'});
　　fs.writeFileSync('./4.txt',readf,{encoding:'utf8'});

 }
copy('./3.txt','./4.txt');






