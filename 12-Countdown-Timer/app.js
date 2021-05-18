const months = [
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
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2021, 05, 18, 11, 30, 0);
console.log(futureDate )
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
console.log(weekday)

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms 
const futureTime = futureDate.getTime();


function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calculate all values
  let days = t / oneDay;
  // console.log(days);
}

getRemainingTime();