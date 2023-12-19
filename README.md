# Week-1-Toy-problems-Prerequisites

## index.js
This JavaScript function, `gradingSystem`, is designed to determine a grade based on a given mark. It follows a simple grading scale and provides a corresponding letter grade based on the input mark.

## index2.js
The Speed Detective determines consequences based on the input speed compared to the speed limit. It calculates demerit points for speeds exceeding the limit and can suspend the license for excessive speeds.

1. The program defines a variable `demeritPoints` to store the calculated demerit points.
2. The constant `speedLimit` is set to 70, representing the speed limit in miles per hour.
3. The function `speedDetective(speed)` takes a speed as input and returns consequences based on the given conditions:
   - If the speed is less than 0 or not a number, it returns "enter a valid speed."
   - If the speed is within the limit (0 to 70), it returns "Ok."
   - If the speed is between 70 and 130, it calculates demerit points based on the formula and returns the points.
   - If the speed exceeds 130, it returns "License suspended."
 
 ## index3.js
This js function calculates the net salary after deducting NHIF, NSSF, and PAYE based on the provided gross salary.