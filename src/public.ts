
// The "public" keyword is added to properties or methods by default even if it is not specified.

// Define a custom class MyDate
export class MyDate{
  public year: number;
  public month: number;
  public day: number;

  // Constructor to initialize the MyDate object with year, month, and day
  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // Method to format and return the date as a string
  public printFormat(): string{
    return `${this.day}/${this.month}/${this.year}`;
  }

  // Method to add an amount of time to the date
  public add(amount: number, type: 'days' | 'months' | 'years'){
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

console.log(myDate.day);
myDate.day = 12;
console.log(myDate.day);
