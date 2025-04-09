// Get the current date
const date = new Date();

// Set the time zone (e.g., 'America/New_York')
const options = { 
  timeZone: 'America/New_York',
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit',
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit',
  hour12: true // or false for 24-hour format
};

// Format the date in the specified timezone
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

console.log(formattedDate);
