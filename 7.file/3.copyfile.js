
var  fs=require('fs');
 function copy(src,target){
    var readf= fs.readFileSync('1.png');
　　fs.writeFileSync('./2.png',readf)

 }
//copy('./3.txt','./4.txt');
copy('./1.png','./2.png');





