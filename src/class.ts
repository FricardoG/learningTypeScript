
// Create a new Date object representing the current date and time
const date = new Date();
// Get the hours component of the date
date.getHours();
// Get the Unix timestamp (milliseconds since January 1, 1970)
date.getTime();
// Convert the date to an ISO 8601 string format
date.toISOString();

// Create a new Date object with a specific date (February 12, 1993)
const date2 = new Date(1993, 1, 12); // 0 is January
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

// Define a custom class MyDate
export class MyDate{
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

// Create an instance of the custom MyDate class
const myDate = new MyDate(2023, 10, 15);
console.log(myDate);