'''
def hello():
    name=str(input("enter ur name:"))
    if name:
        print("hello princess"+str(name))
    else:
        print("hello world")
    return
hello()
'''
'''
x = eval(input("enter a number"))
y = eval(input("enter 2 number"))
def calculator(x,y):

    add = x+y
    sub = x-y
    mul =x*y
    div = x/y
    print(add,sub,mul,div)
    return
calculator(x,y)
'''
'''
#create and print square of numbers between 1 to 20
def printvalues():
    m=list() #create an empty list
    for i in range (1,21):
        m.append(i**2) #append adds in m ...**  means square
    print(m)
    return
printvalues()
'''

#find unique elements in given lists
sample = [1,2,3,3,3,3,4,5]
def unique(sample):
    x=[]
    for i in sample:
        if i not in x:
            x.append(i)

    return(x)
print(unique(sample))



