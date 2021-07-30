function repeat(func, times, wait) {
    return function (arg) {
        for (let i = 1; i <= times; i++) {
            setTimeout(() => {
                func(arg);
            }, wait * i)
        }
    }
}
function log(msg){console.log(msg)}
const repeatFunc = repeat(log, 4, 3000);
repeatFunc("hellworld");