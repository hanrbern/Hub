// - - - - - -
// SET USERNAME
// - - - - - - 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.'); // prompt displays a dialogue box, similar to alert()
    localStorage.setItem('name', myName); // calls on an API localStorage
    myHeading.textContent = 'Welcome ' + myName + '!';
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome ' + storedName + '!';
  }

  myButton.onclick = function() {
    setUserName();
  }

// - - - - - - - - - - - 
// CURRENT DATE AND TIME
// - - - - - - - - - - - 

var today = new Date();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

var day = weekday[today.getDay()];
var month = months[today.getMonth()];
var numdate = today.getDate();
var year = today.getFullYear();
var hour = today.getHours();
var min = today.getMinutes();
if (min<10) {
  min = "0"+min;
}
var ampm = 'AM';
if (hour > 12) {
  hour-=12;
  ampm = "PM";
}

var date = day+', '+month+' '+numdate+', '+year;
document.getElementById("current-date").innerHTML = date;

var time = hour+':'+min+' '+ampm
document.getElementById("current-time").innerHTML = time;

// - - - - - - -
// RANGE SLIDERS
// - - - - - - -

function sliderValue() {
  var val = document.getElementById('sliderRange').value;
  document.getElementById('sliderval').innerHTML = 'Value: ' + val;
}

// - - - - - - - - -
//  CALCULATE SLEEP
// - - - - - - - - - 

function calcHours() {
  var start = document.getElementById('sleepTimein').value;
  var end = document.getElementById('wakeTimein').value;
  start = start.split(":");
  end = end.split(":");
  var startDate = new Date(0, 0, 0, start[0], start[1], 0);
  var endDate = new Date(0, 0, 0, end[0], end[1], 0);
  var diff = endDate.getTime() - startDate.getTime();
  var hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  var minutes = Math.floor(diff / 1000 / 60)
  if (hours < 0) {
    hours = hours + 24;
  }
  var sleepHours = 'You got ' + hours + ":" + (minutes <=9 ? "0" : "") + minutes + ' hours of sleep';
  document.getElementById('sleepHours').innerHTML = sleepHours;    
  }

function showSleep(num) {
  var n = num;
  if (n == 1) {
    document.getElementById('sleepTime').style.display = 'block';
  } else if (n == 2) {
    document.getElementById('wakeTime').style.display = 'block';
  } else if (n == 3) {
    document.getElementById('calcTime').style.display = 'inline-block';
    document.getElementById('sleepHours').style.display = 'inline-block';
  }
}

// - - - - -
// EXERCISE
// - - - - -

function showExercise() {
  document.getElementById('activity-containerf').style.display = 'block';
  document.getElementById('activity-containera').style.display = 'block';
  document.getElementById('activity-containers').style.display = 'block';
  document.getElementById('flex-q1').style.display = 'none';
  document.getElementById('flex-q1-in').style.display = 'none';
  document.getElementById('flex-q2').style.display = 'none';
  document.getElementById('flex-q2-in').style.display = 'none';
  document.getElementById('flex-q3').style.display = 'none';
  document.getElementById('aer-q1').style.display = 'none';
  document.getElementById('aer-q1-in').style.display = 'none';
  document.getElementById('aer-q2').style.display = 'none';
  document.getElementById('aer-q2-in').style.display = 'none';
  document.getElementById('aer-q3').style.display = 'none';
  document.getElementById('str-q1').style.display = 'none';
  document.getElementById('str-q1-in').style.display = 'none';
  document.getElementById('str-q2').style.display = 'none';
  document.getElementById('str-q2-in').style.display = 'none';
  document.getElementById('str-q3').style.display = 'none';
}

function hideExercise() {
  document.getElementById('activity-containerf').style.display = 'none';
  document.getElementById('activity-containera').style.display = 'none';
  document.getElementById('activity-containers').style.display = 'none';
}

function activityCheck(num) {
  var n = num;
  if (n == 'f2') {
      document.getElementById('flex-q2').style.display = "inline-block";
      document.getElementById('flex-q2-in').style.display = "inline-block";
  } else if (n == 'f3') {
      document.getElementById('flex-q3').style.display = "inline-block";
  } else if (n == 'a2') {
      document.getElementById('aer-q2').style.display = "inline-block";
      document.getElementById('aer-q2-in').style.display = "inline-block";
  } else if (n == 'a3') {
      document.getElementById('aer-q3').style.display = "inline-block";
  } else if (n == 's2') {
      document.getElementById('str-q2').style.display = "inline-block";
      document.getElementById('str-q2-in').style.display = "inline-block";
  } else if (n == 's3') {
      document.getElementById('str-q3').style.display = "inline-block";
  }
}

function activityCheck2() {
  var checkBoxf = document.getElementById('check-flex');
  var checkBoxa = document.getElementById('check-aer');
  var checkBoxs = document.getElementById('check-str');
  if (checkBoxf.checked == true) {
      document.getElementById('flex-q1').style.display = "inline-block";
      document.getElementById('flex-q1-in').style.display = "inline-block";
  } else {
      document.getElementById('flex-q1').style.display = "none";
      document.getElementById('flex-q1-in').style.display = "none";
      document.getElementById('flex-q2').style.display = "none";
      document.getElementById('flex-q2-in').style.display = "none";
      document.getElementById('flex-q3').style.display = "none";
  };
  if (checkBoxa.checked == true) {
      document.getElementById('aer-q1').style.display = "inline-block";
      document.getElementById('aer-q1-in').style.display = "inline-block";
  } else {
      document.getElementById('aer-q1').style.display = "none";
      document.getElementById('aer-q1-in').style.display = "none";
      document.getElementById('aer-q2').style.display = "none";
      document.getElementById('aer-q2-in').style.display = "none";
      document.getElementById('aer-q3').style.display = "none";
  };
  if (checkBoxs.checked == true) {
      document.getElementById('str-q1').style.display = "inline-block";
      document.getElementById('str-q1-in').style.display = "inline-block";
  } else {
      document.getElementById('str-q1').style.display = "none";
      document.getElementById('str-q1-in').style.display = "none";
      document.getElementById('str-q2').style.display = "none";
      document.getElementById('str-q2-in').style.display = "none";
      document.getElementById('str-q3').style.display = "none";
  }; 
}

// - - - - - 
// MOBILITY
// - - - - - 


function fallText(type) {
  var fallType = type;
  document.getElementById('fall-type').innerHTML = fallType;
}

function fallType(num) {
  var n = num;
  
  if (n == 3) {
    document.getElementById('submit-fall').style.display = 'block';
    document.getElementById('fall-more').style.display = 'none';
    document.getElementById('other-fall').style.display = 'none';
    document.getElementById('fall-more2').style.display = 'none';
    document.getElementById('almostfall-more').style.display = 'none';
  } else if (n == 2) {
    document.getElementById('almostfall-more').style.display = 'block';
    document.getElementById('submit-fall').style.display = 'none';
    document.getElementById('fall-more').style.display = 'none';
    document.getElementById('other-fall').style.display = 'none';
    document.getElementById('fall-more2').style.display = 'none';
  } else if (n == 1) {
    document.getElementById('submit-fall').style.display = 'none';
    document.getElementById('fall-more').style.display = 'block';
    document.getElementById('fall-more2').style.display = 'none';
    document.getElementById('other-fall').style.display = 'none';
    document.getElementById('almostfall-more').style.display = 'none';
  } else if (n == 11) {
    document.getElementById('submit-fall').style.display = 'block';
    document.getElementById('fall-more2').style.display = 'none';
    document.getElementById('other-fall').style.display = 'none';
  }
    else if (n == "12A" || n == "12B" || n == 22 || n == 23 || n == 24 || n == 25) {
    document.getElementById('submit-fall').style.display = 'block';
    document.getElementById('other-fall').style.display = 'none';
  } else if (n == 12) {
    document.getElementById('fall-more2').style.display = 'block';
    document.getElementById('submit-fall').style.display = 'none';
    document.getElementById('other-fall').style.display = 'none';
  } else if (n == 21) {
    document.getElementById('other-fall').style.display = 'block';
    document.getElementById('submit-fall').style.display = 'block';
  } 
}