var = True

def BoolToString(var):
    if var == True:
        return 'true'
    else:
        return "false"

output = BoolToString(var)
print(output)