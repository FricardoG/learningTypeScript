
// Define a custom class MyDate
export class MyDate{

  // Constructor to initialize the MyDate object with year, month, and day
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day: number = 9
  ){}

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

const myDate = new MyDate(1993,7,10);
console.log(myDate.printFormat());
console.log(myDate.getDay());

const myDate2 = new MyDate();
console.log('() => ', myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log('(2022) => ', myDate3.printFormat());

const myDate4 = new MyDate(2022, 3);
console.log('(2022, 3) => ', myDate4.printFormat());