
function makeCount(){
  let cnt = 0
  function changeCnt(val) {
    cnt += val
  }
  return {
    increace:function(){
      changeCnt(1)
    },
    decreace:function(){
      changeCnt(-1)
    },
    value: function(){
      return cnt
    }
  }
}

function makeCnt() {

}

let C1 = makeCount()
let C2 = makeCount()
let C3 = new makeCount()
C3.decreace()
C1.increace()
console.log(C1.value(),C2.value(), C3.value());
