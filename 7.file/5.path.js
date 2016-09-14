
var  path=require('path');
 console.log(path.join(__dirname,'a','b','c'));//多个部分路径拼成一个最终路径


console.log(path.resolve('a','b','..','..'));

console.log(path.basename(__filename));//获取当前路径中的文件名


console.log(path.basename(__filename,'.js'))

console.log(path.extname(__filename));

console.log(path.sep);

console.log(path. delimiter );


