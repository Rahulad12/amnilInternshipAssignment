for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i); // Will log 4 three times 
    }, 1000);
}

//   we can use let instead of var
setTimeout(() => {

    console.log("****************")
}, 1000)

for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i); // Will log 1, 2, and 3
    }, 1000);
}