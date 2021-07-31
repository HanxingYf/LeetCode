// function repeat(func, times, wait) {
//     return function (arg) {
//         for (let i = 1; i <= times; i++) {
//             setTimeout(() => {
//                 func(arg);
//             }, wait*i)
//         }
//     }
// }
// function log(msg){console.log(msg)}
// const repeatFunc = repeat(log, 4, 3000);
// repeatFunc("hellworld");

console.log('1');
setTimeout(function() {
    console.log('2');
    process.nextTick(function(){
        console.log('3');
    })
    new Promise(function(resolve){
        console.log('4');
        resolve()
    }).then(function(){
        console.log('5');
    })
})
process.nextTick(function(){
    console.log('6');
})
new Promise(function(resolve){
    console.log('7');
    resolve()
})