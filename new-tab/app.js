// Running Clock
setInterval(() => {
  const time = (document.getElementById(
    "time"
  ).innerHTML = new Date().toLocaleTimeString());
});

// Current Day, Month and Year
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let dateObj = new Date();
let month = monthNames[dateObj.getMonth()];
let day = String(dateObj.getDate()).padStart(2, "0");
let year = dateObj.getFullYear();
let output = `(${day} ${month}, ${year})`;

document.getElementById("date").innerHTML = output;


// Google Search

// grab the elements to interact.
const form = document.querySelector('.form');
const input = document.querySelector('.form__input')

// initial search query [it'll be update on typing]
let searchQuery = '';

// Input Handler
input.addEventListener('change', e => {
  searchQuery += e.target.value;
})

// Submit Handler
form.addEventListener('submit', function(e) {
  // redirect to google with query string
  window.location.replace(`https://google.com/search?q=${searchQuery}`)
})



// Generate Greetings!
const weatherCondition = (hour) => {
  if (hour > 11 && hour < 19) {
    return 'afternoon';
  } else if (hour > 18) {
    return 'evening';
  } else {
    return 'morning';
  }
}

// Grab current hour to calculate weather condition
const currentHour = new Date().getHours()

// select element and update DOM
document.querySelector('.condition').innerHTML = weatherCondition(currentHour);