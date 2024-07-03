// IMPORT MICROMODAL AND DAYJS
const MicroModal = require("micromodal");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

// DOM SELECTION ELEMENTS
let timenow = document.querySelector(".timenow");
let timetoday = document.querySelector(".timetoday");
let select = document.getElementById("event_select");
let openButton = document.getElementById("open-modal");

// ARRAY WITH TIMEZONES
const timezones = [
  "America/Mexico_City",
  "America/Bogota",
  "America/Dominica",
  "America/Montevideo",
  "Europe/Dublin",
  "Europe/Berlin",
  "Europe/Athens",
  "Europe/Kiev",
  "Asia/Tbilisi",
  "Indian/Maldives",
  "Asia/Dhaka",
];
// DEFAULT TIME ZoNE
let selectedTimezone = timezones[5];

// FUNCTION FOR UPDATE OF TIMENOW AND TIME TODAY
function updateClock() {
  let myDate = new Date();
  timetoday.textContent = `${dayjs(myDate).format("dddd, D MMMM, YYYY")}`;
  timenow.textContent = `${dayjs(myDate)
    .tz(selectedTimezone)
    .format("HH:mm:ss")}`;
}

// ADDEVENT LISTENER FOR THE OPTION OF TIMEZONE
select.addEventListener("change", function () {
  selectedTimezone = timezones[this.value];
  MicroModal.close("modal-1");
  updateClock();
});

// ADD EVENT FOR LISTEN THE CLICK ON THE BUTTOn
openButton.addEventListener("click", function () {
  MicroModal.show("modal-1");
});

// SET INTERVAL OF 1 SECOND FOR THE FUNCTION UPDATECLOCK
setInterval(updateClock, 999);
