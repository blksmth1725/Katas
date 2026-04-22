// BUILD LIST
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const buildList = (arr) => {
  if (!arr.length) return null;
  const head = new ListNode(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
};

const printList = (head) => {
  const res = [];
  let curr = head;

  while (curr) {
    res.push(curr.val);
    curr = curr.next;
  }

  return res.join(" => ");
};

const deleteDuplicates = (head) => {
  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

console.log(
  printList(
    deleteDuplicates(
      buildList([
        1, 1, 1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 11, 12, 13, 14, 14,
        14, 14, 14, 15,
      ])
    )
  )
);
