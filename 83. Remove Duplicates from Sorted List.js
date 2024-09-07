/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0)
    let current = dummy

    while(head !== null){
        if(head.next !== null && head.val === head.next.val) {
        // 重複がある場合、次のノードに進む
            head = head.next
        } else {
        // 重複がない場合、current.next に head を代入し、リストをつなぐ
            current.next = head
            current = current.next
            head = head.next; // head も次のノードへ進める  
        }
    }
    return dummy.next
};