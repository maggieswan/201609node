
var  fs=require('fs');
var content=fs.readFileSync('./1.txt',{encoding:'utf8'});
console.log(content);
console.log('a');
fs.readFile('./1.txt',{encoding:'utf8'},function(err,data){
    console.log(data);
})
console.log('b');
