// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
const addTwoNumbers = (l1, l2) => {
  if (!l1 || !l2) {
    return l1 || l2;
  }

  // init dummy
  const dummy = new ListNode(null);
  let curr = dummy;
  let list1 = l1;
  let list2 = l2;
  let list1Val;
  let list2Val;
  let carry = 0;
  let currVal;

  while (list1 || list2) {
    if (list1) {
      list1Val = list1.val;
      list1 = list1.next;
    } else {
      // set val to 0 in case one linkedlist is short ie. 1->2->3 , 4->5
      list1Val = 0;
    }

    if (list2) {
      list2Val = list2.val;
      list2 = list2.next;
    } else {
      // set val to 0 in case one linkedlist is short ie. 1->2->3 , 4->5
      list2Val = 0;
    }

    currVal = carry + list1Val + list2Val;
    carry = currVal > 9 ? 1 : 0;
    currVal = carry ? (currVal %= 10) : currVal;

    curr.next = new ListNode(currVal);
    curr = curr.next;
  }

  // add 1 in case last linked list is double digit
  if (carry) {
    curr.next = new ListNode(carry);
  }

  return dummy.next;
};
