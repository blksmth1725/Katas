const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [
  10, 15, 20, 25, 30, 25, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
];
const arr3 = [5, 6, 4, 7, 3, 8, 2, 9, 1, 10];
const arr4 = [
  10, 11, 9, 12, 8, 13, 7, 14, 6, 13, 5, 15, 4, 16, 3, 17, 2, 18, 1, 19, 20,
];
const arr5 = [
  7, 9, 11, 2, 62, 100, 33, 25, 66, 999, 40, 50, 57, 89, 88, 15, 13, 12, 5, 10,
];
const arr6 = [62, 100, 33, 25, 66, 999, 40, 50, 57, 89];

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

const nums3 = [0];
const m1 = 0;
const nums4 = [1];
const n1 = 1;

const msa = (a1, n1, a2, n2) => {
  if (m === 0 || m === 1 || n === 0 || n === 1) return 1;
  const ra1 = a1.slice(0, n1);
  const ra2 = a2.slice(0, n2);

  return [...ra1, ...ra2].sort((a, b) => a - b);
};

const msa2 = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

console.log(msa(arr1, 5, arr2, 6));
console.log(msa(arr3, 2, arr4, 4));
console.log(msa(arr5, 6, arr6, 9));
console.log(msa(nums1, m, nums2, n));
console.log(msa(nums3, m1, nums4, n1));

console.log(msa2(arr1, 5, arr2, 6));
console.log(msa2(arr3, 2, arr4, 4));
console.log(msa2(arr5, 6, arr6, 9));
console.log(msa2(nums1, m, nums2, n));
console.log(msa2(nums3, m1, nums4, n1));
