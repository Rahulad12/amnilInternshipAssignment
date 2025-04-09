# JavaScript `"use strict"` Example

This repository demonstrates how JavaScript's `"use strict"` mode helps catch common coding mistakes and write cleaner, safer code.

---

##  About `"use strict"`

`"use strict"` is a directive in JavaScript that enforces stricter parsing and error handling. It was introduced in **ECMAScript 5** to help developers avoid bugs and prevent the use of potentially dangerous JavaScript features.

---

## Files in this Repo

| File                 | Description                              |
|----------------------|------------------------------------------|
| `without-strict.js`  | Code with no `"use strict"` — runs silently, even with issues |
| `with-strict.js`     | Code using `"use strict"` — catches errors like undeclared variables |

---

## What `"use strict"` Does

- Disallows undeclared variables
- Prevents assigning to read-only/global objects
- Makes `this` behave predictably inside functions
- Catches duplicate parameter names
- Blocks use of reserved keywords (`interface`, `package`, etc.)

---

## Example

### Without `"use strict"`:

```js
function test() {
  x = 10; // No error, but creates a global variable (bad!)
  console.log(x);
}


test();
```

### With `"use strict"`:

```js
"use strict";

function test() {
  x = 10; // Error: 'x' is not defined
  console.log(x);
}


test();
```

---

