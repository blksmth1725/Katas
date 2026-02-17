const convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const rows = Array.from({ length: numRows }, () => "");
  let row = 0;
  let dir = 1; // 1 = down, -1 = up

  for (const ch of s) {
    rows[row] += ch;

    if (row === 0) dir = 1;
    else if (row === numRows - 1) dir = -1;

    row += dir;
  }

  return rows.join("");
};
