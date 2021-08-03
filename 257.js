var binaryTreePaths = function(root) {
    let res = []
    dfs(root, [])
    function dfs(root, path) {
        if(!root) return
        path.push(root.val)
        if(!root.left && !root.right){
            res.push(path.slice())
            path.pop()
        }
        dfs(root.left, path)
        dfs(root.right, path)
        path.pop()
    }
    return res
};