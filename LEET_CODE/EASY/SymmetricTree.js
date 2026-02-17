// function TreeNode(val, left = null, right = null) {
//   (this.val = val), (this.left = left), (this.right = right);
// }

// const tree = new TreeNode(
//   1,
//   new TreeNode(2, new TreeNode(3), new TreeNode(4)),
//   new TreeNode(2, new TreeNode(4), new TreeNode(3))
// );
// console.log(tree);

// const preOrder = (root) => {
//   const result = [];

//   const dfs = (node) => {
//     if (!node) return;
//     result.push(node.val);
//     dfs(node.left);
//     dfs(node.right);
//   };

//   dfs(root);
//   return result;
// };

// console.log(preOrder(tree));
