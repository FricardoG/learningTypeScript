
// Define a custom class MyDate
export class MyDate{
  year: number;
  month: number;
  private day: number; // Private property

  // Constructor to initialize the MyDate object with year, month, and day
  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // Method to format and return the date as a string
  printFormat(): string{
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  // Private method to add zero padding to a number if it's less than 10
  private addPadding(value: number){
    if(value < 10){
      return `0${value}`;
    }
    return `${value}`;
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

  // Public method to get the private "day" property
  getDay(){
    return this.day;
  }
}

// Create an instance of the custom MyDate class with an initial date (July 16, 2009)
const myDate = new MyDate(2009, 7, 16);
console.log(myDate.printFormat());
console.log(myDate.getDay());
