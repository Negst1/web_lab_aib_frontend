import heapq

def calculate_medians(nums):
    min_heap = []
    max_heap = []
    medians_sum = 0
    
    for i, num in enumerate(nums):
        if not max_heap or num < -max_heap[0]:
            heapq.heappush(max_heap, -num)
        else:
            heapq.heappush(min_heap, num)
        
        if len(max_heap) > len(min_heap) + 1:
            heapq.heappush(min_heap, -heapq.heappop(max_heap))
        elif len(min_heap) > len(max_heap):
            heapq.heappush(max_heap, -heapq.heappop(min_heap))
        
        if i % 2 == 0:
            medians_sum += -max_heap[0] if len(max_heap) > len(min_heap) else min_heap[0]
        else:
            medians_sum += -max_heap[0]
    
    return medians_sum

N = int(input())
numbers = list(map(int, input().split()))

result = calculate_medians(numbers)
print(result)
