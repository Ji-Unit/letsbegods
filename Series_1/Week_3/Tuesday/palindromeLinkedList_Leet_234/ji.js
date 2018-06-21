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
var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    let hare = head;
    let tortise = head;
    while(hare.next && hare.next.next ) {
        hare = hare.next.next;
        tortise = tortise.next;
    }
    let prev = null;
    tortise = tortise.next
    let next;
    while(tortise) {
        next = tortise.next
        tortise.next = prev;
        prev = tortise;
        tortise = next;
    }

    let temp = head;
    while(temp && prev) {
        if(temp.val !== prev.val) return false
        temp = temp.next;
        prev = prev.next;
    }
    return true;
};