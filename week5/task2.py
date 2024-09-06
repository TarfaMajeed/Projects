'''
#tax income
status = eval(input("Enter your status: "))
income = eval(input("Enter your income: "))
if status == 0:
    if income>=0 and income<=8000:
        tax = 0.1*income
        print("Your tax rate is: ",tax)
    elif income>=8000 and income<=33000:
        tax = 0.15*income
        print("Your tax rate is: ",tax)
    elif income>=33000 and income<=82000:
        tax = 0.25*income
        print("Your tax rate is: ",tax)
    elif income>=82000 and income<=171000:
        tax = 0.28*income
        print("Your tax rate is: ",tax)
    elif income>=171000 and income<=372000:
        tax = 0.33*income
        print("Your tax rate is: ",tax)
    else:
        tax = 0.35*income
        print("Your tax rate is: ",tax)
if status == 1:
    if income>=0 and income<=16000:
        tax = 0.1*income
        print("Your tax rate is: ",tax)
    elif income>=16000 and income<=67000:
        tax = 0.15*income
        print("Your tax rate is: ",tax)
    elif income>=67000 and income<=137000:
        tax = 0.25*income
        print("Your tax rate is: ",tax)
    elif income>=137000 and income<=208000:
        tax = 0.28*income
        print("Your tax rate is: ",tax)
    elif income>=208000 and income<=372000:
        tax = 0.33*income
        print("Your tax rate is: ",tax)
    else:
        tax = 0.35*income
        print("Your tax rate is: ",tax)
if status == 2:
    if income>=0 and income<=8000:
        tax = 0.1*income
        print("Your tax rate is: ",tax)
    elif income>=8000 and income<=33000:
        tax = 0.15*income
        print("Your tax rate is: ",tax)
    elif income>=33000 and income<=68000:
        tax = 0.25*income
        print("Your tax rate is: ",tax)
    elif income>=68000 and income<=104000:
        tax = 0.28*income
        print("Your tax rate is: ",tax)
    elif income>=104000 and income<=186000:
        tax = 0.33*income
        print("Your tax rate is: ",tax)
    else:
        tax = 0.35*income
        print("Your tax rate is: ",tax)
'''

'''
#reverse string
s="tarfa"
print(s[-1])
print(s[-2])
print(s[-3])
print(s[-4])
print(s[-5])
'''
'''
#create a string and prints its length
s = str("my name is princess tarfa :)")
print (len(s))
'''
'''
age = eval(input("Enter your age: "))
while age>9:
    print ("you are eligible ")
    break
else:
    print("you are not eligible ")
'''
'''
i = 0
a = "geeksforgeeks"
while i<len(a):
    if a[i]!='g'and a[i]!='e':
           print(a[i])
    i=i+1
    
'''
'''
a="geeks"
b= "hello"
a1=''
b1=''
i=len(a)-1
n=len(b)-1
while i>=0:

    a1+= a[i]
    i = i - 1
while n>=0:

    b1+=b[n]
    n = n - 1
can = a1+b1
print(can)
'''
'''
a = eval(input("Enter number: "))
b=1
i=1
while i<=a:
    b*=i
    i+=1

print(b)
'''
 n = eval(input("Enter number: "))


