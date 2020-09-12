def gpa(marks,total):                              #function defined
    percentage = (marks/total)*100                 #calculation of percentage
    print (f"Percentage is: {percentage} %")       #printing percentage
    gpa = round((percentage/9.5),2)                #calculating GPA
    if percentage >=95:                            #conditions as per Indian Standards
        print("GPA is: 10")
        print("Grade is 'A'")
    elif percentage >=90:

        print(f"GPA is: {gpa}")
        print("Grade is 'A+'")                     # calculating grades
    elif percentage > 80:
        print(f"GPA is: {gpa}")
        print("Grade is 'A'")
    elif percentage > 75:
        print(f"GPA is: {gpa}")
        print("Grade is 'B+'")
    elif percentage > 70:
        print(f"GPA is: {gpa}")
        print("Grade is 'B'")
    elif percentage > 60:
        print(f"GPA is: {gpa}")
        print("Grade is 'C'")
    elif percentage > 50:
        print(f"GPA is: {gpa}")
        print("Grade is 'D'")
    else:
        print(f"GPA is: {gpa}")
        print("Grade is 'F'")

marks = int(input("Enter Marks Scored: \n"))       #taking input of scored marks
total = int(input("Enter Total Marks \n"))         #taking input of total marks
gpa(marks,total)
