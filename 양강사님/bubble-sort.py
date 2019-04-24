def bubble_sort(li):
    n=len(li)
    # for j in range(n):
    #     if li[0] > li[0+1] :
    #        li[0] , li[0+1] = li[0+1] , li[0]
    #     else:
    #         pass
    for i in range(n-1):
        for j in range(n-1-i):
            if li[j] > li[j+1]:
                li[j],li[j+1] = li[j+1],li[j]

if __name__=="__main__":
    li=[6,2,1,4]
    bubble_sort(li)
    print(li)