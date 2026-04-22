// The definition of height-balanced is: every node's left and right subtrees differ in height by no more than 1.
// That has to hold at every node, not just the root.
// The naive approach checks height at every node separately, but that's redundant work.
// The clean approach is to compute height and check balance in the same pass —
// if any subtree is already unbalanced, bubble up a signal (-1) instead of a real height, and short-circuit the rest.

const isBalanced = (root) => {
  const check = (node) => {
    if (!node) return 0;

    const left = check(node.left);
    if (left === -1) return -1;
    const right = check(node.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;
    return 1 + Math.max(left, right);
  };
  return check(root) !== -1;
};
