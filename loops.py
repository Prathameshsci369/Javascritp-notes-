deposit = 900
loan = 400
print("Your Deposite are: ", deposit)
print("Your Load are : ", loan)
limit_reached = 0

while loan <= deposit and limit_reached ==0:
    new = int(input("Enter you loan Amount"))
    loan = loan + new 
    if loan <= deposit:

        print("Your Deposit are:", deposit)
        print("Your loan are: ", loan)
    else:
        loan = loan -new 
        print("Your load amount are reache max to the deposit. ")
        print("Your Deposit are:", deposit)
        print("Your loan are: ", loan)
        limit_reached = 1
