let a = this;
console.log(a);  // Window {}

this.name = 'Sarah';
console.log(window.name); // Sarah