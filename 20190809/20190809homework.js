process.nextTick(function(){
    console.log(7);//3
});
new Promise(function(resolve){
    console.log(3);//1
    resolve();
    console.log(4);//2
}).then(function(){
    console.log(5);//5
});
process.nextTick(function(){
    console.log(8);//4
})