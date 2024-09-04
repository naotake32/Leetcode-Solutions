#https://leetcode.com/problems/merge-two-sorted-lists/description/?envType=problem-list-v2&envId=linked-lis#
# You are given the heads of two sorted linked lists list1 and list2#
# Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists#
# Return the head of the merged linked list#
# Example 1#
# Input: list1 = [1,2,4], list2 = [1,3,4]
# Output: [1,1,2,3,4,4]
# Example 2#
# Input: list1 = [], list2 = []
# Output: []
# Example 3#
# Input: list1 = [], list2 = [0]
# Output: [0]#
# Constraints#
# The number of nodes in both lists is in the range [0, 50].
# -100 <= Node.val <= 100
# Both list1 and list2 are sorted in non-decreasing order#
# Seen this question in a real interview before?
# 1/5
# Yes
# No
# Accepted
# 4.5M
# Submissions
# 6.9M
# Acceptance Rate
# 65.1%


# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        # ダミーノードを作成
        dummy = ListNode(0)
        current = dummy

        # 2つのリストを比較してマージ
        while list1 is not None and list2 is not None:
            if list1.val <= list2.val:
                current.next = list1
                list1 = list1.next
            else:
                current.next = list2
                list2 = list2.next
            current = current.next

        # 残りのノードを追加
        if list1 is not None:
            current.next = list1
        else:
            current.next = list2

        # ダミーノードの次を返す
        return dummy.next