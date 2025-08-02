/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deepCopy(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    return new ListNode(head.val, deepCopy(head.next));
}

function middleNode(head: ListNode | null): ListNode | null {
    let len = 0
    let copy = deepCopy(head)

    while (copy !== null) {
        len += 1
        copy = copy.next
    }

    const mid = len % 2 === 0 ? len / 2 + 1 : Math.round(len / 2)

    for (let i = 1; i < mid; i++) {
        head = head.next
    }

    return head
};