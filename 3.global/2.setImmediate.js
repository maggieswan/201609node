
/**
 * Created by user on 2016/9/9.
 */
setTimeout(function(){
console.log('a');
},1000);

setImmediate(function (){
    console.log('b');
});

//���ڵ�ǰ�����β��
process.nextTick(function(){
    console.log('nextTick1');
    process.nextTick(function(){
        console.log('nextTick2');
        process.nextTick(function(){
            console.log('nextTick3');
        });
    });
});
