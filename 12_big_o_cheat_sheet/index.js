Big O Cheat Sheet:
------------------

-Big Os-
O(1) Constant- no loops
// O(log N) Logarithmic- Usually searching algorithm have log(n) if they are sorted (Binary Search) (not on hash maps though)
O(n) Linear- for loops while loops
// O(n*log(n)) Log Linear - Sorting operations usually
O(n^2) Quadratic - every element in a collection needs to be compared to ever other element. Two nested loops
// O(2^N) Exponential- recursive algorithms that solve a problem of size N 
// O(n!) - you are adding a loop for every element. 

**Iterating through half a collection is still O(n)
**Two separate collections: O(a + b) or O(a * b)

-What can cause time in a function?- 
Operations (+, -, *, /)
Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())

-Rule Book-
Rule 1: Always worst case 
Rule 2: Remove Constant 
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b)
     + for steps in order
     * for nested steps
Rule 4: Drop Non-dominant terms 
+....................................... 

-What causes Space complexity?-
Variables
Data Structures 
Function Call
Allocations-


visit
bigocheatsheet.com 

Data Structures + Algorithms = Programs


// O(n!)
// factorial
