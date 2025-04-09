function greet() {

    // this inside function
    // this refers to the global object
    console.log(this);
}

greet(); // Window {}