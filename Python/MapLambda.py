# map(function, *iterable)
# filter(function, *iterable)
# filter returns only truthy values only boolean functions are passed to filter


# lambda also known as anonymousfunction in python

# lambda arguements : expressions

# differnece between statements and expressions

# statements do not return anything whereas expresions returns at least 1 value such as mathematical expressions
# map and filter return an iterator so we call list() on it to see the result
my_list = [1, 2, 3, 4]
sum = lambda x, y: x + y
print(sum(8, 1))
print(sum(9, 1))
mapp = list(map(lambda x: x**2, my_list))
print(mapp)
# filter returns only true values
result = list(filter(lambda x: x % 2 == 0, my_list ))
print(result)


'''
According to azurewill using map and filter is not a pythonic way to achieve result 
above two results can be achieved using list comprehensions as well.
'''
print('using list comprehension')
mapped = [num **2 for num in my_list]
print(mapped)

even = [num for num in my_list if num % 2 == 0]
print(even)


