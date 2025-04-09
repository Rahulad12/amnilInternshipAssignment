const futureDate = new Date();
futureDate.setFullYear(2030);
futureDate.setMonth(11); // December (0-based)
futureDate.setDate(25);
console.log("Custom Future Date:", futureDate.toDateString());