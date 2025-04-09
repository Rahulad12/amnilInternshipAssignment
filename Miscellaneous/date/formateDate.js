
// Create a new date object for the current time
const now = new Date();

// format a custom date string
const formatted = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}`;
console.log("Formatted Date & Time:", formatted);
