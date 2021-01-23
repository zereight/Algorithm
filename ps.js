/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
var mergeTwoLists = function(l1, l2) {
    const newListNode = new ListNode();
    let tempListNode = newListNode;
    
    
    while(l1&&l2){
        if(l1.val > l2.val){
            // tempListNode.val = l2.val;
            tempListNode.next = l2;
            l2 = l2.next;
        }else{
            // tempListNode.val = l1.val;
            tempListNode.next = l1;
            l1 = l1.next;
        }
        tempListNode = tempListNode.next;
    }
    
            
    tempListNode.next = l1 || l2;
    
    return newListNode.next;
};
