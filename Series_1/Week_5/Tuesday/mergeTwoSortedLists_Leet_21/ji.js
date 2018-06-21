
var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2) return null;
    if(!l1) return l2;
    if(!l2) return l1;

    let sortedHead;
    let currNode;

    let n1 = l1;
    let n2 = l2;

    while(n1 || n2) {
        if(n1 === null) {
            currNode.next = n2;
            currNode = currNode.next;
            n2 = n2.next;
        }else if(n2 === null) {
            currNode.next = n1;
            currNode = currNode.next;
            n1 = n1.next;
        }else {
            if(n1.val < n2.val) {
                if(!sortedHead) {
                    sortedHead = n1;
                    currNode = sortedHead;
                }else {
                 currNode.next = n1;
                 currNode = currNode.next;
                }
                 n1 = n1.next;
            }else {
                if(!sortedHead) {
                    sortedHead = n2;
                    currNode = sortedHead;
                }else {
                    currNode.next = n2;
                    currNode = currNode.next;
                }
                n2 = n2.next;
            }
        }
    }
    return sortedHead;
};