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

function isPalindrome(head: ListNode | null): boolean {
 let left: ListNode | null = head;

 function dfs(right: ListNode | null): boolean {
  if (!right) return true;

  // 끝까지 내려가기
  if (!dfs(right.next)) return false;

  // 돌아오면서 비교
  // 재귀 패턴: if (!recursiveCall()) return false;
  // 실패하면 false들고 위로 올라감
  if (left.val !== right.val) return false;

  // 왼쪽 포인터 이동
  left = left.next;

  return true;
 }

 return dfs(head);
}