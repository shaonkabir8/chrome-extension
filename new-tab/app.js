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
