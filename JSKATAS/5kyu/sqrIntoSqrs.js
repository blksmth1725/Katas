function decompose(n) {
  const target = n * n;
  
  function findDecomposition(remaining, maxNum, current) {
    if (remaining === 0) {
      if (current.length > 0 && current.length < n) {
        return current.slice().reverse(); // Reverse to get increasing order
      }
      return null;
    }
    
    for (let i = maxNum; i >= 1; i--) {
      const square = i * i;
      
      if (square > remaining) continue;
      
      if (current.length > 0 && i >= current[current.length - 1]) continue;
      
      current.push(i);
      const result = findDecomposition(remaining - square, i - 1, current);
      
      if (result) {
        return result;
      }
      
      current.pop();
    }
    
    return null;
  }
  
  const result = findDecomposition(target, n - 1, []);
  return result;
}

// Test cases
console.log(decompose(11)); // Should return [1,2,4,10]
console.log(decompose(50)); // Should return [1,3,5,8,49]
console.log(decompose(4));  // Should return null or []
