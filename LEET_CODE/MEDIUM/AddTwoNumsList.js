const listA = [2, 4, 3];
const listB = [5, 6, 4];

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addTwoNumsList = (l1, l2) => {
  const dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const v1 = l1 ? l1.val : 0; // if list is exhausted, use 0
    const v2 = l2 ? l2.val : 0;

    const sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10); // carry is 1 if sum >= 10, else 0
    const digit = sum % 10; // the actual digit to store

    current.next = new ListNode(digit);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
};

console.log(addTwoNumsList(listA, listB));
