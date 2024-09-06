'''`
#get DOB from the user as input and calculate/display age
year= int(input("Enter a year:"))
month = int(input("Enter a month:"))
day = int(input("Enter a day:"))
age = 2024-year
m = age*12
d = m*30
print("your age is " , age , "years, " , m, "months, and" , d, "days")
'''

#reads an integer b/w 0 to 1000and adds them
num = int(input("Enter a number:"))
sod = 0
while num > 0:
    dig = num % 10
    sod+= dig
    num //= 10
print(sod)

