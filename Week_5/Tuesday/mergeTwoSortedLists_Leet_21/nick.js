/*
	Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const mergeTwoLists = (l1, l2) => {
  const dummy = new ListNode(null);
  let current = dummy;
  let list1 = l1;
  let list2 = l2;

  // go til one or both next are null
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // if l1 is left
  if (list1) {
    current.next = list1;
  }
  // if l2 is left
  if (list2) {
    current.next = list2;
  }
  return dummy.next;
};
