//Query Selectors
let day = document.querySelector("#insertDay");
let month = document.querySelector("#insertMonth");
let year = document.querySelector("#insertYear");
let valDay = document.querySelector(".valDay");
let errorDay = document.querySelector(".errorDay");
let errorMonth = document.querySelector(".errorMonth");
let errorYear = document.querySelector(".errorYear");
let labelDay = document.querySelector("body > div > div.ageCalc > div.inputField > div.day > label");
let labelMonth = document.querySelector("body > div > div.ageCalc > div.inputField > div.month > label");
let labelYear = document.querySelector("body > div > div.ageCalc > div.inputField > div.year > label");


// day.addEventListener("input", checkDay);

// function dayValue(e) {
//     checkDay()
//     if (validDay == true) {
//         valDay.textContent = e.target.value //this would replace the information in valDay span
//     } else {
//         return false; 
//     }
// }




let validDay = false;

day.addEventListener("input", checkDay)

function checkDay() { //checks for validity of day
    let dayValue = day.value

    if (month.value == 2 && year.value % 4 == 0) { //for feb with leap
        if (dayValue < 1 || dayValue > 29) {
            validDay = false;
        } else {
            validDay = true;
        }
    } else if (month.value == 2 && year.value % 4 != 0) { //for feb and no leap
        if (dayValue < 1 || dayValue > 28) {
            validDay = false;
        } else {
            validDay = true;
        }
    } else if (month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 || month.value == 8 ||
        month.value == 10 || month.value == 12) { //for months with 31 days
        if (dayValue < 1 || dayValue > 31) {
            validDay = false; 
            //make this change box to red for error with error message, will probably have to add a div below and insert text
        } else {
            validDay = true;
            //this will have to remove any text in that div if error ran first
        }
    } else if (month.value == 2 || month.value == 4 || month.value == 6 || month.value == 9 || month.value == 11) { //for months with 30 days
        if (dayValue < 1 || dayValue > 30) {
            validDay = false; 
        } else {
            validDay = true;
        }
    }
}


let validMonth = false;
let feb = false; //set up for 28/29 days
let leapYear = false; //leap year

month.addEventListener("input", checkMonth)

function checkMonth() { //checks for validity of month
    let monthValue = month.value

    if (monthValue == 2 && year.value % 4 === 0) {
        validMonth = true;
        feb = true;
        leapYear = true;
    } else if (monthValue == 2 && year.value % 4 != 0) {
        validMonth = true;
        feb = true;
        leapYear = false;
    } else if (monthValue < 1 || monthValue > 12) {
        validMonth = false;
        feb = false;
        leapYear = false;
    } else {
        validMonth = true;
        feb = false;
        leapYear = false;
    }
}


let validYear = false;

year.addEventListener("input", () => {
    checkDate();
})

function checkYear() { //checks for validity of year
    let yearValue = year.value

    let currentYear = new Date().getFullYear();

    if (yearValue < 1 || yearValue > currentYear) { //pull current year to check
        validYear = false;
    } else {
        validYear = true;
    } 
}

//check all values

const checkDate = () => {
    checkDay();
    checkMonth();
    checkYear();
    console.log("valid day:", validDay, "valid month:", validMonth, "is feb:", feb, "valid year:", validYear, "is leap:", leapYear)
    if (validDay == false) {
        errorDay.innerText = "Must be a valid day";  
        day.className = "error";
        labelDay.className = "errorLabel";
    } else if (validDay == true) {
        errorDay.textContent = "";
        day.className = "";
        labelDay.className = "";
    }

    if (validMonth == false) {
        errorMonth.textContent = "Must be a valid month"
        month.className = "error";
        labelMonth.className = "errorLabel";
    } else if (validMonth == true) {
        errorMonth.textContent = "";
        month.className = "";
        labelMonth.className = "";
    }

    if (validYear == false) {
        errorYear.textContent = "Must be a valid year"
        year.className = "error";
        labelYear.className = "errorLabel";
    } else if (validYear == true) {
        errorYear.textContent = "";
        year.className = "";
        labelYear.className = "";
    }
}

