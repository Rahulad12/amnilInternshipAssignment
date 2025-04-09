function outerFunction() {
    let counter = 0;
  
    function innerFunction() {
      counter++;
      console.log("Counter:", counter);
    }
  
    return innerFunction;
  }
  
  const count = outerFunction(); // outerFunction is called once
  count(); // Counter: 1
  count(); // Counter: 2
  count(); // Counter: 3
  