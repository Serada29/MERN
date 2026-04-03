# Null vs Undefined

- undefined : it doesn't exist at all. "Very Nothing"
- null : it (kind of exist) but empty. "Kinda nothing"
  undefined → “not assigned yet”
  null → “assigned, but empty”

# Nullish Coalescing

- If the value on the left of ?? is null or undefined, the value on the right is returned. Otherwise, the value on the left is returned. It's a way to set sane defaults for variables that might be empty.

# Truthy and Falsy

A "truthy" value is a value that is considered true when encountered in a Boolean context. In JavaScript, you don't need to explicitly convert a value to a Boolean before using it in a conditional:

Common truthy values include:

true
42 (any number that isn't 0)
"hello" (any non-empty string)
[] (an empty array)
{} (an empty object)
function() {} (an empty function)
Common falsy values include:

false
0
"" (an empty string)
null
undefined
NaN (Not a Number)

# Ternary Operator

Syntax
const messageStatus = numRetries < retryLimit ? "Processing" : "Failed"

Why Is It Called a “Ternary”?
Ternary's latin root means "3", and it's the only JavaScript operator that takes three operands.

A condition followed by a question mark (?)
An expression to execute if the condition is truthy followed by a colon (:)
The expression to execute if the condition is falsy.

# Logical Operators

In JavaScript, the equivalent logical operators use symbols:

&& (and) - Returns true if both conditions are true
|| (or) - Returns true if either of the conditions are true
! (not) - Returns true only if the input is false
true && true; // true
true && false; // false
true || false; // true
false || false; // false
!false; // true
!true; // false
