class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root1 = [1, 2, 2, 3, 4, 4, 3];

const buildGraph = (arr) => {
  if (!arr.length || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    const node = queue.shift();

    if (i < arr.length) {
      if (arr[i] !== null) {
        node.left = new TreeNode(arr[i]);
        queue.push(node.left);
      }
      i++;
    }

    if (i < arr.length) {
      if (arr[i] !== null) {
        node.right = new TreeNode(arr[i]);
        queue.push(node.right);
      }
      i++;
    }
  }

  return root;
};

console.log(buildGraph(root1));
