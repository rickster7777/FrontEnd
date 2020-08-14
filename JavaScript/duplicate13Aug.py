LIST = [7, 2, 1, 4, 5, 2, 1, 4, 5]
UNIQUE = []
COPY = []
COPY = LIST
count = 0
# for i in enumerate(LIST):
#     for j in range(LIST[i[0] + 1], len(LIST) -1):
#         if i[1] == j:
#             INDEX.append(i[1])
#         # if j not in LIST:
#         #     UNIQUE.append(i[1])

# print(UNIQUE)


for i in LIST:
    for j in COPY:
        if i == j:
            count += 1
    if count == 1:
        UNIQUE.append(i)
print(UNIQUE)

for i in LIST:
    if i not in UNIQUE:
        UNIQUE.append(i)
print(UNIQUE)
