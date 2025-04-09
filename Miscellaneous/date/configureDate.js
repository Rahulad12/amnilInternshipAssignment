const now = new Date();
console.log("Current Date & Time:", now.toString());

//  Get individual components
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1); // 0-indexed (0 = Jan)
console.log("Date:", now.getDate());
console.log("Day of week:", now.getDay()); // 0 = Sunday
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());