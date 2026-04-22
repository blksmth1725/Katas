const inOrder = (root, result = []) => {
  if (!root) return result;
  inOrder(root.left, result);
  result.push(root.val);
  inOrder(root.right, result);
  return result;
};
