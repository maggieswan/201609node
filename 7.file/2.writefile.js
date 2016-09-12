
var  fs=require('fs');
var result=fs.writeFileSync('./2.txt','中国好声音',{encoding:'utf8'});
console.log(result);

fs.writeFile('./3.txt','中国坏声音',{encoding:'utf8'},function(err){
    console.log(arguments);
})







