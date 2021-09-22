function add(a,b,c,d) {
    return a+b+c+d
}

var newAdd = Curry(add)

console.log(newAdd(1)(2)());

//柯里化就是期望下一次能够把所有的参数传入完毕。
function FixedParamsCurry(fn){
    //arguments=[add,1,2]
    var _arg = [].slice.call(arguments, 1);
    return function(){
      //arguments=[2,3]
      var newArg = _arg.concat([].slice.call(arguments, 0));
      return fn.apply(this, newArg);
    }
  }                
//   var newAdd = FixedParamsCurry(add,1);  //传入参数。这里是传入了1个参数
//   console.log(newAdd(2,3,4));   //此处必须要将剩余的参数填满。这里将剩余的3个参数传入。（期望这一次把参数全部传入完毕）   
  
  

function Curry(fn, length){
    // fn.length返回的是该函数需要的参数的个数
    var length = length || fn.length;
    return function(){
      if(arguments.length < length){
        //[fn, 1]
        var combined = [fn].concat([].slice.call(arguments, 0));
        return Curry(FixedParamsCurry.apply(this, combined), length-arguments.length);   //用到的递归和闭包
        //直到当参数完全和执行函数的形参一样的时候，才会执行功能。
      }else{
        return fn.apply(this, arguments);
      }
    }
  }
  