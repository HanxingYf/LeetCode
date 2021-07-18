// var mergeTwoLists = function(l1, l2) {
//     if(!l1){
//         return l2
//     }
//     if(!l2){
//         return l1
//     }
//     if(l1.val < l2.val){
//         mergeTwoLists(l1.next, l2)
//         return l1
//     }else{
//         mergeTwoLists(l1, l2.next)
//         return l2
//     }
// };

var mergeTwoLists = function (l1, l2) {
    let l3 = new NodeList(-1)
    let preHead = l3

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            preHead.next = l1
            l1 = l1.next
        } else {
            preHead.next = l2
            l2 = l2.next
        }
        preHead = preHead.next
    }
    if (l1) {
        preHead.next = l1
    } else {
        preHead.next = l2
    }
    return l3.next
};