let strArr = 'AB#D##C##'.split('');

function BiTree(ele) {
    this.data = ele;
    this.lChild = null;
    this.rChild = null;
}
var newTree = new BiTree('#');

function createBiTree(biTree) {
    if (strArr.length == 0) return;
    let str = strArr.shift();
    if (str == '#') return;
    biTree.data = str;
    if (strArr[0] != '#') {
        biTree.lChild = new BiTree('#')
    }
    createBiTree(biTree.lChild);
    if (strArr[0] != '#') {
        biTree.rChild = new BiTree('#')
    }
    createBiTree(biTree.rChild);
}
createBiTree(newTree);
console.log(newTree);