/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = head => {
  const stack = [];
  let curr = head;
  while (curr !== null) {
    stack.push(curr.val);
    curr = curr.next;
  }

  curr = head;
  while (curr !== null) {
    if (stack.pop() !== curr.val) {
      return false;
    }
    curr = curr.next;
  }
  return true;
};
