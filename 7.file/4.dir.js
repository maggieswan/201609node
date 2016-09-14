
var  fs=require('fs');
//fs.mkdirSync('a');
fs.mkdir('a/a/b',function(err){
console.log(arguments);
});

fs.readdir('./a',function(err,files){
    console.log(files);
    files.forEach(function(file){
      fs.readFile('./a/'+file,function(err,data){
          console.log(data.toString());
      });
    });
});

fs.stat('./a',function(err,stat){
console.log(stat);
});

fs.exists('./a',function(exists){
console.log(exists);
});

console.log(__dirname+'./a');

var  path=require('path');
console.log(path.join(__dirname,'a'));
// function copy(src,target){
//    var readf= fs.readFileSync('1.png');
//　　fs.writeFileSync('./2.png',readf)
//
// }
////copy('./3.txt','./4.txt');
//copy('./1.png','./2.png');





