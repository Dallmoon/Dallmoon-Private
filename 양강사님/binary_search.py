li=[1,2,3,4,5,6,10,15,16,17,20,21,23,26]
n=len(li)
divider = n//2
target=20
def binary_search(target, li):
    start = 0
    end = len(li) - 1

    while start <= end: #
        mid = (start + end) // 2

        if li[mid] == target:
            return mid 
        elif li[mid] < target:
            start = mid + 1
        else:
            end = mid -1

    return li[target]
print(binary_search(target,li))


# 내 코드
# def binary_search(li, target):
#     while li[-1] >= li[0]:
#         if li[target] > divider:
#             del li[:divider+1]
#         else:
#             del li[divider:]
#         return li[target]

# print(binary_search(li,target))