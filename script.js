//Query Selectors
let day = document.querySelector("#insertDay");
let month = document.querySelector("#insertMonth");
let year = document.querySelector("#insertYear");
let valDay = document.querySelector(".valDay");


// day.addEventListener("input", checkDay);

// function dayValue(e) {
//     checkDay()
//     if (validDay == true) {
//         valDay.textContent = e.target.value //this would replace the information in valDay span
//     } else {
//         return false; 
//     }
// }



//check Day
let validDay = false;

day.addEventListener("input", checkDay)

function checkDay(e) {
    let dayValue = e.target.value
    console.log(dayValue)

    if (dayValue < 1 || dayValue > 31) {
        validDay = false; 
        //make this change box to red for error with error message, will probably have to add a div below and insert text
    } else {
        validDay = true;
        //this will have to remove any text in that div if error ran first
    }
    console.log(validDay)
}

//check Month
let validMonth = false;

month.addEventListener("input", checkMonth)

function checkMonth(e) {
    let monthValue = e.target.value
    console.log(monthValue)

    if (monthValue < 1 || monthValue > 12) {
        validMonth = false;
    } else {
        validMonth = true;
    }
    console.log(validMonth)
}

//check Year
let validYear = false;

year.addEventListener("input", checkYear)

function checkYear(e) {
    let yearValue = e.target.value
    console.log(yearValue)

    let currentYear = new Date().getFullYear();
    console.log(currentYear)

    if (yearValue < 1 || yearValue > currentYear) { //pull current year to check
        validYear = false;
    } else {
        validYear = true;
    } 
    console.log(validYear)
}