const n1 = 5;
const edges1 = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 3],
  [1, 4],
];
const edges2 = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
];

const isValidTree = (n, edges) => {
  if (edges.length !== n - 1) return false;

  const parent = [];
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  const find = (node) => {
    if (parent[node] !== node) {
      parent[node] = find(parent[node]);
    }
    return parent[node];
  };

  const union = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) return false;

    parent[rootA] = rootB;
    return true;
  };

  for (const [a, b] of edges) {
    if (!union(a, b)) return false;
  }
  return true;
};

console.log(isValidTree(n1, edges2));
console.log(isValidTree(n1, edges1));
