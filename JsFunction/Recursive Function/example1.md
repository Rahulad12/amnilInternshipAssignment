# Recursive Factor Finder

## Overview
This project implements a recursive function to find all factors of a given number. The function iterates from `1` to `num`, checking if `num` is divisible by each integer. If divisible, the integer is added to the factors list.

## How It Works
The function `Factor(num, divisor = 1, factors = [])` is called recursively:
- It checks if `divisor` exceeds `num`. If true, it returns the list of collected factors.
- If `num` is divisible by `divisor`, the divisor is added to the `factors` list.
- The function then calls itself with `divisor + 1`, passing the updated `factors` list.

## Code Implementation
```javascript
function Factor(num, divisor = 1, factors = []) {
  console.log(`Given Number ${num}\nTo top ${divisor}`);
  console.log(`Check (${divisor} > ${num}) :`, divisor > num);
  if (divisor > num) {
    return factors; // Base case: return accumulated factors
  }
  console.log(`Checking Factor Logic (${num} % ${divisor} === 0): `, num % divisor === 0);
  if (num % divisor === 0) {
    factors.push(divisor);
    console.log("Inside If Block", factors);
  }
  console.log("Outside the If Block, Factors: ", factors);
  console.log("*********************************");
  return Factor(num, divisor + 1, factors);
}

console.log(Factor(3));
```

## Execution Flow
For `Factor(3)`, the function executes as follows:

1. **First Call**: `divisor = 1`
   - `1 > 3` → **false**
   - `3 % 1 === 0` → **true**, so `1` is added.

2. **Second Call**: `divisor = 2`
   - `2 > 3` → **false**
   - `3 % 2 === 0` → **false**, no addition.

3. **Third Call**: `divisor = 3`
   - `3 > 3` → **false**
   - `3 % 3 === 0` → **true**, so `3` is added.

4. **Fourth Call**: `divisor = 4`
   - `4 > 3` → **true**, recursion stops, returning `[1, 3]`.

## Sample Output
```
Given Number 3
To top 1
Check (1 > 3) : false
Checking Factor Logic (3 % 1 === 0):  true
Inside If Block [ 1 ]
Outside the If Block, Factors:  [ 1 ]
*********************************
Given Number 3
To top 2
Check (2 > 3) : false
Checking Factor Logic (3 % 2 === 0):  false
Outside the If Block, Factors:  [ 1 ]
*********************************
Given Number 3
To top 3
Check (3 > 3) : false
Checking Factor Logic (3 % 3 === 0):  true
Inside If Block [ 1, 3 ]
Outside the If Block, Factors:  [ 1, 3 ]
*********************************
Given Number 3
To top 4
Check (4 > 3) : true
[ 1, 3 ]
```

## Conclusion
- The function correctly identifies and accumulates factors.
- The recursion stops when `divisor` exceeds `num`.
- This method ensures a step-by-step traversal of all possible factors efficiently.

