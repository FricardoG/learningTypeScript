
// Define a custom class MyDate
export class MyDate{

  // Constructor to initialize the MyDate object with year, month, and day
  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
  ){}

  // Method to format and return the date as a string
  printFormat(): string{
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._month += amount;
    }
    if(type === 'years'){
      this.year += amount;
    }
  }

  // Public method to get the private "day" property
  get day(){
    return this._day;
  }

  // Getter method to determine if the year is a leap year.
  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  // Getter method for retrieving the "month" property.
  get month(){
    return this._month;
  }

  // Setter method for setting the "month" property with validation.
  set month( newValue: number){
    if(newValue >= 1 && newValue <= 12){
      this._month = newValue;
    } else {
      throw new Error('month is out of range');
    }

  }
}

const myDate = new MyDate(1993,7,10);
console.log(myDate.printFormat());
console.log(myDate.day);
console.log('1993', myDate.isLeapYear); // Check if 1993 is a leap year
myDate.month = 4; // Set the "month" property to 4
console.log(myDate.month);
myDate.month = 13; // Attempt to set an invalid month value (out of range)
console.log(myDate.month); // This line will not execute due to the error thrown.


