
// Create a date from a string
const birthday = new Date("1995-07-15");
console.log("Birthday:", birthday.toDateString());

//  Compare two dates (get difference in days)
const today = new Date();
const vacation = new Date("2025-12-31");

const diffMs = vacation - today; // Difference in milliseconds
const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log(`Days until vacation: ${diffDays}`);

//  Convert to ISO string
console.log("ISO Format:", now.toISOString());
