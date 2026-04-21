const cloneGraph = (node) => {
  if (!node) return null;

  const visited = new Map();

  const dfs = (curr) => {
    if (visited.has(curr)) return visited.get(curr);

    const clone = new Node(curr.val, []);

    visited.set(curr, clone);

    for (const neighbor of curr.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }
    return clone;
  };
  return dfs(node);
};
