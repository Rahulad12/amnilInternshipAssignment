function* simpleGenerator() {
    yield 'First value';
    yield 'Second value';
    return 'Final value';
  }
  
  const gen = simpleGenerator();
  
  console.log(gen.next().value); // 'First value'
  console.log(gen.next().value); // 'Second value'
  console.log(gen.next().value); // 'Final value'
  console.log(gen.next().value); // undefined

//  How Generators Work
// Function Declaration: Use function* syntax

// Yield Keyword: Pauses execution and returns a value

// next() Method: Resumes execution until next yield or return

// Returns: An object {value: any, done: boolean}