# 🔒 JavaScript Closures -

## What is a Closure?

> A **closure** is a function that remembers its lexical scope even when executed outside that scope.

```js
function outer() {
  const secret = '123';
  return function inner() {
    console.log(secret); // Remembers 'secret'
  };
}

const myFunc = outer();
myFunc(); // Logs '123'
```
# Fundamentals
**Key Characteristics**
1. Lexical Scoping – functions remember the scope in which they were created

2. Persistent Memory – variables aren't garbage collected if referenced by a closure

3. Encapsulation – create private variables and methods