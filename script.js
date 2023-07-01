//Query Selectors
let day = document.querySelector("#insertDay");
let month = document.querySelector("#insertMonth").value;
let year = document.querySelector("#insertYear").value;
let valDay = document.querySelector(".valDay");


// day.addEventListener("input", checkDay);

// function dayValue(e) {
//     checkDay()
//     if (validDay == true) {
//         valDay.textContent = e.target.value
//     } else {
//         return false; 
//     }
// }

let validDay = false;

//check Day
day.addEventListener("input", checkDay)

function checkDay(e) {
    let dayValue = e.target.value
    console.log(dayValue)

    if (dayValue < 1 || dayValue > 31) {
        console.log("invalid day")
        validDay = false; 
        //make this change box to red for error with error message, will probably have to add a div below and insert text
    } else {
        console.log("valid day")
        validDay = true;
        //this will have to remove any text in that div if error ran first
    }
}

//check Month
const validMonth = () => {
    if (month < 1 || month > 12) {
        console.log("invalid month")
        return false;
    } else {
        console.log("valid month")
        return true;
    }
}

//check Year
const validYear = () => {
    if (year < 1) {
        console.log("invalid year")
        return false;
    } else {
        console.log("valid year")
        return true;
    }
}