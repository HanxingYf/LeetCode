var levelOrder = function (root) {
  const res = [];
  const queue = [];
  if (!root) {
    return res;
  }
  queue.push(root);
  while (queue.length) {
    let len = queue.length;
    res.push([]);
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      res[res.length - 1].push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return res;
};
