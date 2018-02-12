/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function traverseNodeToStr(node,str) {
      while(node.next) {
        str += node.val;
        node = node.next;
    }
    str += node.val;
    return str;
}

var addTwoNumbers = function(l1, l2) {
    let val1 = "";
    let val2 = "";
    let answer = [];

    let currNode = l1;
    val1 = traverseNodeToStr(currNode,val1);
    currNode = l2;
    val2 = traverseNodeToStr(currNode,val2);

    let addLoopLength = val1.length > val2.length ? val1.length : val2.length;
    let ten = false;
    for(let i =0;i<addLoopLength;i++) {
       let sum;
        if(val1[i] && val2[i]) sum = Number(val1[i]) + Number(val2[i]);
        else sum = val1[i] || val2[i];
        if(ten) {
            sum++;
        }
        if(sum>=10) {
            ten = true;
            answer.push(sum.toString()[1]);
        }else {
            ten = false;
            answer.push(sum.toString());
        }
    }
    if(ten) {
        answer.push("1");
    }

    let outputNode = new ListNode(Number(answer[0]));

    let loopNode = outputNode;
    for(let i = 1;i<answer.length;i++) {
        loopNode.next = new ListNode(Number(answer[i]));
        loopNode = loopNode.next;
    }
    return outputNode;

};