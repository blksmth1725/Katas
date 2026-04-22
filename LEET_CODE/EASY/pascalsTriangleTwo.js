const pascalsTriangleTwo = (ri) => {
  let row = [1];

  for (let i = 1; i <= ri; i++) {
    const next = [1];

    for (let j = 1; j < i; j++) {
      next.push(row[j - 1] + row[j]);
    }

    next.push(1);
    row = next;
  }
  return row;
};
