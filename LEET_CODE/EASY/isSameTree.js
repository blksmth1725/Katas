//V1

// const isSameTree = (p, q) => {
//   if (!p && !q) return true;
//   if (!p || !q) return false;
//   if (p.val !== q.val) return false;

//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

const preOrder = (root) => {
  let result = [];
  const dfs = (node) => {
    if (node === null) {
      result.push(null);
      return;
    }

    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return result;
};

console.log(preOrder(p));
console.log(preOrder(q));

var isSameTree = function (p, q) {
  pOrder = preOrder(p);
  qOrder = preOrder(q);

  console.log(pOrder);
  console.log(qOrder);

  if (pOrder.length !== qOrder.length) return false;
  return JSON.stringify(pOrder) === JSON.stringify(qOrder);
};

console.log(isSameTree(p, q));
