const hasPathSum = (root, target) => {
  if (!root) return false;

  if (!root.left && !root.right) return root.val === target;
  const remaining = target - root.val;

  return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
};
