/**
 * Created by user on 2016/9/9.
 */
console.log(process.cwd());

process.chdir('..'); //回退到上级目录
console.log(process.cwd());

console.log(process.memoryUsage());
/*
* { rss: 20017152,常驻内存
 * heapTotal: 7409232, 堆总内存
 * heapUsed: 3867952 } 堆已经使用的内存量
*单位是字节
  * */
