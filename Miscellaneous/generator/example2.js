function* taskRunner() {
    console.log('Task 1 started');
    yield;
    console.log('Task 2 started');
    yield;
    console.log('Task 3 started');
  }
  
  const tasks = taskRunner();
  tasks.next(); // Logs "Task 1 started"
  setTimeout(() => tasks.next(), 2000); // After 2 sec: "Task 2 started"
  setTimeout(() => tasks.next(), 4000); // After 4 sec: "Task 3 started"