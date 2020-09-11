k = int(input())

#MY_LIST = []
if (k > 1 and k < 1000):
    COPY = []
    count = 0
    MY_LIST = list(map(int, input().split()))
    # while True:
    #     my_list.append(int(input()))
    COPY = MY_LIST
    for i in MY_LIST:
        count = 0
        for j in COPY:
            if i == j:
                count += 1
        if count == 1:
            print(i)
            break


# from collections import Counter
# input()
# rooms = input().split()
# c = Counter(rooms)
# print(c.most_common()[-1][0])

# K = int(input())
# rooms = input().split()
# rooms.sort()
# capt_room = (set(rooms[0::2]) ^ set(rooms[1::2]))
# print(capt_room.pop())

_, a = input(), input().split()
a.sort()
print((set(a[0::2])^set(a[1::2])).pop())