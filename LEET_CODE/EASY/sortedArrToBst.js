const sortedArrayToBst = (nums) => {
  if (!nums.length) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBst(nums.slice(0, mid));
  root.right = sortedArrayToBst(nums.slice(mid + 1));

  return root;
};
