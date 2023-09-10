
// Define a custom class MyDate
export class MyDate{

  // Constructor to initialize the MyDate object with year, month, and day
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9
  ){}

  // Method to format and return the date as a string
  printFormat(): string{
    const day = this.addPadding(this._day);
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
      this._day += amount;
    }
    if(type === 'months'){
      this.month += amount;
    }
    if(type === 'years'){
      this.year += amount;
    }
  }

  // Public method to get the private "day" property
  get day(){
    return this._day;
  }

  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1993,7,10);
console.log(myDate.printFormat());
console.log(myDate.day);
console.log('1993', myDate.isLeapYear); // Check if 1993 is a leap year

const myDate2 = new MyDate(2000,7,10);
console.log('2000', myDate2.isLeapYear); // Check if 2000 is a leap year

const myDate3 = new MyDate(2001,7,10);
console.log('2001', myDate3.isLeapYear); // Check if 2001 is a leap year

const myDate4 = new MyDate(2004,7,10);
console.log('2004', myDate4.isLeapYear); // Check if 2004 is a leap year

