/**
 * Created by user on 2016/9/9.
 */
console.log(process.cwd());

process.chdir('..'); //���˵��ϼ�Ŀ¼
console.log(process.cwd());

console.log(process.memoryUsage());
/*
* { rss: 20017152,��פ�ڴ�
 * heapTotal: 7409232, �����ڴ�
 * heapUsed: 3867952 } ���Ѿ�ʹ�õ��ڴ���
*��λ���ֽ�
  * */
