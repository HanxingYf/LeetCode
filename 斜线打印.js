// 斜线打印二维数组
// 题目描述
// 现有一个m*n的数组，请按照斜对齐打印数组。例如一个a[3][4]的数组，
// 1 2  3  4

// 5 6  7  8

// 9 10 11 12

// 应按照1，2，5，3，6，9，4，7，10，8，11，12的顺序打印数组

function xieLog(arr) {
    let res = [];
    let m = arr.length
    let n = arr[0].length
    for(let i = 0;i< arr[0].length; i++){
        for(let j = 0,k = i; j <= i && j < m && k>=0; j++, k--){
            console.log(i,j);
            res.push(arr[j][k]);
        }
    }
    for(let i = 1; i < m; i++){
        for(let j = n-1, k = i; j>=0 && k < m; j--,k++){
            res.push(arr[k][j])
        }
    }
    return res
}
arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(xieLog(arr));
