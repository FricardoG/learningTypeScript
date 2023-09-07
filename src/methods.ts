

// Define a custom class MyDate
export class MyDate{
  year: number;
  month: number;
  day: number;

   // Constructor to initialize the MyDate object with year, month, and day
  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // Method to format and return the date as a string
  printFormat(): string{
    return `${this.day}/${this.month}/${this.year}`;
  }

  // Method to add an amount of time to the date
  add(amount: number, type: 'days' | 'months' | 'years'){
    if(type === 'days'){
      this.day += amount;
    }
    if(type === 'months'){
      this.month += amount;
    }
    if(type === 'years'){
      this.year += amount;
    }
  }
}

// Create an instance of the custom MyDate class with an initial date (July 16, 2009)
const myDate = new MyDate(2009, 7, 16);

// Output the formatted date to the console (before any additions)
console.log(myDate.printFormat());

// Add 4 days to the date
myDate.add(4, 'days');

// Output the formatted date to the console (after adding 4 days)
console.log(myDate.printFormat());

// Add 1 month to the date
myDate.add(1, 'months');

// Output the formatted date to the console (after adding 1 month)
console.log(myDate.printFormat());

// Add 1 year to the date
myDate.add(1, 'years');

// Output the formatted date to the console (after adding 1 year)
console.log(myDate.printFormat());









