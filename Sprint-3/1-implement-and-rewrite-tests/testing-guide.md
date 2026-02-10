# A Beginner's Guide to Testing Functions

## 1. What Is a Function?

```
Input  ──▶  Function  ──▶  Output
```

A function
- Takes **input** (via **arguments**)
- Does some work
- Produces **one output** (via a **return value**)
 
Example:

```
sum(2, 3) → 5
```

Important idea: the same input should produce the same output.


## 2. Testing Means Predicting

Testing means: 
> If I give this input, what output should I get?


## 3. Choosing Good Test Values

### Step 1: Determining the space of possible inputs
Ask:
- What type of value is expected?
- What values make sense?
  - If they are numbers:
    - Are they integers or floating-point numbers?
    - What is their range?
  - If they are strings:
    - What are their length and patterns?
- What values would not make sense?

### Step 2: Choosing Good Test Values 

#### Normal Cases

These confirm that the function works in normal use.

- What does a typical, ordinary input look like?
- Are there multiple ordinary groups of inputs? e.g. for an age checking function, maybe there are "adults" and "children" as expected ordinary groups of inputs.

  
#### Boundary Cases

Test values exactly at, just inside, and just outside defined ranges. 
These values are where logic breaks most often.

#### Consider All Outcomes

Every outcome must be reached by at least one test.

- How many different results can this function produce?
- Have I tested a value that leads to each one?

#### Crossing the Edges and Invalid Values

This tests how the function behaves when assumptions are violated.
- What happens when input is outside of the expected range?
- What happens when input is not of the expected type?
- What happens when input is not in the expected format?

## 4. How to Test

### 1. Using `console.assert()`

```javascript
  // Report a failure only when the first argument is false
  console.assert( sum(4, 6) === 10, "Expected 4 + 6 to equal 10" );
```

It is simpler than using `if-else` and requires no setup.
  
### 2. Jest Testing Framework

```javascript
  test("Should correctly return the sum of two positive numbers", () => {
    expect( sum(4, 6) ).toEqual(10);
    ... // Can test multiple samples 
  });

```

Jest supports many useful functions for testing but requires additional setup.
