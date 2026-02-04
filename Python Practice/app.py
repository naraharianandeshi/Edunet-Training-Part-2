#comments : single line ,multi line
# This is a single line comment 
"""This is a multi line comment
"""

"""
print("Hello,World!")
print("Hello Narahari!")

"""

# variables :
# name :char, string, int ,float ,boolean

'''day="tuesday"
print(day)
year = 2026
print(year)
'''
#name

#

'''a= int(input("enter a value"))
b= int(input("enter b value"))

if a==b and type(a) == type(b):
    print(a+b)
else:
    print("error")
'''
# non - primitive data types :
# list,tuple,set,dictionary

#opertors:
# arithmetic ,relational,logical,assignment,bitwise,    

'''coding1 =["Html", "Css", "Javascript", "Python"]
print(len(coding1))
J=0
for i in coding1:
    J+=1
    print(J,i)'''

# mutable  -->application--->address,phone number, email.
# immutable --- website----> flikpart, amazon.

'''studentlist =["Narahari", "Ravi", "Suresh", "Anil"]

for i in studentlist:
    print(i)'''

'''#set ages

ages =  {18, 20, 21, 19, 50, 35}  # Define a set of ages
#dictionary into the list

     #1 exp

agelist = list(ages)
print(agelist[0])  # Print the first element of the list
for age in agelist:
    print(age) 

    # 2 exp

if 30 in ages:
    print("30 is present in the set")  
else:
    print("30 is not present in the set")'''

'''# Dictionary part and also set part

empData ={
    "id":1,
    "Empid" :101,
    "EmpName":"Narahari",
    "Dept":"IT",
}
empData["Dept"]="HR dept"
print(empData)

'''

'''coins ={1,2,3,4,5,5,5,15,15,16,10,20,20,50,100,100,100}# purpose of unqiue values
# subscrition ----> In netflix then they again ask you to subscribe for moives  not right
coinscount = len(list(coins))
print(coinscount)
'''

# Task-1

#Problem:
#You have a tuple of users, where each user is represented as a (username, password) pair:

#Python
''' 
users = (
    ("babu", "1234"),
    ("ravi", "abcd"),
    ("sita", "pass123")
)
'''

'''
#Ask the user to input a username and password.
#Check if the credentials match any user in the tuple.
#Print "Login Successful" if a match is found, otherwise print "Invalid Username or Password".
 

users = (
    ("babu", "1234"),
    ("ravi", "abcd"),
    ("sita", "pass123")
)
attempts = 3
while attempts > 0:
    username = input("Enter username: ")
    password = input("Enter password: ")

    if (username, password) in users:
        print("Login Successfully",'welcome', username)
        break
    else:
        attempts -= 1
        if attempts > 0:
            print(f"Invalid Username or Password",attempts)
if attempts == 0:
     print("Too many failed attempts. Login blocked.")

print(type(username), type(users[0]))  # Check the types of username and a tuple element

'''

'''
for user in users:
    print(type(user[0])) # Check the types of user[0] and password'''

'''
if username == user[0] and password == user[1]:
        print("Login Successful")
        break
else:
         print("Invalid Username or Password")
         
'''


#expression:

#def hello(): 
#   print("hello world")

'''times=1
while times<3:
    hello()
    print(times)
    times +=1'''


#for i in range(3):
#    hello()

# Task-2

'''
userotp =  123
for _ in range(3):

    otp = int(input("Enter your otp"))
    if otp == userotp:
        print(otp)
        break
    else:
        print("invalid otp")     
'''
'''
import math
print(math.sqrt(16))
print(math.factorial(10))

'''

'''
import random
print(random.random())
print(random.randint(1,100))
# 5 or 6 

otp5 = random.randint(10000,99999)
print(otp5) '''

'''

import random
opt2 = random.randint(100,999)
print("Enter Your 3 digit otp is:", opt2)
attempts = 3
while attempts  >0:
    userotp = int(input("Enter your otp: "))
    if userotp == opt2:
        print("OTP verified successfully, Welcome!")
        break
    else:
        attempts -= 1
        print("Invalid otp and try again")
if attempts == 0:
    print("Too many failed attempts. Try after 24hr.")

'''

import my_module
x = int(input("Enter value x: "))
y = int(input("Enter value y: "))
print(my_module.add(x, y))
print(my_module.sub(x, y))





