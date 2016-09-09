/**
 * Created by user on 2016/9/9.
 */

function say(callback){
    setTimeout(function(){
        callback();
    },1000)
}
function print(){
    console.log('hello world');
}

say(print);




