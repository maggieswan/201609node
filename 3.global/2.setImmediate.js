
/**
 * Created by user on 2016/9/9.
 */
setTimeout(function(){
console.log('a');
},1000);

setImmediate(function (){
    console.log('b');
});

//放在当前任务的尾部
process.nextTick(function(){
    console.log('nextTick1');
    process.nextTick(function(){
        console.log('nextTick2');
        process.nextTick(function(){
            console.log('nextTick3');
        });
    });
});
