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

// 연결 리스트 팰린드롬 공식 = 중간 찾고 + 뒤집고 + 마주보기
function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    // 1. 중간 찾기
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. 뒤 절반 뒤집기
    let prev: ListNode | null = null;
    let curr: ListNode | null = slow;

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // 3. 앞쪽과 비교
    let left: ListNode | null = head;
    let right: ListNode | null = prev;

    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }

    return true;
}