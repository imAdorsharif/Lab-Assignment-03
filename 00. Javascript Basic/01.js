// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function getLeapYear(year) {
    if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
        return "Yes!! " + year + " is a leap year!";
    }
    else {
        return "Ops!! " + year + " is not a leap year!"; 
    }
}

console.log(getLeapYear(2020)); //Yes!! 2020 is a leap year!
console.log(getLeapYear(2021)); //Ops!! 2021 is not a leap year!
console.log(getLeapYear(2022)); //Ops!! 2022 is not a leap year!
console.log(getLeapYear(2023)); //Ops!! 2023 is not a leap year!
console.log(getLeapYear(2024)); //Yes!! 2024 is a leap year!