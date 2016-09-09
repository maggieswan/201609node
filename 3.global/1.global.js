/**
 * Created by user on 2016/9/9.
 */
console.log(global);

console.log('log');
console.error('log2');
console.time('cost');//计时器开始
for(var i=0;i<10000;i++){
//会输出中间代码执行的时间
}
console.timeEnd('cost');//计时器结束
console.log(__dirname);
console.log(__filename);
