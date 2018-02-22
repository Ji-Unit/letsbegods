/*
	Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 */

const reverseLinkedList = head => {
  let curr = head;
  let prev = null;
  let next;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

const isPalindrome = head => {
  // edge case
  if (!head || head.next === null) {
    return true;
  }

  let tortoise = head;
  let hare = head;

  // get tortoise to center
  while (hare.next && hare.next.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  // reverse the remaining part of the linked list
  let reversedHalf = reverseLinkedList(tortoise.next);
  tortoise.next = null;

  // iterate through og first half and reversed
  let check1 = reversedHalf;
  let check2 = head;

  while (check1 && check2) {
    if (check1.val !== check2.val) {
      return false;
    }
    check1 = check1.next;
    check2 = check2.next;
  }
  return true;
};
