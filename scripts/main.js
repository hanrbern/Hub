// - - - - - 
// RESPONSIVE NAVBAR
// - - - - -

function respNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// - - - - - -
// SET USERNAME
// - - - - - - 

let btnUsername = document.getElementById('btn-username');
let pUsername = document.getElementById('p-username');

function setUsername() {
    let myName = prompt('Please enter your name.'); // prompt displays a dialogue box, similar to alert()
    localStorage.setItem('name', myName); // calls on an API localStorage
    pUsername.textContent = 'Welcome ' + myName + '!';
  }

  if(!localStorage.getItem('name')) {
    setUsername();
  } else {
    let storedName = localStorage.getItem('name');
    pUsername.textContent = 'Welcome ' + storedName + '!';
  }

  btnUsername.onclick = function() {
    setUsername();
  }

  // - - - - - - - - - - - 
// CURRENT DATE AND TIME
// - - - - - - - - - - - 

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

var today = new Date();

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
if (hour == 12){
  ampm = "PM";
};
if (hour > 12) {
  hour-=12;
  ampm = "PM";
}

var date = day+', '+month+' '+numdate+', '+year;
document.getElementById("current-date").innerHTML = date;

var time = hour+':'+min+' '+ampm
document.getElementById("current-time").innerHTML = time;

// refreshes the time every minute
setInterval(function refreshTime() {
  var today = new Date();

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
  if (hour == 12){
    ampm = "PM";
  };
  if (hour > 12) {
    hour-=12;
    ampm = "PM";
  }

  var date = day+', '+month+' '+numdate+', '+year;
  document.getElementById("current-date").innerHTML = date;

  var time = hour+':'+min+' '+ampm
  document.getElementById("current-time").innerHTML = time;
}, 40*1000);

// - - - - - - -
// localStorage
// - - - - - - -
function appendToStorage(name, data){
  var old = localStorage.getItem(name);
  if (old === null) old = "";
  localStorage.setItem(name, old + data)
}

function clearStorage(name){
  if(confirm('Are you sure you want to clear all of your logs?')){
    var name = name;
    localStorage.removeItem(name);
    document.location.reload(true);
  } else {
    return
  }
}

function decreaseCountStorage(name){
  var name = name; 
  str_count = localStorage.getItem(name);
  if (str_count == null || str_count == "null"){
    count = 0;
  } else {
    count = parseInt(str_count);
  };
  // increment count
  count--;
  // store count
  localStorage.setItem(name, count);
}

function countStorage(name){
  var name = name; 
  str_count = localStorage.getItem(name);
  if (str_count == null || str_count == "null"){
    count = 0;
  } else {
    count = parseInt(str_count);
  };
  // increment count
  count++;
  // store count
  localStorage.setItem(name, count);
}

function resetCount(name){
  var name = name;
  localStorage.setItem(name, '0')
}

function getStorage(name, id){
  var name = name;
  var id = id;
  str_count = localStorage.getItem(name);
  if (str_count == null || str_count == "null"){
    document.getElementById(id).innerHTML = 0;
  } else {
    document.getElementById(id).innerHTML = localStorage.getItem(name);
  }
}

function getStorageCheckX(name, id){
  var name = name;
  var id = id;
  str_count = localStorage.getItem(name);
  if (str_count == null || str_count == "null"){
    document.getElementById(id).innerHTML = '&#10007'; // x-mark
  } else {
    document.getElementById(id).innerHTML = '&#10003'; // check-mark
  }
}

function resetCheckX(name){
  var name = name;
  localStorage.setItem(name, 'null');

}

// - - - - -
// ACTIVITY
// - - - - -
function showSocialActivity() {
  document.getElementById("social-activity").style.background = 'dodgerblue';
  document.getElementById("physical-activity").style.background = 'white';

  document.getElementById("physical-activity-options").style.display = 'none';
  document.getElementById("outdoor-activities").style.display = 'none';
  document.getElementById("indoor-activities").style.display = 'none';
  document.getElementById("occupational-activities").style.display = 'none';
  document.getElementById("sport-activities").style.display = 'none';
  document.getElementById("physical-activity-questions").style.display = 'none';
  document.getElementById('selected-activity').style.display= 'none';

  var divIDs = ['physical-activity', 'physical-activity-options', 'outdoor-activities', 'indoor-activities', 'sport-activities', 'occupational-activities'];
  for (i = 0; i < divIDs.length; i++){
    let divID = divIDs[i];
    let children = [].slice.call(document.getElementById(divID).getElementsByTagName('button'), 0);
    for (j = 0; j < children.length; j++){
      let buttonID = children[j].getAttribute('id');
      document.getElementById(buttonID).style.background = 'white';
    }
  }
}

function showPhysicalActivity() {
  document.getElementById("social-activity").style.background = 'white';
  document.getElementById("physical-activity").style.background = 'rgb(197, 223, 226)';

  document.getElementById("physical-activity-options").style.display = 'block';
  document.getElementById("outdoor-activities").style.display = 'none';
  document.getElementById("indoor-activities").style.display = 'none';
  document.getElementById("occupational-activities").style.display = 'none';
  document.getElementById("sport-activities").style.display = 'none';
  document.getElementById("physical-activity-questions").style.display = 'none';
  document.getElementById('selected-activity').style.display= 'none';
  
  var divIDs = ['physical-activity', 'physical-activity-options', 'outdoor-activities', 'indoor-activities', 'sport-activities', 'occupational-activities'];
  for (i = 0; i < divIDs.length; i++){
    let divID = divIDs[i];
    let children = [].slice.call(document.getElementById(divID).getElementsByTagName('button'), 0);
    for (j = 0; j < children.length; j++){
      let buttonID = children[j].getAttribute('id');
      document.getElementById(buttonID).style.background = 'white';
    }
  }
}

function showOutdoorActivities() {
  document.getElementById("outdoors").style.background = '#f5bf4c';
  document.getElementById("indoors").style.background = 'white';
  document.getElementById("occupational").style.background = 'white';
  document.getElementById("sports").style.background = 'white';

  document.getElementById("outdoor-activities").style.display = 'block';
  document.getElementById("indoor-activities").style.display = 'none';
  document.getElementById("occupational-activities").style.display = 'none';
  document.getElementById("sport-activities").style.display = 'none';
  document.getElementById('selected-activity').style.display= 'none';

  var divIDs = ['outdoor-activities', 'indoor-activities', 'sport-activities', 'occupational-activities'];
  for (i = 0; i < divIDs.length; i++){
    let divID = divIDs[i];
    let children = [].slice.call(document.getElementById(divID).getElementsByTagName('button'), 0);
    for (j = 0; j < children.length; j++){
      let buttonID = children[j].getAttribute('id');
      document.getElementById(buttonID).style.background = 'white';
    }
  }
}

function showIndoorActivities(){
  document.getElementById("outdoors").style.background = 'white';
  document.getElementById("indoors").style.background = '#81b1eb';
  document.getElementById("occupational").style.background = 'white';
  document.getElementById("sports").style.background = 'white';

  document.getElementById("indoor-activities").style.display = 'block';
  document.getElementById("outdoor-activities").style.display = 'none';
  document.getElementById("occupational-activities").style.display = 'none';
  document.getElementById("sport-activities").style.display = 'none';
  document.getElementById('selected-activity').style.display= 'none';

  var divIDs = ['outdoor-activities', 'indoor-activities', 'sport-activities', 'occupational-activities'];
  for (i = 0; i < divIDs.length; i++){
    let divID = divIDs[i];
    let children = [].slice.call(document.getElementById(divID).getElementsByTagName('button'), 0);
    for (j = 0; j < children.length; j++){
      let buttonID = children[j].getAttribute('id');
      document.getElementById(buttonID).style.background = 'white';
    }
  }
}

function showOccupationalActivities(){
  document.getElementById("outdoors").style.background = 'white';
  document.getElementById("indoors").style.background = 'white';
  document.getElementById("occupational").style.background = 'rgb(120, 214, 132)';
  document.getElementById("sports").style.background = 'white';

  document.getElementById("occupational-activities").style.display = 'block';
  document.getElementById("outdoor-activities").style.display = 'none';
  document.getElementById("indoor-activities").style.display = 'none';
  document.getElementById("sport-activities").style.display = 'none';
  document.getElementById('selected-activity').style.display= 'none';

  var divIDs = ['outdoor-activities', 'indoor-activities', 'sport-activities', 'occupational-activities'];
  for (i = 0; i < divIDs.length; i++){
    let divID = divIDs[i];
    let children = [].slice.call(document.getElementById(divID).getElementsByTagName('button'), 0);
    for (j = 0; j < children.length; j++){
      let buttonID = children[j].getAttribute('id');
      document.getElementById(buttonID).style.background = 'white';
    }
  }
}

function showSportActivities(){
  document.getElementById("outdoors").style.background = 'white';
  document.getElementById("indoors").style.background = 'white';
  document.getElementById("occupational").style.background = 'white';
  document.getElementById("sports").style.background = 'rgb(167, 142, 207)';

  document.getElementById("sport-activities").style.display = 'block';
  document.getElementById("outdoor-activities").style.display = 'none';
  document.getElementById("indoor-activities").style.display = 'none';
  document.getElementById("occupational-activities").style.display = 'none';
  document.getElementById('selected-activity').style.display= 'none';

  var divIDs = ['outdoor-activities', 'indoor-activities', 'sport-activities', 'occupational-activities'];
  for (i = 0; i < divIDs.length; i++){
    let divID = divIDs[i];
    let children = [].slice.call(document.getElementById(divID).getElementsByTagName('button'), 0);
    for (j = 0; j < children.length; j++){
      let buttonID = children[j].getAttribute('id');
      document.getElementById(buttonID).style.background = 'white';
    }
  }
}

function recordActivity(activity){
  
  document.getElementById("physical-activity-questions").style.display = 'block';
  document.getElementById('activity-submit-button').style.display = 'none';
  document.getElementById('selected-activity').style.display = 'block';

  var activity = activity 
  document.getElementById('selected-activity').innerHTML = activity;

  if (activity == 'Walking'){
    document.getElementById('walking').style.background = '#81b1eb';
    document.getElementById('jogging').style.background = 'white';
    document.getElementById('cycling').style.background = 'white';
    document.getElementById('yardwork-gardening').style.background = 'white';
    document.getElementById('water-activities').style.background = 'white';
    document.getElementById('canoeing-paddling').style.background = 'white';
  } else if (activity == "Jogging"){
    document.getElementById('walking').style.background = 'white';
    document.getElementById('jogging').style.background = '#81b1eb';
    document.getElementById('cycling').style.background = 'white';
    document.getElementById('yardwork-gardening').style.background = 'white';
    document.getElementById('water-activities').style.background = 'white';
    document.getElementById('canoeing-paddling').style.background = 'white';
  } else if (activity == "Cycling"){
    document.getElementById('walking').style.background = 'white';
    document.getElementById('jogging').style.background = 'white';
    document.getElementById('cycling').style.background = '#81b1eb';
    document.getElementById('yardwork-gardening').style.background = 'white';
    document.getElementById('water-activities').style.background = 'white';
    document.getElementById('canoeing-paddling').style.background = 'white';
  } else if (activity == "Yardwork/Gardening"){
    document.getElementById('walking').style.background = 'white';
    document.getElementById('jogging').style.background = 'white';
    document.getElementById('cycling').style.background = 'white';
    document.getElementById('yardwork-gardening').style.background = '#81b1eb';
    document.getElementById('water-activities').style.background = 'white';
    document.getElementById('canoeing-paddling').style.background = 'white';
  } else if (activity == "Winter activities"){
    document.getElementById('walking').style.background = 'white';
    document.getElementById('jogging').style.background = 'white';
    document.getElementById('cycling').style.background = 'white';
    document.getElementById('yardwork-gardening').style.background = 'white';
    document.getElementById('water-activities').style.background = '#81b1eb';
    document.getElementById('canoeing-paddling').style.background = 'white';
  } else if (activity == "Canoeing/Paddling"){
    document.getElementById('walking').style.background = 'white';
    document.getElementById('jogging').style.background = 'white';
    document.getElementById('cycling').style.background = 'white';
    document.getElementById('yardwork-gardening').style.background = 'white';
    document.getElementById('water-activities').style.background = 'white';
    document.getElementById('canoeing-paddling').style.background = '#81b1eb';
  } else if (activity == "Swimming"){
    document.getElementById('swimming').style.background = 'rgb(120, 214, 132)';
    document.getElementById("dancing").style.background = 'white';
    document.getElementById("yoga-pilates").style.background = 'white';
    document.getElementById("treadmill").style.background = 'white';
    document.getElementById("strength").style.background = 'white';
    document.getElementById("housework").style.background = 'white';
  } else if (activity == "Dancing"){
    document.getElementById('swimming').style.background = 'white';
    document.getElementById("dancing").style.background = 'rgb(120, 214, 132)';
    document.getElementById("yoga-pilates").style.background = 'white';
    document.getElementById("treadmill").style.background = 'white';
    document.getElementById("strength").style.background = 'white';
    document.getElementById("housework").style.background = 'white';
  } else if (activity == "Yoga/Pilates"){
    document.getElementById('swimming').style.background = 'white';
    document.getElementById("dancing").style.background = 'white';
    document.getElementById("yoga-pilates").style.background = 'rgb(120, 214, 132)';
    document.getElementById("treadmill").style.background = 'white';
    document.getElementById("strength").style.background = 'white';
    document.getElementById("housework").style.background = 'white';
  } else if (activity == "Treadmill/Elliptical/Cycling"){
    document.getElementById('swimming').style.background = 'white';
    document.getElementById("dancing").style.background = 'white';
    document.getElementById("yoga-pilates").style.background = 'white';
    document.getElementById("treadmill").style.background = 'rgb(120, 214, 132)';
    document.getElementById("strength").style.background = 'white';
    document.getElementById("housework").style.background = 'white';
  } else if (activity == "Strength Training"){
    document.getElementById('swimming').style.background = 'white';
    document.getElementById("dancing").style.background = 'white';
    document.getElementById("yoga-pilates").style.background = 'white';
    document.getElementById("treadmill").style.background = 'white';
    document.getElementById("strength").style.background = 'rgb(120, 214, 132)';
    document.getElementById("housework").style.background = 'white';
  } else if (activity == "Housework"){
    document.getElementById('swimming').style.background = 'white';
    document.getElementById("dancing").style.background = 'white';
    document.getElementById("yoga-pilates").style.background = 'white';
    document.getElementById("treadmill").style.background = 'white';
    document.getElementById("strength").style.background = 'white';
    document.getElementById("housework").style.background = 'rgb(120, 214, 132)';
  } else if (activity == "Carpentry"){
    document.getElementById('carpentry').style.background = "rgb(167, 142, 207)";
    document.getElementById('manual-labor').style.background = "white";
  } else if (activity == "Manual labor"){
    document.getElementById('carpentry').style.background = "white";
    document.getElementById('manual-labor').style.background = "rgb(167, 142, 207)";
  } else if (activity == "Racquet Sports"){
    document.getElementById('racket').style.background = "#f5bf4c";
    document.getElementById('golf').style.background = 'white';
    document.getElementById('curling').style.background = 'white';
    document.getElementById('lawn-bowling').style.background = 'white';
    document.getElementById('team-sports').style.background = 'white';
  } else if (activity == "Golf"){
    document.getElementById('racket').style.background = "white";
    document.getElementById('golf').style.background = '#f5bf4c';
    document.getElementById('curling').style.background = 'white';
    document.getElementById('lawn-bowling').style.background = 'white';
    document.getElementById('team-sports').style.background = 'white';
  } else if (activity == "Curling"){
    document.getElementById('racket').style.background = "white";
    document.getElementById('golf').style.background = 'white';
    document.getElementById('curling').style.background = '#f5bf4c';
    document.getElementById('lawn-bowling').style.background = 'white';
    document.getElementById('team-sports').style.background = 'white';
  } else if (activity == "Lawn bowling"){
    document.getElementById('racket').style.background = "white";
    document.getElementById('golf').style.background = 'white';
    document.getElementById('curling').style.background = 'white';
    document.getElementById('lawn-bowling').style.background = '#f5bf4c';
    document.getElementById('team-sports').style.background = 'white';
  } else if (activity == "Team sports"){
    document.getElementById('racket').style.background = "white";
    document.getElementById('golf').style.background = 'white';
    document.getElementById('curling').style.background = 'white';
    document.getElementById('lawn-bowling').style.background = 'white';
    document.getElementById('team-sports').style.background = '#f5bf4c';
  } 
}

function touchEndFunction(id){
  var id = id;
  $(document.getElementById(id)).removeClass('hover')
}

function changeHour(hour, id){
  var hour = hour;
  var id = id;
  document.getElementById(id).innerHTML = hour;
  showSubmit();
  ontouchend = "touchEndFunction(id)";
}

function changeMin(minutes, id){
  var minutes = minutes;
  var id = id;
  document.getElementById(id).innerHTML = minutes;
  showSubmit();
  ontouchend = "touchEndFunction(id)";
}

function changeAMPM(AMPM, id){
  var AMPM = AMPM;
  var id = id;
  document.getElementById(id).innerHTML = AMPM;
  showSubmit();
  ontouchend = "touchEndFunction(id)";
}

function changeDuration(duration, id){
  var duration = duration;
  var id = id;
  document.getElementById(id).innerHTML = duration;
  showSubmit();
  ontouchend = "touchEndFunction(id)";
}

function showSubmit(){
  // if on the sleep page: (look at showSleepSubmit())
  if (document.getElementById('nap-hour') !== null){
    // if the bedtime-hour, bedtime-minutes, and bedtime-ampm have been filled out: show log-bed-time
    if (document.getElementById('bedtime-hour').innerText !== 'Hour ' 
    && document.getElementById('bedtime-minutes').innerText !== 'Minutes '
    && document.getElementById('bedtime-ampm').innerText !== 'AM/PM '
    ){document.getElementById('log-bed-time').style.display = 'inline'};
    // if the waketime-hour, waketime-minutes, and waketime-ampm have been filled out: show log-wake-time
    if (document.getElementById('waketime-hour').innerText !== 'Hour ' 
    && document.getElementById('waketime-minutes').innerText !== 'Minutes '
    && document.getElementById('waketime-ampm').innerText !== 'AM/PM '
    ){document.getElementById('log-wake-time').style.display = 'inline'};
    // if nap-hour, nap-minutes, nap-ampm, nap-dur, and log-nap have been filled out: show log-nap
    if (document.getElementById('nap-hour').innerText !== 'Hour ' 
    && document.getElementById('nap-minutes').innerText !== 'Minutes '
    && document.getElementById('nap-ampm').innerText !== 'AM/PM '
    && document.getElementById('nap-dur').innerText !== 'Duration '
    ){document.getElementById('log-nap').style.display = 'inline'};
  };
   // if on the activity page:
  if (document.getElementById('dropdown-hour') !== null){
    // if dropdown-hour, dropdown-minutes, dropdown-ampm, and activity-dur have been filled out: show activity-submit-button
    if (document.getElementById('dropdown-hour').innerText !== 'Hour ' 
    && document.getElementById('dropdown-minutes').innerText !== 'Minutes '
    && document.getElementById('dropdown-ampm').innerText !== 'AM/PM '
    && document.getElementById('activity-dur').innerText !== 'Duration '
    ){document.getElementById('activity-submit-button').style.display = 'inline'};
    // if dropdown-hour-preferences, dropdown-minutes-preferences, dropdown-ampm-preferences, and activity-dur-preferences have been filled out: show activity-submit-preferences
    if (document.getElementById('dropdown-hour-preferences').innerText !== 'Hour ' 
    && document.getElementById('dropdown-minutes-preferences').innerText !== 'Minutes '
    && document.getElementById('dropdown-ampm-preferences').innerText !== 'AM/PM '
    && document.getElementById('activity-dur-preferences').innerText !== 'Duration '
    ){document.getElementById('activity-submit-preferences').style.display = 'inline'};
  }  
}

function submitActivity(){
  var activity = document.getElementById('selected-activity').innerHTML;
  var activityDur = document.getElementById('activity-dur').innerHTML;
  var activityStartHour = document.getElementById('dropdown-hour').innerHTML;
  var activityStartMin = document.getElementById('dropdown-minutes').innerHTML;
  var activityStartAMPM = document.getElementById('dropdown-ampm').innerHTML;
  var message = 'You did ' + activity + ' exercise for ' + activityDur + ', starting at ' + activityStartHour + ':' + activityStartMin + ' ' + activityStartAMPM + '.<br>' ;
  
  // after clicking submit, everything should reset
  document.getElementById('dropdown-hour').innerHTML = 'Hour <i class="fa fa-caret-down"></i>';
  document.getElementById('dropdown-minutes').innerHTML = 'Minutes <i class="fa fa-caret-down"></i>';
  document.getElementById('dropdown-ampm').innerHTML = 'AM/PM <i class="fa fa-caret-down"></i>';
  document.getElementById('activity-dur').innerHTML = 'Duration <i class="fa fa-caret-down"></i>';
  // every button becomes white and all of the dropdowns go back to being hidden
  document.getElementById("social-activity").style.background = 'white';
  document.getElementById("physical-activity").style.background = 'white';

  document.getElementById("physical-activity-options").style.display = 'none';
  document.getElementById("outdoor-activities").style.display = 'none';
  document.getElementById("indoor-activities").style.display = 'none';
  document.getElementById("occupational-activities").style.display = 'none';
  document.getElementById("sport-activities").style.display = 'none';
  document.getElementById("physical-activity-questions").style.display = 'none';

  document.getElementById("outdoors").style.background = 'white';
  document.getElementById("indoors").style.background = 'white';
  document.getElementById("occupational").style.background = 'white';
  document.getElementById("sports").style.background = 'white';

  document.getElementById('walking').style.background = 'white';
  document.getElementById('jogging').style.background = 'white';
  document.getElementById('cycling').style.background = 'white';
  document.getElementById('yardwork-gardening').style.background = 'white';
  document.getElementById('water-activities').style.background = 'white';
  document.getElementById('canoeing-paddling').style.background = 'white';

  document.getElementById('swimming').style.background = 'white';
  document.getElementById("dancing").style.background = 'white';
  document.getElementById("yoga-pilates").style.background = 'white';
  document.getElementById("treadmill").style.background = 'white';
  document.getElementById("strength").style.background = 'white';
  document.getElementById("housework").style.background = 'white';

  document.getElementById('carpentry').style.background = "white";
  document.getElementById('manual-labor').style.background = "white";
  document.getElementById('racket').style.background = "white";
  document.getElementById('golf').style.background = 'white';
  document.getElementById('curling').style.background = 'white';
  document.getElementById('lawn-bowling').style.background = 'white';
  document.getElementById('team-sports').style.background = 'white';
  document.getElementById('selected-activity').innerHTML = "";

  document.getElementById('logged-activities-original').innerHTML += message;
  // Append to storage
  appendToStorage("loggedActivities", message);
  // Add to dashboard counter
  countStorage("activityCount");
}

function activityButtonsFromPreferences(){
  if (localStorage.getItem('activitySelections') == null){newArrayLocalStorage('activitySelections')};
  var array = JSON.parse(localStorage.getItem('activitySelections'));
  if (array.length == 0){
    document.getElementById('link-to-preferences').style.display = 'block';
    document.getElementById('activities-from-preferences').style.display = 'none';
  } else {
    document.getElementById('activities-from-preferences').style.display = 'block';
    document.getElementById('link-to-preferences').style.display = 'none';
    var element = document.getElementById('activities-from-preferences');
    for (var i = 0; i < array.length; i++){
      let button = document.createElement("button");
      button.id = 'button-' + i;
      button.innerHTML = array[i];
      button.className = "btn";
      element.appendChild(button);
      recordActivity(button.innerHTML);
      button.onclick = function(){
        // change button colour
        buttonsInDiv(button.id, 'activities-from-preferences');
        // update activity in localStorage
        localStorage.setItem('activitySelectedFromPreferences', button.innerHTML);
        // show time and duration sections
        document.getElementById('start-and-duration').style.display = 'block';
        // reset start and durations
        document.getElementById('dropdown-hour-preferences').innerHTML = 'Hour <i class="fa fa-caret-down"></i>';
        document.getElementById('dropdown-minutes-preferences').innerHTML = 'Minutes <i class="fa fa-caret-down"></i>';
        document.getElementById('dropdown-ampm-preferences').innerHTML = 'AM/PM <i class="fa fa-caret-down"></i>';
        document.getElementById('activity-dur-preferences').innerHTML = 'Duration <i class="fa fa-caret-down"></i>';
        document.getElementById('activity-submit-preferences').style.display = 'none';
      }
    }
  }
}

function loadActivity(){
  document.getElementById('selected-activity').innerHTML = '';
  document.getElementById('selected-activity').style.display = 'none';
  document.getElementById('physical-activity-questions').style.display = 'none';
  document.getElementById('start-and-duration').style.display = 'none';
  document.getElementById('logged-activities-original').innerHTML = localStorage.getItem('loggedActivities');
  if (localStorage.getItem('ActivityStatementArray') !== null){
    var arrayName = 'ActivityStatementArray';
    var divID = 'logged-activities-preferences';
    var countName = 'activityCountPreferences';
    if (localStorage.getItem(arrayName) == null){newArrayLocalStorage(arrayName)};
    var retrievedData = localStorage.getItem(arrayName);
    var array = JSON.parse(retrievedData);
    var element = document.getElementById(divID);
    for (var i = 0; i < array.length; i++){
      let p = document.createElement('p');
      p.innerHTML = array[i];
      p.id = 'p-' + (i + 6);
      p.style.display = 'inline';
      let button = document.createElement('button');
      button.id = 'button-' + (i + 6);
      button.style.display = 'inline';
      button.innerHTML = 'X';
      button.className = 'btnx';
      button.onclick = function(){
        element.removeChild(p);
        element.removeChild(button);
        let newarr = removeItemOnce(JSON.parse(localStorage.getItem(arrayName)), p.innerHTML);
        localStorage.setItem(arrayName, JSON.stringify(newarr));
        decreaseCountStorage(countName);
      };
      element.appendChild(p);
      element.appendChild(button);
    }
    document.getElementById('logged-activities-preferences').display = 'block';
    localStorage.setItem(countName, array.length);
  };
}

function submitActivityFromPreferences(){
  var activity = localStorage.getItem('activitySelectedFromPreferences');
  var hour = document.getElementById('dropdown-hour-preferences').innerHTML;
  var min = document.getElementById('dropdown-minutes-preferences').innerHTML;
  var ampm = document.getElementById('dropdown-ampm-preferences').innerHTML;
  var duration = document.getElementById('activity-dur-preferences').innerHTML;
  if (localStorage.getItem('ActivityStatementArray') == null){newArrayLocalStorage('ActivityStatementArray')};
  var retrievedData = localStorage.getItem('ActivityStatementArray');
  var array = JSON.parse(retrievedData);
  var message = '<br> You indicated that you did ' + activity + ' for ' + duration + ', starting at ' + hour + ':' + min + ampm + '.'; 
  array.push(message);
  localStorage.setItem('ActivityStatementArray', JSON.stringify(array));
  if (localStorage.getItem('ActivityStatementArray') !== null){
    var arrayName = 'ActivityStatementArray';
    var divID = 'logged-activities-preferences';
    var countName = 'activityCountPreferences';
    if (localStorage.getItem(arrayName) == null){newArrayLocalStorage(arrayName)};
    var retrievedData = localStorage.getItem(arrayName);
    var array = JSON.parse(retrievedData);
    var element = document.getElementById(divID);
    for (var i = 0; i < array.length; i++){
      let p = document.createElement('p');
      p.innerHTML = array[i];
      p.id = 'p-' + (i + 6);
      p.style.display = 'inline';
      let button = document.createElement('button');
      button.id = 'button-' + (i + 6);
      button.style.display = 'inline';
      button.innerHTML = 'X';
      button.className = 'btnx';
      button.onclick = function(){
        element.removeChild(p);
        element.removeChild(button);
        let newarr = removeItemOnce(JSON.parse(localStorage.getItem(arrayName)), p.innerHTML);
        localStorage.setItem(arrayName, JSON.stringify(newarr));
        decreaseCountStorage(countName);
      };
      if (!document.getElementById(p.id)){element.appendChild(p);};
      if (!document.getElementById(button.id)){element.appendChild(button);};
    }
    document.getElementById('logged-activities-preferences').display = 'block';
    localStorage.setItem(countName, array.length);
  };
  // reset acivity buttons
  buttonsInDiv('All', 'activities-from-preferences');
  // rest question buttons
  document.getElementById('dropdown-hour-preferences').innerHTML = 'Hour <i class="fa fa-caret-down"></i>';
  document.getElementById('dropdown-minutes-preferences').innerHTML = 'Minutes <i class="fa fa-caret-down"></i>';
  document.getElementById('dropdown-ampm-preferences').innerHTML = 'AM/PM <i class="fa fa-caret-down"></i>';
  document.getElementById('activity-dur-preferences').innerHTML = 'Duration <i class="fa fa-caret-down"></i>';
  // hide questions
  document.getElementById('start-and-duration').style.display = 'none';
}

// - - - - -
// SLEEP
// - - - - -

// run on load
function checkSleepEntries(){
  var sleepqual = localStorage.getItem('logmessage1');
  var BedTime = localStorage.getItem('logmessage2');
  var WakeTime = localStorage.getItem('logmessage3');
  var Nap = localStorage.getItem('NapEntryArray');
  var count = 0;
  
  if (sleepqual == null || sleepqual == "null"){
    document.getElementById('sleep-quality').style.display = "block";
  } else {
    document.getElementById('logmsg1').innerHTML = localStorage.getItem('logmessage1');
    document.getElementById('sleep-quality').style.display = "none";
    createClearButton('logmsg1', 'logmessage1', 'clearlogmsg1', 'sleep-quality', 'sleepCount');
    count += 1;
  }; if (BedTime == null || BedTime == "null"){
    document.getElementById('bedtime').style.display = "block";
  } else {
    document.getElementById('logmsg2').innerHTML = localStorage.getItem('logmessage2');
    document.getElementById('bedtime').style.display = "none";
    createClearButton('logmsg2', 'logmessage2', 'clearlogmsg2', 'bedtime', 'sleepCount');
    count += 1;
  }; if (WakeTime == null || WakeTime == "null"){
    document.getElementById('waketime').style.display = "block";
  } else {
    document.getElementById('logmsg3').innerHTML = localStorage.getItem('logmessage3');
    document.getElementById('waketime').style.display = "none";
    createClearButton('logmsg3', 'logmessage3', 'clearlogmsg3', 'waketime', 'sleepCount');
    count += 1;
  }; if (Nap != null && Nap != "null"){
    // read in the array
    if (localStorage.getItem('NapEntryArray') == null){newArrayLocalStorage('NapEntryArray');};
    var retrievedData = localStorage.getItem('NapEntryArray');
    var array = JSON.parse(retrievedData);
    var element = document.getElementById("nap-entries");
    // for every element in the array:
    for (var i = 0; i < array.length; i++){
      // create a p tag
      let p = document.createElement("p"); 
      // innerhtml of the p tag is the text from the element in the array
      p.innerHTML = array[i];
      // give an id to the p tag
      p.id = "p-" + i;
      p.style.display = 'inline-block';
      // create a button
      let button = document.createElement("button");
      // give an id to the button
      button.id = 'button-' + i;
      button.style.display = 'inline-block';
      // give innerhtml and class to the button
      button.innerHTML = 'X';
      button.className = 'btnx';
      // add button functionality:
      button.onclick = function(){
        // remove the corresponding p tag by id
        element.removeChild(p);
        // remove the button by id
        element.removeChild(button);
        // remove the element from the array
        let newarr = removeItemOnce(JSON.parse(localStorage.getItem("NapEntryArray")),p.innerHTML);
        // update the array
        localStorage.setItem("NapEntryArray", JSON.stringify(newarr))
        // decrease storage count
        decreaseCountStorage('sleepCount');
      }
      // add p and the button to the parent  
      element.appendChild(p);
      element.appendChild(button);
      }
    }
}

// global variables
var sleepquality = null;

function sleepQuality(x) {
  var n = x;
  sleepquality = n; // changes the global variable of sleep quality based on the most recently clicked sleep quality button
  if (n == 'Very Good'){
    document.getElementById('sleepqual1').style.background = 'rgb(245, 191, 76)';
    document.getElementById('sleepqual2').style.background = '#4ecdde';
    document.getElementById('sleepqual3').style.background = '#81d3de';
    document.getElementById('sleepqual4').style.background = '#a9d8de';
  } else if (n == 'Fairly Good'){
    document.getElementById('sleepqual1').style.background = '#04c3db';
    document.getElementById('sleepqual2').style.background = 'rgb(245, 191, 76)';
    document.getElementById('sleepqual3').style.background = '#81d3de';
    document.getElementById('sleepqual4').style.background = '#a9d8de';
  } else if (n == 'Fairly Bad'){
    document.getElementById('sleepqual1').style.background = '#04c3db';
    document.getElementById('sleepqual2').style.background = '#4ecdde';
    document.getElementById('sleepqual3').style.background = 'rgb(245, 191, 76)';
    document.getElementById('sleepqual4').style.background = '#a9d8de';
  } else if (n == 'Very Bad'){
    document.getElementById('sleepqual1').style.background = '#04c3db';
    document.getElementById('sleepqual2').style.background = '#4ecdde';
    document.getElementById('sleepqual3').style.background = '#81d3de';
    document.getElementById('sleepqual4').style.background = 'rgb(245, 191, 76)';
  }
  document.getElementById('log-sleep-quality').style.display = 'inline';
}

function logSleepQuality(){
  if (sleepquality != null || sleepquality != "null"){
    // logmessage1 for sleep quality
    var logMessage1 = 'You indicated that your quality of sleep last night was ' + sleepquality + '.';
    document.getElementById('logmsg1').innerHTML = logMessage1;
    localStorage.setItem('logmessage1', logMessage1);
    document.getElementById('sleep-quality').style.display = 'none';
    countStorage('sleepCount');
    
    // Create button to remove the sleepquality entry
    createClearButton('logmsg1', 'logmessage1', 'clearlogmsg1', 'sleep-quality', 'sleepCount');
  }
}

function logBedTime(){
  var BedTimeHour = document.getElementById("bedtime-hour").innerHTML;
  var BedTimeMinute = document.getElementById("bedtime-minutes").innerHTML;
  var BedTimeAMPM = document.getElementById("bedtime-ampm").innerHTML;
  
  var logMessage2 = 'You went to bed at ' + BedTimeHour + ':' + BedTimeMinute + ' ' + BedTimeAMPM + ' last night.';
  document.getElementById('logmsg2').innerHTML = logMessage2;
  localStorage.setItem('logmessage2', logMessage2);
  document.getElementById('bedtime').style.display = 'none';
  countStorage('sleepCount');
  createClearButton('logmsg2', 'logmessage2', 'clearlogmsg2', 'bedtime', 'sleepCount');

}

function logWakeTime(){
  var WakeTimeHour = document.getElementById("waketime-hour").innerHTML;
  var WakeTimeMinute = document.getElementById("waketime-minutes").innerHTML;
  var WakeTimeAMPM = document.getElementById("waketime-ampm").innerHTML;

  var logMessage3 = 'You woke up at ' + WakeTimeHour + ':' + WakeTimeMinute + ' ' + WakeTimeAMPM + ' today.';
  document.getElementById('logmsg3').innerHTML = logMessage3;
  localStorage.setItem('logmessage3', logMessage3);
  document.getElementById('waketime').style.display = 'none';
  countStorage('sleepCount');
  createClearButton('logmsg3', 'logmessage3', 'clearlogmsg3', 'waketime', 'sleepCount');

}

function logNap(){
  var Hour = document.getElementById('nap-hour').innerHTML;
  var Minute = document.getElementById('nap-minutes').innerHTML;
  var AMPM = document.getElementById('nap-ampm').innerHTML;
  var NapDur = document.getElementById("nap-dur").innerHTML;
  var logMessage4 = 'You took a nap for ' + NapDur + ' starting at ' + Hour + ':' + Minute + ' ' + AMPM +  '.'
  // document.getElementById('logmsg4').innerHTML += logMessage4;
  appendToStorage('logmessage4', logMessage4);
  countStorage('sleepCount');
  if (localStorage.getItem('NapEntryArray') == null){newArrayLocalStorage('NapEntryArray')};
  var retrievedData = localStorage.getItem('NapEntryArray');
  var array = JSON.parse(retrievedData);
  array.push(logMessage4);
  countStorage('napCount'); // button id will come from this count
  var element = document.getElementById('nap-entries'); 
  var newP = document.createElement("p");
  newP.innerHTML = logMessage4;
  newP.style.display = 'inline-block';
  var newButton = document.createElement("button");
  newButton.innerHTML = 'X';
  newButton.className = "btnx";
  newButton.style.display = 'inline-block';
  newButton.id = 'button-' + localStorage.getItem('napCount');
  newButton.onclick = function(){
    // remove p tag
    element.removeChild(newP);
    // remove the button
    element.removeChild(newButton);
    // remove the text from the array
    newarr = removeItemOnce(JSON.parse(localStorage.getItem('NapEntryArray')), newP.innerHTML)
    localStorage.setItem('NapEntryArray', JSON.stringify(newarr));
    // decrease count by 1
    decreaseCountStorage('sleepCount')
  }
  element.appendChild(newP);
  element.appendChild(newButton);

  localStorage.setItem('NapEntryArray', JSON.stringify(array));

  document.getElementById('nap-hour').innerHTML = 'Hour <i class="fa fa-caret-down"></i>';
  document.getElementById('nap-minutes').innerHTML = 'Minutes <i class="fa fa-caret-down"></i>';
  document.getElementById('nap-ampm').innerHTML = 'AM/PM <i class="fa fa-caret-down"></i>';
  document.getElementById('nap-dur').innerHTML = 'Duration <i class="fa fa-caret-down"></i>';
  document.getElementById('log-nap').style.display = 'none';
}

// - - - - - 
// FALLS
// - - - - - 

function fallText(type) {
  var fallType = type;
  document.getElementById('fall-type').innerHTML = fallType;
}

function submitFall(){
  var textarea = document.getElementById('fall-textarea').value;
  if (textarea == ''){
    fallMoreDetails = ' ';
  } else {
    fallMoreDetails = 'You provided additional information: ' + textarea;
  }
  fallMessage = '<br> You indicated that you ' + fallOrNearFall + ' in the ' + fallTime + ' while you were ' + fallLocation + fallLocationInside + '. You indicated that you were ' + fallActivitiy + ' before you ' + fallOrNearFall + ' and that ' + fallCause + '. ' + fallWalkingAid + ' You indicated that you were ' + fallInjured + fallMedical + fallMoreDetails;
  if (localStorage.getItem('FallEntryArray') == null){newArrayLocalStorage('FallEntryArray')};
  var retrievedData = localStorage.getItem('FallEntryArray');
  var array = JSON.parse(retrievedData);
  array.push(fallMessage);
  localStorage.setItem('FallEntryArray', JSON.stringify(array));
  checkFallEntries();
  document.getElementById('fall-time').style.display = 'none';
  document.getElementById('fall-location').style.display = 'none';
  document.getElementById('fall-location-inside').style.display = 'none';
  document.getElementById('fall-activity').style.display = 'none';
  document.getElementById('fall-cause').style.display = 'none';
  document.getElementById('fall-walking-aid').style.display = 'none';
  document.getElementById('injured-question').style.display = 'none';
  document.getElementById('medical-questions').style.display = 'none';
  document.getElementById('fall-more-details').style.display = 'none';
  document.getElementById('submit-fall').style.display = 'none';
  document.getElementById('fall-image').src = 'images/fall_words.ico';
  document.getElementById('almostfall-image').src = 'images/almostfall_words.ico';
  createPAndXButtonFromArray('FallEntryArray', 'fallCount', 'fall-entries')
  document.getElementById('fall-textarea').value = '';
}

var fallMessage;
var fallOrNearFall; // fell/almost fell
var fallTime; // morning/daytime/evening/nighttime
var fallLocation; // inside/outside
var fallLocationInside; // home/not at home
var fallActivitiy; // standing/walking/in the bathroom/on the stairs
var fallCause; // slipped/dizzy/lost your balance/tripped over an object/tripped on the stairs/other reason
var fallInjured; // not injured/injured
var fallMedical; // '.'/ and got medical help./ and did not get medical help.
var fallMoreDetails; // ' '/You provided additional information: + textinput + .
var fallWalkingAid; // ' '/You were not using your walking aid./You were using your walking aid.

function fallType(details){
  var details = details;
  if (details == 'fall' || details == 'near-fall'){
    document.getElementById('fall-time').style.display = 'block';
    document.getElementById('fall-location').style.display = 'none';
    document.getElementById('fall-location-inside').style.display = 'none';
    document.getElementById('fall-activity').style.display = 'none';
    document.getElementById('fall-cause').style.display = 'none';
    document.getElementById('fall-walking-aid').style.display = 'none';
    document.getElementById('injured-question').style.display = 'none';
    document.getElementById('medical-questions').style.display = 'none';
    document.getElementById('fall-more-details').style.display = 'none';
    document.getElementById('submit-fall').style.display = 'none';
    document.getElementById('fall-morning').style.background = 'white';
    document.getElementById('fall-daytime').style.background = 'white';
    document.getElementById('fall-evening').style.background = 'white';
    document.getElementById('fall-nighttime').style.background = 'white';
    if (details == 'fall'){
      document.getElementById('fall-image').src = 'images/fall_words_purple.ico';
      document.getElementById('almostfall-image').src = 'images/almostfall_words.ico';
      fallOrNearFall = 'fell';
    } else if (details == 'near-fall'){
      document.getElementById('fall-image').src = 'images/fall_words.ico';
      document.getElementById('almostfall-image').src = 'images/almostfall_words_purple.ico';
      fallOrNearFall = 'almost fell';
    }
  } else if (details == 'fall-morning' || details == 'fall-daytime' || details == 'fall-evening' || details == 'fall-nighttime'){
    document.getElementById('fall-time').style.display = 'block';
    document.getElementById('fall-location').style.display = 'block';
    document.getElementById('fall-location-inside').style.display = 'none';
    document.getElementById('fall-activity').style.display = 'none';
    document.getElementById('fall-cause').style.display = 'none';
    document.getElementById('fall-walking-aid').style.display = 'none';
    document.getElementById('injured-question').style.display = 'none';
    document.getElementById('medical-questions').style.display = 'none';
    document.getElementById('fall-more-details').style.display = 'none';
    document.getElementById('submit-fall').style.display = 'none';
    document.getElementById('fall-outside').style.background = 'white';
    document.getElementById('fall-inside').style.background = 'white';
    if (details == 'fall-morning'){
      fallTime = 'morning';
      document.getElementById('fall-morning').style.background = 'rgb(181, 235, 188)';
      document.getElementById('fall-daytime').style.background = 'white';
      document.getElementById('fall-evening').style.background = 'white';
      document.getElementById('fall-nighttime').style.background = 'white';
    } else if (details == 'fall-daytime'){
      fallTime = 'daytime';
      document.getElementById('fall-morning').style.background = 'white';
      document.getElementById('fall-daytime').style.background = 'rgb(181, 235, 188)';
      document.getElementById('fall-evening').style.background = 'white';
      document.getElementById('fall-nighttime').style.background = 'white';
    } else if (details == 'fall-evening'){
      fallTime = 'evening';
      document.getElementById('fall-morning').style.background = 'white';
      document.getElementById('fall-daytime').style.background = 'white';
      document.getElementById('fall-evening').style.background = 'rgb(181, 235, 188)';
      document.getElementById('fall-nighttime').style.background = 'white';
    } else if (details == 'fall-nighttime'){
      fallTime = 'nighttime';
      document.getElementById('fall-morning').style.background = 'white';
      document.getElementById('fall-daytime').style.background = 'white';
      document.getElementById('fall-evening').style.background = 'white';
      document.getElementById('fall-nighttime').style.background = 'rgb(181, 235, 188)';
    }
  } else if (details == 'inside' || details == 'outside'){
    document.getElementById('fall-time').style.display = 'block';
    document.getElementById('fall-location').style.display = 'block';
    document.getElementById('fall-activity').style.display = 'none';
    document.getElementById('fall-cause').style.display = 'none';
    document.getElementById('fall-walking-aid').style.display = 'none';
    document.getElementById('injured-question').style.display = 'none';
    document.getElementById('medical-questions').style.display = 'none';
    document.getElementById('fall-more-details').style.display = 'none';
    document.getElementById('submit-fall').style.display = 'none';
    document.getElementById('inside-bathroom').style.background = 'white';
    document.getElementById('inside-stairs').style.background = 'white';
    document.getElementById('inside-bedroom').style.background = 'white';
    document.getElementById('inside-other').style.background = 'white';
    document.getElementById('fall-standing-still').style.background = 'white';
    document.getElementById('fall-standing-up').style.background = 'white';
    document.getElementById('fall-sitting-down').style.background = 'white';
    document.getElementById('fall-walking').style.background = 'white';
    document.getElementById('fall-rushing').style.background = 'white';
    fallLocation = details;
    if (details == 'inside'){
      document.getElementById('fall-location-inside').style.display = 'block';
      document.getElementById('fall-inside').style.background = 'rgb(120, 214, 132)';
      document.getElementById('fall-outside').style.background = 'white';
    } else if (details == 'outside'){
      document.getElementById('fall-inside').style.background = 'white';
      document.getElementById('fall-outside').style.background = 'rgb(120, 214, 132)';
      document.getElementById('fall-location-inside').style.display = 'none';
      document.getElementById('fall-activity').style.display = 'block';
      fallLocationInside = '';
    }
  } else if (details == 'inside-bathroom' || details == 'inside-stairs' || details == 'inside-bedroom' || details == 'inside-other'){
    document.getElementById('fall-time').style.display = 'block';
    document.getElementById('fall-location').style.display = 'block';
    document.getElementById('fall-activity').style.display = 'block';
    document.getElementById('fall-cause').style.display = 'none';
    document.getElementById('fall-walking-aid').style.display = 'none';
    document.getElementById('injured-question').style.display = 'none';
    document.getElementById('medical-questions').style.display = 'none';
    document.getElementById('fall-more-details').style.display = 'none';
    document.getElementById('submit-fall').style.display = 'none';
    document.getElementById('fall-standing-still').style.background = 'white';
    document.getElementById('fall-standing-up').style.background = 'white';
    document.getElementById('fall-sitting-down').style.background = 'white';
    document.getElementById('fall-walking').style.background = 'white';
    document.getElementById('fall-rushing').style.background = 'white';
    if (details == 'inside-bathroom'){
      fallLocationInside = ' and in the bathroom';
      document.getElementById('inside-bathroom').style.background = 'rgb(255, 244, 125)';
      document.getElementById('inside-stairs').style.background = 'white';
      document.getElementById('inside-bedroom').style.background = 'white';
      document.getElementById('inside-other').style.background = 'white';
    } else if (details == 'inside-stairs'){
      fallLocationInside = ' and on the stairs';
      document.getElementById('inside-bathroom').style.background = 'white';
      document.getElementById('inside-stairs').style.background = 'rgb(255, 244, 125)';
      document.getElementById('inside-bedroom').style.background = 'white';
      document.getElementById('inside-other').style.background = 'white';
    } else if (details == 'inside-bedroom'){
      fallLocationInside = ' and in the bedroom';
      document.getElementById('inside-bathroom').style.background = 'white';
      document.getElementById('inside-stairs').style.background = 'white';
      document.getElementById('inside-bedroom').style.background = 'rgb(255, 244, 125)';
      document.getElementById('inside-other').style.background = 'white';
    } else if (details == 'inside-other'){
      fallLocationInside = ' and in the bedroom';
      document.getElementById('inside-bathroom').style.background = 'white';
      document.getElementById('inside-stairs').style.background = 'white';
      document.getElementById('inside-bedroom').style.background = 'white';
      document.getElementById('inside-other').style.background = 'rgb(255, 244, 125)';
    }
  } else if (details == 'fall-standing-still' || details == 'fall-standing-up' || details == 'fall-sitting-down' || details == 'fall-walking' || details == 'fall-rushing'){
    document.getElementById('fall-time').style.display = 'block';
    document.getElementById('fall-location').style.display = 'block';
    document.getElementById('fall-activity').style.display = 'block';
    document.getElementById('fall-cause').style.display = 'block';  
    document.getElementById('fall-walking-aid').style.display = 'none';
    document.getElementById('injured-question').style.display = 'none';
    document.getElementById('medical-questions').style.display = 'none';
    document.getElementById('fall-more-details').style.display = 'none';
    document.getElementById('submit-fall').style.display = 'none';
    document.getElementById('tripped').style.background = 'white';
    document.getElementById('slipped').style.background = 'white';
    document.getElementById('dizzy').style.background = 'white';
    document.getElementById('legs-weak').style.background = 'white';
    document.getElementById('lost-balance').style.background = 'white';
    document.getElementById('no-recall').style.background = 'white';
    if (details == 'fall-standing-still'){
      fallActivitiy = 'standing still';
      document.getElementById('fall-standing-still').style.background = '#f5bf4c';
      document.getElementById('fall-standing-up').style.background = 'white';
      document.getElementById('fall-sitting-down').style.background = 'white';
      document.getElementById('fall-walking').style.background = 'white';
      document.getElementById('fall-rushing').style.background = 'white';  
    } else if (details == 'fall-standing-up'){
      fallActivitiy = 'standing up';
      document.getElementById('fall-standing-still').style.background = 'white';
      document.getElementById('fall-standing-up').style.background = '#f5bf4c';
      document.getElementById('fall-sitting-down').style.background = 'white';
      document.getElementById('fall-walking').style.background = 'white';
      document.getElementById('fall-rushing').style.background = 'white';  
    } else if (details == 'fall-sitting-down'){
      fallActivitiy = 'sitting down';
      document.getElementById('fall-standing-still').style.background = 'white';
      document.getElementById('fall-standing-up').style.background = 'white';
      document.getElementById('fall-sitting-down').style.background = '#f5bf4c';
      document.getElementById('fall-walking').style.background = 'white';
      document.getElementById('fall-rushing').style.background = 'white';  
    } else if (details == 'fall-walking'){
      fallActivitiy = 'walking';
      document.getElementById('fall-standing-still').style.background = 'white';
      document.getElementById('fall-standing-up').style.background = 'white';
      document.getElementById('fall-sitting-down').style.background = 'white';
      document.getElementById('fall-walking').style.background = '#f5bf4c';
      document.getElementById('fall-rushing').style.background = 'white';  
    } else if (details == 'fall-rushing'){
      fallActivitiy = 'rushing';
      document.getElementById('fall-standing-still').style.background = 'white';
      document.getElementById('fall-standing-up').style.background = 'white';
      document.getElementById('fall-sitting-down').style.background = 'white';
      document.getElementById('fall-walking').style.background = 'white';
      document.getElementById('fall-rushing').style.background = '#f5bf4c';  
    }
  } else if (details == 'tripped' || details == 'slipped' || details == 'dizzy' || details == 'legs-weak' || details == 'lost-balance' || details == 'no-recall'){
    document.getElementById('fall-time').style.display = 'block';
    document.getElementById('fall-location').style.display = 'block';
    document.getElementById('fall-activity').style.display = 'block';
    document.getElementById('fall-cause').style.display = 'block';
    document.getElementById('fall-walking-aid').style.display = 'none';
    document.getElementById('injured-question').style.display = 'block';
    document.getElementById('medical-questions').style.display = 'none';
    document.getElementById('fall-more-details').style.display = 'none';
    document.getElementById('submit-fall').style.display = 'none';
    document.getElementById('not-injured').style.background = 'white';
    document.getElementById('injured').style.background = 'white';
    document.getElementById('no-medical').style.background = 'white';
    document.getElementById('medical').style.background = 'white';
    if (details == 'tripped'){
      fallCause = 'it happened because you tripped';
      document.getElementById('tripped').style.background = 'rgb(197, 223, 226)';
      document.getElementById('slipped').style.background = 'white';
      document.getElementById('dizzy').style.background = 'white';
      document.getElementById('legs-weak').style.background = 'white';
      document.getElementById('lost-balance').style.background = 'white';
      document.getElementById('no-recall').style.background = 'white';
    } else if (details == 'slipped'){
      fallCause = 'it happened because you slipped';
      document.getElementById('tripped').style.background = 'white';
      document.getElementById('slipped').style.background = 'rgb(197, 223, 226)';
      document.getElementById('dizzy').style.background = 'white';
      document.getElementById('legs-weak').style.background = 'white';
      document.getElementById('lost-balance').style.background = 'white';
      document.getElementById('no-recall').style.background = 'white';
    } else if (details == 'dizzy'){
      fallCause = 'it happened because you were dizzy';
      document.getElementById('tripped').style.background = 'white';
      document.getElementById('slipped').style.background = 'white';
      document.getElementById('dizzy').style.background = 'rgb(197, 223, 226)';
      document.getElementById('legs-weak').style.background = 'white';
      document.getElementById('lost-balance').style.background = 'white';
      document.getElementById('no-recall').style.background = 'white';
    } else if (details == 'legs-weak'){
      fallCause = 'it happened because your legs felt weak';
      document.getElementById('tripped').style.background = 'white';
      document.getElementById('slipped').style.background = 'white';
      document.getElementById('dizzy').style.background = 'white';
      document.getElementById('legs-weak').style.background = 'rgb(197, 223, 226)';
      document.getElementById('lost-balance').style.background = 'white';
      document.getElementById('no-recall').style.background = 'white';
    } else if (details == 'lost-balance'){
      fallCause = 'it happened because you lost your balance for another reason';
      document.getElementById('tripped').style.background = 'white';
      document.getElementById('slipped').style.background = 'white';
      document.getElementById('dizzy').style.background = 'white';
      document.getElementById('legs-weak').style.background = 'white';
      document.getElementById('lost-balance').style.background = 'rgb(197, 223, 226)';
      document.getElementById('no-recall').style.background = 'white';
    } else if (details == 'no-recall'){
      fallCause = "you don't recall how it happened";
      document.getElementById('tripped').style.background = 'white';
      document.getElementById('slipped').style.background = 'white';
      document.getElementById('dizzy').style.background = 'white';
      document.getElementById('legs-weak').style.background = 'white';
      document.getElementById('lost-balance').style.background = 'white';
      document.getElementById('no-recall').style.background = 'rgb(197, 223, 226)';
    };
  } else if (details == 'injured' || details == 'not-injured'){
    document.getElementById('fall-time').style.display = 'block';
    document.getElementById('fall-location').style.display = 'block';
    document.getElementById('fall-activity').style.display = 'block';
    document.getElementById('fall-cause').style.display = 'block';
    document.getElementById('fall-walking-aid').style.display = 'none';
    document.getElementById('injured-question').style.display = 'block';
    document.getElementById('no-medical').style.background = 'white';
    document.getElementById('medical').style.background = 'white';
    document.getElementById('no-walking-aid').style.background = 'white';
    document.getElementById('yes-walking-aid').style.background = 'white';
    if (details == 'injured'){
      document.getElementById('medical-questions').style.display = 'block';
      document.getElementById('fall-more-details').style.display = 'none';
      document.getElementById('submit-fall').style.display = 'none';
      document.getElementById('not-injured').style.background = 'white';
      document.getElementById('injured').style.background = '#81b1eb';
      fallInjured = 'injured';
    } else if (details == 'not-injured'){
      document.getElementById('medical-questions').style.display = 'none';
      fallInjured = 'not injured';
      fallMedical = '.';
      document.getElementById('fall-more-details').style.display = 'block';
      document.getElementById('submit-fall').style.display = 'block';
      document.getElementById('not-injured').style.background = 'rgb(167, 232, 211)';
      document.getElementById('injured').style.background = 'white';
      if (localStorage.getItem('walkingAid') == ' Yes'){
      document.getElementById('fall-walking-aid').style.display = 'block';
      document.getElementById('submit-fall').style.display = 'none';
    } else {document.getElementById('submit-fall').style.display = 'block';}
    }
  } else if (details == 'medical' || details == 'no-medical'){
    document.getElementById('fall-time').style.display = 'block';
    document.getElementById('fall-location').style.display = 'block';
    document.getElementById('fall-activity').style.display = 'block';
    document.getElementById('fall-cause').style.display = 'block';
    document.getElementById('fall-walking-aid').style.display = 'none';
    document.getElementById('injured-question').style.display = 'block';
    document.getElementById('medical-questions').style.display = 'block';
    document.getElementById('fall-more-details').style.display = 'block';
    document.getElementById('no-walking-aid').style.background = 'white';
    document.getElementById('yes-walking-aid').style.background = 'white';
    if (localStorage.getItem('walkingAid') == ' Yes'){
      document.getElementById('fall-walking-aid').style.display = 'block';
      document.getElementById('submit-fall').style.display = 'none';
    } else {
      document.getElementById('submit-fall').style.display = 'block';
      fallWalkingAid = ' ';
      }
    if (details == 'medical'){
      fallMedical = ' and got medical help.';
      document.getElementById('medical').style.background = 'rgb(167, 232, 211)';
      document.getElementById('no-medical').style.background = 'white';
    } else if (details == 'no-medical'){
      fallMedical = ' and did not get medical help.';
      document.getElementById('medical').style.background = 'white';
      document.getElementById('no-medical').style.background = 'rgb(167, 232, 211)';
    }
  } else if (details == 'yes-walking-aid' || details == 'no-walking-aid'){
    document.getElementById('submit-fall').style.display = 'block';

    if (details == 'yes-walking-aid'){
      document.getElementById('yes-walking-aid').style.background = 'rgb(167, 232, 211)';
      document.getElementById('no-walking-aid').style.background = 'white';
      fallWalkingAid = 'You indicated that you were using your walking aid. ';
    } else {
      document.getElementById('yes-walking-aid').style.background = 'white';
      document.getElementById('no-walking-aid').style.background = 'rgb(167, 232, 211)';
      fallWalkingAid = 'You indicated that you were not using your walking aid. ';
    }
  } 
}

function fallTypeOLD(num) {
  var n = num;
  
  if (n == 3) {
    document.getElementById('submit-fall').style.display = 'block';
    document.getElementById('fall-more').style.display = 'none';
    document.getElementById('other-fall').style.display = 'none';
    document.getElementById('fall-more2').style.display = 'none';
    document.getElementById('almostfall-more').style.display = 'none';
    document.getElementById('not-injured').style.background = 'white';
    document.getElementById('injured').style.background = 'white';
    document.getElementById('no-medical').style.background = 'white';
    document.getElementById('medical').style.background = 'white';
    document.getElementById('lost-balance').style.background = 'white';
    document.getElementById('dizzy').style.background = 'white';
    document.getElementById('tripped-object').style.background = 'white';
    document.getElementById('tripped-stairs').style.background = 'white';
    document.getElementById('other').style.background = 'white';
    document.getElementById('nofall-image').src = 'images/nofall_words_blue.ico';
    document.getElementById('fall-image').src = 'images/fall_words.ico';
    document.getElementById('almostfall-image').src = 'images/almostfall_words.ico';
    fallMessage = 'You indicated that you did not fall today.<br>';
  } else if (n == 2) {
    document.getElementById('almostfall-more').style.display = 'block';
    document.getElementById('submit-fall').style.display = 'none';
    document.getElementById('fall-more').style.display = 'none';
    document.getElementById('other-fall').style.display = 'none';
    document.getElementById('fall-more2').style.display = 'none';
    document.getElementById('not-injured').style.background = 'white';
    document.getElementById('injured').style.background = 'white';
    document.getElementById('no-medical').style.background = 'white';
    document.getElementById('medical').style.background = 'white';
    document.getElementById('lost-balance').style.background = 'white';
    document.getElementById('dizzy').style.background = 'white';
    document.getElementById('tripped-object').style.background = 'white';
    document.getElementById('tripped-stairs').style.background = 'white';
    document.getElementById('other').style.background = 'white';
    document.getElementById('nofall-image').src = 'images/nofall_words.ico';
    document.getElementById('fall-image').src = 'images/fall_words.ico';
    document.getElementById('almostfall-image').src = 'images/almostfall_words_blue.ico';
  } else if (n == 1) {
    document.getElementById('submit-fall').style.display = 'none';
    document.getElementById('fall-more').style.display = 'block';
    document.getElementById('fall-more2').style.display = 'none';
    document.getElementById('other-fall').style.display = 'none';
    document.getElementById('almostfall-more').style.display = 'none';
    document.getElementById('not-injured').style.background = 'white';
    document.getElementById('injured').style.background = 'white';
    document.getElementById('no-medical').style.background = 'white';
    document.getElementById('medical').style.background = 'white';
    document.getElementById('lost-balance').style.background = 'white';
    document.getElementById('dizzy').style.background = 'white';
    document.getElementById('tripped-object').style.background = 'white';
    document.getElementById('tripped-stairs').style.background = 'white';
    document.getElementById('other').style.background = 'white';
    document.getElementById('nofall-image').src = 'images/nofall_words.ico';
    document.getElementById('fall-image').src = 'images/fall_words_blue.ico';
    document.getElementById('almostfall-image').src = 'images/almostfall_words.ico';
  } else if (n == 11) {
    document.getElementById('submit-fall').style.display = 'block';
    document.getElementById('fall-more2').style.display = 'none';
    document.getElementById('other-fall').style.display = 'none';
    document.getElementById('not-injured').style.background = 'rgb(245, 191, 76)';
    document.getElementById('injured').style.background = 'white';
    fallMessage = 'You indicated that you fell today and did not get injured.<br>';
  }
    else if (n == "12A" || n == "12B" || n == 22 || n == 23 || n == 24 || n == 25) {
    document.getElementById('submit-fall').style.display = 'block';
    document.getElementById('other-fall').style.display = 'none';
    if (n == "12A"){
      document.getElementById('no-medical').style.background = 'rgb(245, 140, 34)';
      document.getElementById('medical').style.background = 'white';
      fallMessage = 'You indicated that you fell today, got injured, and did not get medical help.<br>';
    } else if (n == '12B'){
      document.getElementById('medical').style.background = 'rgb(245, 140, 34)';
      document.getElementById('no-medical').style.background = 'white';
      fallMessage = 'You indicated that you fell today, got injured, and did get medical help (e.g. Doctor, Hospital).<br>';
     
    } else if (n == 22){
      document.getElementById('lost-balance').style.background = 'rgb(245, 191, 76)';
      document.getElementById('dizzy').style.background = 'white';
      document.getElementById('tripped-object').style.background = 'white';
      document.getElementById('tripped-stairs').style.background = 'white';
      document.getElementById('other').style.background = 'white';
      fallMessage = 'You indicated that you almost fell today because you lost your balance.<br>';
     
    } else if (n == 23){
      document.getElementById('lost-balance').style.background = 'white';
      document.getElementById('dizzy').style.background = 'rgb(245, 191, 76)';
      document.getElementById('tripped-object').style.background = 'white';
      document.getElementById('tripped-stairs').style.background = 'white';
      document.getElementById('other').style.background = 'white';
      fallMessage = 'You indicated that you almost fell today because you were dizzy.<br>';
      
    } else if (n == 24){
      document.getElementById('lost-balance').style.background = 'white';
      document.getElementById('dizzy').style.background = 'white';
      document.getElementById('tripped-object').style.background = 'rgb(245, 191, 76)';
      document.getElementById('tripped-stairs').style.background = 'white';
      document.getElementById('other').style.background = 'white';
      fallMessage = 'You indicated that you almost fell today because you tripped on an object.<br>';
      
    } else if (n == 25){
      document.getElementById('lost-balance').style.background = 'white';
      document.getElementById('dizzy').style.background = 'white';
      document.getElementById('tripped-object').style.background = 'white';
      document.getElementById('tripped-stairs').style.background = 'rgb(245, 191, 76)';
      document.getElementById('other').style.background = 'white';
      fallMessage = 'You indicated that you almost fell today because you tripped on the stairs.<br>';
    }
  } else if (n == 12) {
    document.getElementById('fall-more2').style.display = 'block';
    document.getElementById('submit-fall').style.display = 'none';
    document.getElementById('other-fall').style.display = 'none';
    document.getElementById('injured').style.background = 'rgb(245, 191, 76)';
    document.getElementById('not-injured').style.background = 'white';
  } else if (n == 21) {
    document.getElementById('other-fall').style.display = 'block';
    document.getElementById('submit-fall').style.display = 'block';
    document.getElementById('lost-balance').style.background = 'white';
    document.getElementById('dizzy').style.background = 'white';
    document.getElementById('tripped-object').style.background = 'white';
    document.getElementById('tripped-stairs').style.background = 'white';
    document.getElementById('other').style.background = 'rgb(245, 191, 76)';
    var other = document.getElementById('other-fall-input').value;
    fallMessage = 'You indicated that you almost fell because of a different reason: ' + other + '.<br>';
     
  }
}

function checkFallEntries(){
  if (localStorage.getItem('FallEntryArray') == null){newArrayLocalStorage('FallEntryArray');};
  var retrievedData = localStorage.getItem('FallEntryArray');
  var array = JSON.parse(retrievedData);
  if (array.length == 0){
    document.getElementById('fall-statement').style.display = 'block';
  } else {
    document.getElementById('fall-statement').style.display = 'none';
  }

  if (!localStorage.getItem('walkingAid')){
    document.getElementById('bring-to-preferences').style.display = 'inline';
  } else {
    document.getElementById('bring-to-preferences').style.display = 'none';
  }

}

// - - - -
// MOOD
// - - - -

// on click of the button
function changeLikertMood(divID, buttonID, likert, mood){
  var buttonID = buttonID;
  var afraid = localStorage.getItem('afraid');
  var confused = localStorage.getItem('confused');
  var sad = localStorage.getItem('sad');
  var angry = localStorage.getItem('angry');
  var energetic = localStorage.getItem('energetic');
  var tired = localStorage.getItem('tired');
  var happy = localStorage.getItem('happy');
  var tense = localStorage.getItem('tense');
  // update the mood to the likert option selected
  if (mood == 'afraid'){localStorage.setItem(mood, likert); afraid = localStorage.getItem(mood);};
  if (mood == 'confused'){localStorage.setItem(mood, likert); confused = localStorage.getItem(mood);};
  if (mood == 'sad'){localStorage.setItem(mood, likert); sad = localStorage.getItem(mood);};
  if (mood == 'angry'){localStorage.setItem(mood, likert); angry = localStorage.getItem(mood);};
  if (mood == 'energetic'){localStorage.setItem(mood, likert); energetic = localStorage.getItem(mood);};
  if (mood == 'tired'){localStorage.setItem(mood, likert); tired = localStorage.getItem(mood);};
  if (mood == 'happy'){localStorage.setItem(mood, likert); happy = localStorage.getItem(mood);};
  if (mood == 'tense'){localStorage.setItem(mood, likert); tense = localStorage.getItem(mood);};
  // change button colours:
  var children = [].slice.call(document.getElementById(divID).getElementsByTagName('button'), 0);
  for (var i = 0; i < children.length; i++){
    let id = children[i].getAttribute('id');
    if (buttonID !== id){
      document.getElementById(id).style.background = 'white';
      document.getElementById(id).style.color = 'black';
    } else {
      document.getElementById(buttonID).style.background = '#0335fc';
      document.getElementById(buttonID).style.color = 'white';
    }
  };
  if (afraid !==  'null' && confused !==  'null' && sad !==  'null' && angry !==  'null' && energetic !== 'null' && tired !== 'null' && happy !== 'null' && tense !== 'null'){
    document.getElementById('submit-mood').style.display = 'block';
  };
}

// onload and onclick of the submit button
function submitMoodAndLikert(){
  var count = localStorage.getItem('moodCount');
  count = 0; 
  var afraid = localStorage.getItem('afraid');
  if (afraid !== 'null' || afraid !== null){count += 1};
  var confused = localStorage.getItem('confused');
  if (confused !== 'null' || confused !== null){count += 1};
  var sad = localStorage.getItem('sad');
  if (sad !== 'null' || sad !== null){count += 1};
  var angry = localStorage.getItem('angry');
  if (angry !== 'null' || angry !== null){count += 1};
  var energetic = localStorage.getItem('energetic');
  if (energetic !== 'null' || energetic !== null){count += 1};
  var tired = localStorage.getItem('tired');
  if (tired !== 'null' || tired !== null){count += 1};
  var happy = localStorage.getItem('happy');
  if (happy !== 'null' || happy !== null){count += 1};
  var tense = localStorage.getItem('tense');
  if (tense !== 'null' || tense !== null){count += 1};
  localStorage.setItem('moodCount', count);
  if (count > 0){document.getElementById('mood-statement').style.display = 'block';};
  var array = ['afraid', afraid, 'confused', confused, 'sad', sad, 'angry', angry, 'energetic', energetic, 'tired', tired, 'happy', happy, 'tense', tense];
  var element = document.getElementById('mood-entries');
  for (var i = 0; i < array.length; i = i + 2){
    let p = document.createElement('p');
    let button = document.createElement("button");
    let divid = 'mood-' + array[i];
    let mood = array[i];
    let likert = array[i+1];
    p.innerHTML = array[i+1] + ' ' + array[i]; // e,g, always afraid
    p.id = "p-" + array[i]; // e.g. p-afraid
    button.id = 'button-' + array[i]; // e.g. button-afraid
    button.innerHTML = 'X';
    button.className = 'btnx';
    button.onclick = function(){
      document.getElementById(divid).style.display = 'block';
      document.getElementById('submit-mood').style.display = 'none';
      localStorage.setItem(mood, null);
      element.removeChild(p);
      element.removeChild(button);
      decreaseCountStorage('moodCount');
      // reset all of the buttons to be white with black text
      var children = [].slice.call(document.getElementById(divid).getElementsByTagName('button'), 0);
      for (var i = 0; i < children.length; i++){
        let id = children[i].getAttribute('id');
          document.getElementById(id).style.background = 'white';
          document.getElementById(id).style.color = 'black';
      };
    }
    if (likert !== 'null' && !document.getElementById(p.id)){
      element.appendChild(p);
    };
    if (likert !== 'null' && !document.getElementById(button.id)){
      element.appendChild(button);
      document.getElementById('mood-' + mood).style.display = 'none';
    };
  }  
  document.getElementById('submit-mood').style.display = 'none';
}

// - - - - - - 
// PREFERENCES
// - - - - - - 
function OutdoorActivitySelect(id, activity){
  var activity = ' ' + activity;
  var btn = document.getElementById(id);
  var count = localStorage.getItem('OutdoorSelectedCount');
  if (localStorage.getItem('OutdoorSelectedArray') == null){newArrayLocalStorage('OutdoorSelectedArray');};
  var retrievedData = localStorage.getItem('OutdoorSelectedArray');
  var array = JSON.parse(retrievedData);
  if (count == null){
    count = 0;
  } else {
    count = parseInt(count);
  };

  if (btn.className == 'btn'){
    if (count == 6){
      alert('You can only select 6 options')
    } else {
      btn.className += " active";
      btn.style.background = 'dodgerblue';
      count += 1; 
      array.push(activity)
    }
  } else {
    btn.className = 'btn';
    btn.style.background = 'white';
    if (count > 0){count -= 1;}
    var index = array.indexOf(activity);
    array.splice(index, 1);
  }
  localStorage.setItem('OutdoorSelectedCount', count);
  // document.getElementById('outdoor-selected-count').innerHTML = localStorage.getItem('OutdoorSelectedCount');
  localStorage.setItem('OutdoorSelectedArray', JSON.stringify(array));
  // document.getElementById('outdoor-selected-list').innerHTML = JSON.parse(localStorage.getItem('OutdoorSelectedArray'));
}

function makeOutdoorButtons(){
  var buttonNames = JSON.parse(localStorage.getItem('OutdoorSelectedArray'));
  for (var i = 0; i < buttonNames.length; i++){
    var id = 'outdoor-selected-' + i;
    var button = document.getElementById(id);
    button.style.display = 'inline-block';
    button.innerHTML = buttonNames[i];
  }
}

function walkingAid(Answer){
  var Answer = Answer;
  localStorage.setItem('walkingAid', ' ' + Answer);
  document.getElementById('walking-aid-submit').style.display = 'block';
  document.getElementById('walking-aid-answer').innerHTML = localStorage.getItem('walkingAid');
}

function checkWalkingAid(){
  if (localStorage.getItem('walkingAid')){
    walkingAidSubmitted();
  } else {
    walkingAidNotSubmitted();
  };
}

function walkingAidSubmitted(){
  document.getElementById('walking-aid-answer').innerHTML = localStorage.getItem('walkingAid');
  document.getElementById('walking-aid-answer').style.display = 'inline';
  document.getElementById('aid-yes').style.display = 'none';
  document.getElementById('aid-no').style.display = 'none';
  document.getElementById('walking-aid-submit').style.display = 'none';
  document.getElementById('walking-aid-x').style.display = 'inline';
}

function walkingAidNotSubmitted(){
  document.getElementById('walking-aid-answer').style.display = 'none';
  document.getElementById('aid-yes').style.display = 'inline';
  document.getElementById('aid-no').style.display = 'inline';
  document.getElementById('walking-aid-submit').style.display = 'none';
  document.getElementById('walking-aid-x').style.display = 'none';
  localStorage.removeItem('walkingAid');
}

function filterActivities(){
  // declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('activity-input');
  filter = input.value.toUpperCase();
  ul = document.getElementById('activity-list');
  li = ul.getElementsByTagName('li');

  // loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++){
    a = li[i].getElementsByTagName('a')[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function selectActivity(activityID){
  var activityID = activityID;
  var activityText = document.getElementById(activityID).innerHTML;
  if (localStorage.getItem('activitySelections') == null){newArrayLocalStorage('activitySelections')};
  var retrievedData = localStorage.getItem('activitySelections');
  var array = JSON.parse(retrievedData);
  if (array.length == 6){
    alert('You have already selected 6 activities. Click the X beside the activity to remove it and then you may select a new activity.');
  } else {
    if (!array.includes(activityText)){  
      array.push(activityText);  
    } else {
      alert('This activity is already in the list.')
    }
    // update local storage
    localStorage.setItem('activitySelections', JSON.stringify(array));
    createPAndXButtonFromArray('activitySelections', 'activitySelectionsCount', 'activity-selected-list');
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// - - - - - 
// ARRAYS
// - - - - -

Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}

function newArrayLocalStorage(name){
  var name = name;
  var emptyArr = [];
  localStorage.setItem(name, JSON.stringify(emptyArr));
}


function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

function resetArray(name){
  localStorage.setItem(name, []);
}

function createClearButton(elementID, storageID, buttonID, questionContainer, nameCount){
  var element = document.getElementById(elementID);
  var newButton = document.createElement("button")
  newButton.innerHTML = 'X';
  newButton.className = 'btnx';
  newButton.id = buttonID;
  newButton.onclick = function(){
    element.removeChild(newButton);
    document.getElementById(elementID).innerHTML = '';
    document.getElementById(questionContainer).style.display = 'block';
    decreaseCountStorage(nameCount);
    localStorage.removeItem(storageID);
  };
  element.appendChild(newButton);
}

// For all elements in the array, creates a p tag and associated button if they do not already exist
// Can be used onload or after submit button is pressed
// e.g. createPAndXButtonFromArray('FallEntryArray', 'fallCount', 'fall-entries')
function createPAndXButtonFromArray(arrayName, countName, divID){
  var arrayName = arrayName;
  var countName = countName;
  var divID = divID;
  if (localStorage.getItem(arrayName) == null){newArrayLocalStorage(arrayName)};
  var retrievedData = localStorage.getItem(arrayName);
  var array = JSON.parse(retrievedData);
  localStorage.setItem(countName, array.length);
  var element = document.getElementById(divID);
  for (var i = 0; i < array.length; i++){
    let p = document.createElement('p');
    p.innerHTML = array[i];
    p.id = 'p-' + i;
    p.style.display = 'inline';
    let button = document.createElement('button');
    button.id = 'button-' + i;
    button.style.display = 'inline';
    button.innerHTML = 'X';
    button.className = 'btnx';
    button.onclick = function(){
      element.removeChild(p);
      element.removeChild(button);
      let newarr = removeItemOnce(JSON.parse(localStorage.getItem(arrayName)), p.innerHTML);
      localStorage.setItem(arrayName, JSON.stringify(newarr));
      decreaseCountStorage(countName);
      createPAndXButtonFromArray();
    }
    if (!document.getElementById(p.id)){element.appendChild(p);};
    if (!document.getElementById(button.id)){element.appendChild(button);};
  }
}

// - - - - -
// BUTTONS
// - - - - -
function buttonsInDiv(buttonID, divID){
  var buttonID = buttonID;
  var divID = divID;
  var parent = document.getElementById(divID);
  var children = [].slice.call(parent.getElementsByTagName('button'), 0);
  for (var i = 0; i < children.length; i++){
    let id = children[i].getAttribute('id');
    if (buttonID !== id){
      document.getElementById(id).style.background = 'white';
      document.getElementById(id).style.color = 'black';
    } else {
      document.getElementById(buttonID).style.background = '#0335fc';
      document.getElementById(buttonID).style.color = 'white';
    }
  }
}

topButton = document.getElementById('top-btn');

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// - - - - -
// DROPDOWN
// - - - - - 

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown(id) {
  var id = id;
  document.getElementById(id).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-new')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-new");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}