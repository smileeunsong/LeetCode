class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        result = [None] * len(score)
        heap = [-n for n in score]
        heapq.heapify(heap)

        for i in range(1, len(score) + 1):
            biggest = -heapq.heappop(heap)
            idx = score.index(biggest)

            if i == 1:
                result[idx] = "Gold Medal"
            elif i == 2:
                result[idx] = "Silver Medal"
            elif i == 3:
                result[idx] = "Bronze Medal"
            else:
                result[idx] = str(i)

        return result
