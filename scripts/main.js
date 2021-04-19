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
let pStudy = document.getElementById('p-study');
let pSite = document.getElementById('p-site');

function setUsername() {
    let myName = prompt('Please enter your participant ID'); // prompt displays a dialogue box, similar to alert()
    localStorage.setItem('name', myName); // calls on an API localStorage
    if (myName == 'null' || myName == null){
      pUsername.textContent = 'Please enter your participant ID';
    } else {
      pUsername.textContent = 'ID: ' + myName;
    }
    
    let myStudy = prompt('Please enter the study code' );
    let mySite = prompt('Please enter the site code');
    localStorage.setItem('study', myStudy);
    localStorage.setItem('site', mySite);
    if (myStudy == 'null' || myStudy == null){
      pStudy.textContent = 'Please enter the study code';
    } else {
      pStudy.textContent = 'Study: ' + myStudy;
    };
    if (mySite == 'null' || mySite == null){
      pSite.textContent = 'Please enter the site code';
    } else {
      pSite.textContent = 'Site: ' + mySite;
    }
    logEvent('submitted IDstudysite')
    window.location.reload()
  }

  // if(!localStorage.getItem('name')) {
  //   setUsername();
  // } else {
  //   let storedName = localStorage.getItem('name');
  //   pUsername.textContent = 'ID: ' + storedName;

  //   let storedStudy = localStorage.getItem('study');
  //   pStudy.textContent = 'Study: ' + storedStudy;

  //   let storedSite = localStorage.getItem('site');
  //   pSite.textContent = 'Site: ' + storedSite;
  // }

  if(!localStorage.hasOwnProperty('name') || !localStorage.hasOwnProperty('study') || !localStorage.hasOwnProperty('site') 
  || localStorage.getItem('name') == 'null' || localStorage.getItem('study') == 'null' || localStorage.getItem('site') == 'null'
  || localStorage.getItem('name') == null || localStorage.getItem('study') == null || localStorage.getItem('site') == null
  || localStorage.getItem('name') == '' || localStorage.getItem('study') == '' || localStorage.getItem('site') == ''){
    setUsername();
  } else {
    let storedName = localStorage.getItem('name');
    pUsername.textContent = 'ID: ' + storedName;

    let storedStudy = localStorage.getItem('study');
    pStudy.textContent = 'Study: ' + storedStudy;

    let storedSite = localStorage.getItem('site');
    pSite.textContent = 'Site: ' + storedSite;
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

function clearStorage(){
  if(confirm('Are you sure you want to clear all of your logs?')){
    for (i = 0; i < arguments.length; i++){
      let name = arguments[i];
      localStorage.removeItem(name);
      document.location.reload(true);
    }
    // sleep page
    if (arguments[0] == 'logmessage1'){
      resetCount('sleepCount');
      
    }
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
  if (localStorage.hasOwnProperty(name) == false){localStorage.setItem(name, 0)};
  str_count = localStorage.getItem(name);

  if (str_count == null || str_count == "null" || str_count == undefined){
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
  if (name == 'activityCountPreferences'){
    str_count = parseInt(localStorage.getItem(name));
    str_count2 = parseInt(localStorage.getItem('activityCountDaily'));
    new_count = str_count + str_count2;
    if (isNaN(new_count)){new_count = 0};
    document.getElementById(id).innerHTML = new_count;
  } else {
    str_count = localStorage.getItem(name);
    if (str_count == null || str_count == "null"){
      document.getElementById(id).innerHTML = 0;
    } else {
      document.getElementById(id).innerHTML = localStorage.getItem(name);
    }
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

function showOutdoorActivities() {
  document.getElementById("outdoors").style.background = '#f5bf4c';
  document.getElementById("indoors").style.background = 'white';
  document.getElementById("occupational").style.background = 'white';
  document.getElementById("sports").style.background = 'white';

  document.getElementById("outdoor-activities").style.display = 'block';
  document.getElementById("indoor-activities").style.display = 'none';
  document.getElementById("occupational-activities").style.display = 'none';
  document.getElementById("sport-activities").style.display = 'none';
  // document.getElementById('selected-activity').style.display= 'none';

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
  if (document.getElementById('dropdown-dur-daily') !== null){
    if (document.getElementById('dropdown-dur-daily').innerText !== 'Duration '){
      document.getElementById('daily-submit').style.display = 'block';
    }
    // if dropdown-hour-preferences, dropdown-minutes-preferences, dropdown-ampm-preferences, and activity-dur-preferences have been filled out: show activity-submit-preferences
    if (document.getElementById('dropdown-hour-preferences').innerText !== 'Hour ' 
    && document.getElementById('dropdown-minutes-preferences').innerText !== 'Minutes '
    && document.getElementById('dropdown-ampm-preferences').innerText !== 'AM/PM '
    && document.getElementById('activity-dur-preferences').innerText !== 'Duration '
    ){document.getElementById('activity-submit-preferences').style.display = 'inline'};
  };    
}

function submitActivity(){
  // var activity = document.getElementById('selected-activity').innerHTML;
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
  // document.getElementById('selected-activity').innerHTML = "";

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
      button.onclick = function(){
        // change button colour
        buttonsInDiv(button.id, 'activities-from-preferences', '#0335fc', 'white');
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
        
        if (localStorage.hasOwnProperty('activityCountDaily') == false){localStorage.setItem('activityCountDaily', 0)};
        if (localStorage.hasOwnProperty('activityCountPreferences') == false){localStorage.setItem('activityCountPreferences', 0)};
        var countTot = parseInt(localStorage.getItem('activityCountDaily')) + parseInt(localStorage.getItem('activityCountPreferences'));
        document.getElementById('num-activity').innerHTML = countTot;
        localStorage.setItem('activityComplete', 'False')
        checkNoMoreActivity();
        FlagCountCheck();
      }
    }
  }
}

function dailyActivitiesFromPreferences(){
  if (localStorage.getItem('DailySelectedArray') == null){newArrayLocalStorage('DailySelectedArray')};
  var array = JSON.parse(localStorage.getItem('DailySelectedArray'));
  if (array.length == 0){
    document.getElementById('link-to-preferences-from-daily').style.display = 'block';
    document.getElementById('daily-activities').style.display = 'none';
  } else {
    // button to link to preferences display = 'none'
    document.getElementById('daily-activities').style.display = 'block';
    document.getElementById('link-to-preferences-from-daily').style.display = 'none';
  };
  var element = document.getElementById('daily-activities');
  for (var i = 0; i < array.length; i++){
    let button = document.createElement("button");
    button.id = 'btn-' + i;
    button.innerHTML = array[i];
    button.className = "btn";
    element.appendChild(button);
    button.onclick = function(){
      // change button colour
      buttonsInDiv(button.id, 'daily-activities', 'rgb(248, 248, 147)', 'black');
      // show next question with all buttons white
      document.getElementById('daily-activity-time').style.display = 'block';
      buttonsInDiv('All', 'daily-activity-time', undefined, undefined);
      localStorage.setItem('dailyActivity', document.getElementById(button.id).innerText);
      // hide submit button and duration buttons
      document.getElementById('daily-activities-duration').style.display = 'none';
      document.getElementById('daily-submit').style.display = 'none';
      
      if (localStorage.hasOwnProperty('activityCountDaily') == false){localStorage.setItem('activityCountDaily', 0)};
      if (localStorage.hasOwnProperty('activityCountPreferences') == false){localStorage.setItem('activityCountPreferences', 0)};
      var countTot = parseInt(localStorage.getItem('activityCountDaily')) + parseInt(localStorage.getItem('activityCountPreferences'));
      document.getElementById('num-activity').innerHTML = countTot;
      localStorage.setItem('activityComplete', 'False')
      checkNoMoreActivity();
      FlagCountCheck();
    }
  }
}

function dailyActivityTime(buttonID){
  var buttonID = buttonID;
  buttonsInDiv(buttonID, 'daily-activity-time', 'rgb(131, 229, 236)', 'black');
  localStorage.setItem('dailyActivityTime', document.getElementById(buttonID).innerText);
  // reset and show duration buttons
  document.getElementById('daily-activities-duration').style.display = 'block';
  document.getElementById('dropdown-dur-daily').innerHTML = 'Duration <i class="fa fa-caret-down"></i>';
  // hide submit button
  document.getElementById('daily-submit').style.display = 'none';
}

function loadActivity(){
  document.getElementById('start-and-duration').style.display = 'none';
  if (localStorage.hasOwnProperty('ActivityStatementArray') !== false && JSON.parse(localStorage.getItem('ActivityStatementArray')).length !== 0){
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
      p.id = 'p-' + (i + 10);
      p.style.display = 'inline';
      let button = document.createElement('button');
      button.id = 'button-' + (i + 10);
      button.style.display = 'inline';
      button.innerHTML = 'X';
      button.className = 'btnx';

      let newActivity = array[i].split("<br>")[1];
      newActivity = newActivity.split(" for")[0];

      if (array[i].includes("starting at")){
        var res = array[i].split("starting at ");
      } else if (array[i].includes("in the")){
        var res = array[i].split("in the ");
      };
      let newStartTime = res[1].split('.')[0];
      
      let str = array[i].split("for ")[1];
      if (str.includes("starting at")){
        var res = str.split("starting at ");
      } else if (str.includes("in the")){
        var res = str.split("in the ");
      };
      let newDuration = res[0].split(',')[0];
     
      button.onclick = function(){
        element.removeChild(p);
        element.removeChild(button);
        let newarr = removeItemOnce(JSON.parse(localStorage.getItem(arrayName)), p.innerHTML);
        localStorage.setItem(arrayName, JSON.stringify(newarr));
        decreaseCountStorage(countName);

        // for csv-writer
        let newActivityArr = removeItemOnce(JSON.parse(localStorage.getItem('activities')), newActivity);
        let newStartTimeArr = removeItemOnce(JSON.parse(localStorage.getItem('starttimes')), newStartTime);
        let newDurationArr = removeItemOnce(JSON.parse(localStorage.getItem('durations')), newDuration);
        localStorage.setItem('activities', JSON.stringify(newActivityArr));
        localStorage.setItem('starttimes', JSON.stringify(newStartTimeArr));
        localStorage.setItem('durations', JSON.stringify(newDurationArr));

        if (localStorage.hasOwnProperty('activityCountDaily') == false){localStorage.setItem('activityCountDaily', 0)};
        if (localStorage.hasOwnProperty('activityCountPreferences') == false){localStorage.setItem('activityCountPreferences', 0)};
        var countTot = parseInt(localStorage.getItem('activityCountDaily')) + parseInt(localStorage.getItem('activityCountPreferences'));
        document.getElementById('num-activity').innerHTML = countTot;
        localStorage.setItem('activityComplete', 'False')
       
        checkNoMoreActivity();
        FlagCountCheck();
      };
      element.appendChild(p);
      element.appendChild(button);
    }
    document.getElementById('logged-activities-preferences').display = 'block';
    localStorage.setItem(countName, array.length);
  } else {
    // newArrayLocalStorage('activities');
    // newArrayLocalStorage('starttimes');
    // newArrayLocalStorage('durations');
  };
  loadActivityPart2();
}

function loadActivityPart2(){
  if (localStorage.hasOwnProperty('DailyActivityStatementArray') !== false && JSON.parse(localStorage.getItem('DailyActivityStatementArray')).length !== 0){
    var arrayName = 'DailyActivityStatementArray';
    var divID = 'logged-daily-activities';
    var countName = 'activityCountDaily';
    if (localStorage.getItem(arrayName) == null){newArrayLocalStorage(arrayName)};
    var retrievedData = localStorage.getItem(arrayName);
    var array = JSON.parse(retrievedData);
    var element = document.getElementById(divID);
    for (var i = 0; i < array.length; i++){
      let p = document.createElement('p');
      p.innerHTML = array[i];
      p.id = 'p-' + (i + 20);
      p.style.display = 'inline';
      let button = document.createElement('button');
      button.id = 'btn-' + (i + 20);
      button.style.display = 'inline';
      button.innerHTML = 'X';
      button.className = 'btnx';

      // for csv-writer
      let newActivity = array[i].split("<br>")[1];
      newActivity = newActivity.split(" for ")[0];

      if (array[i].includes("starting at")){
        var res = array[i].split("starting at ");
      } else if (array[i].includes("in the")){
        var res = array[i].split("in the ");
      };
      let newStartTime = res[1].split('.')[0];
      
      let str = array[i].split("for ")[1];
      if (str.includes("starting at")){
        var res = str.split("starting at ");
      } else if (str.includes("in the")){
        var res = str.split(" in the ");
      };
      let newDuration = res[0].split(',')[0];
      
      button.onclick = function(){
        element.removeChild(p);
        element.removeChild(button);
        let newarr = removeItemOnce(JSON.parse(localStorage.getItem(arrayName)), p.innerHTML);
        localStorage.setItem(arrayName, JSON.stringify(newarr));
        decreaseCountStorage(countName);
        if (localStorage.hasOwnProperty('activityCountDaily') == false){localStorage.setItem('activityCountDaily', 0)};
        if (localStorage.hasOwnProperty('activityCountPreferences') == false){localStorage.setItem('activityCountPreferences', 0)};
        var countTot = parseInt(localStorage.getItem('activityCountDaily')) + parseInt(localStorage.getItem('activityCountPreferences'));
        document.getElementById('num-activity').innerHTML = countTot;
        localStorage.setItem('activityComplete', 'False')

        // for csv-writer
        let newActivityArr = removeItemOnce(JSON.parse(localStorage.getItem('activities')), newActivity);
        let newStartTimeArr = removeItemOnce(JSON.parse(localStorage.getItem('starttimes')), newStartTime);
        let newDurationArr = removeItemOnce(JSON.parse(localStorage.getItem('durations')), newDuration);
        localStorage.setItem('activities', JSON.stringify(newActivityArr));
        localStorage.setItem('starttimes', JSON.stringify(newStartTimeArr));
        localStorage.setItem('durations', JSON.stringify(newDurationArr));
        
        checkNoMoreActivity();
        FlagCountCheck();
      };
      element.appendChild(p);
      element.appendChild(button);
    }
    document.getElementById('logged-daily-activities').display = 'block';
    localStorage.setItem(countName, array.length);
  } else {
    // newArrayLocalStorage('activities');
    // newArrayLocalStorage('starttimes');
    // newArrayLocalStorage('durations');
  }
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
  var message = '<br>' + activity + ' for ' + duration + ', starting at ' + hour + ':' + min + ' ' + ampm + '.'; 
  array.push(message);
  localStorage.setItem('ActivityStatementArray', JSON.stringify(array));

  // for csv-writer
  if (localStorage.hasOwnProperty('activities') == false){newArrayLocalStorage('activities')};
  if (localStorage.hasOwnProperty('starttimes') == false){newArrayLocalStorage('starttimes')};
  if (localStorage.hasOwnProperty('durations') == false){newArrayLocalStorage('durations')};
  var activitiesArray = JSON.parse(localStorage.getItem('activities'));
  var starttimesArray = JSON.parse(localStorage.getItem('starttimes'));
  var durationsArray = JSON.parse(localStorage.getItem('durations'));
  activitiesArray.push(activity);
  starttimesArray.push(hour + ':' + min + ' ' + ampm);
  durationsArray.push(duration);

  // for csv-writer
  var newActivity = activity;
  var newStartTime = hour + ':' + min + ' ' + ampm;
  var newDuration = duration;

  localStorage.setItem('activities', JSON.stringify(activitiesArray));
  localStorage.setItem('starttimes', JSON.stringify(starttimesArray));
  localStorage.setItem('durations', JSON.stringify(durationsArray));

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
      p.id = 'p-' + (i + 10);
      p.style.display = 'inline';
      let button = document.createElement('button');
      button.id = 'button-' + (i + 10);
      button.style.display = 'inline';
      button.innerHTML = 'X';
      button.className = 'btnx';
      
      button.onclick = function(){
        element.removeChild(p);
        element.removeChild(button);
        let newarr = removeItemOnce(JSON.parse(localStorage.getItem(arrayName)), p.innerHTML);
        localStorage.setItem(arrayName, JSON.stringify(newarr));

        // for csv-writer
        let newActivityArr = removeItemOnce(JSON.parse(localStorage.getItem('activities')), newActivity);
        let newStartTimeArr = removeItemOnce(JSON.parse(localStorage.getItem('starttimes')), newStartTime);
        let newDurationArr = removeItemOnce(JSON.parse(localStorage.getItem('durations')), newDuration);
        localStorage.setItem('activities', JSON.stringify(newActivityArr));
        localStorage.setItem('starttimes', JSON.stringify(newStartTimeArr));
        localStorage.setItem('durations', JSON.stringify(newDurationArr));

        decreaseCountStorage(countName);
        if (localStorage.hasOwnProperty('activityCountDaily') == false){localStorage.setItem('activityCountDaily', 0)};
        if (localStorage.hasOwnProperty('activityCountPreferences') == false){localStorage.setItem('activityCountPreferences', 0)};
        var countTot = parseInt(localStorage.getItem('activityCountDaily')) + parseInt(localStorage.getItem('activityCountPreferences'));
        document.getElementById('num-activity').innerHTML = countTot;
        localStorage.setItem('activityComplete', 'False')
    
        checkNoMoreActivity();
        FlagCountCheck();
      };
      if (!document.getElementById(p.id)){element.appendChild(p);};
      if (!document.getElementById(button.id)){element.appendChild(button);};
    }
    document.getElementById('logged-activities-preferences').display = 'block';
    localStorage.setItem(countName, array.length);

    if (localStorage.hasOwnProperty('activityCountDaily') == false){localStorage.setItem('activityCountDaily', 0)};
    if (localStorage.hasOwnProperty('activityCountPreferences') == false){localStorage.setItem('activityCountPreferences', 0)};
    var countTot = parseInt(localStorage.getItem('activityCountDaily')) + parseInt(localStorage.getItem('activityCountPreferences'));

    document.getElementById('num-activity').innerHTML = countTot;
    localStorage.setItem('activityComplete', 'False')
    checkNoMoreActivity();
    FlagCountCheck();
    // window.location.reload();
  };
  // reset activity buttons
  buttonsInDiv('All', 'activities-from-preferences', undefined, undefined);
  // rest question buttons
  document.getElementById('dropdown-hour-preferences').innerHTML = 'Hour <i class="fa fa-caret-down"></i>';
  document.getElementById('dropdown-minutes-preferences').innerHTML = 'Minutes <i class="fa fa-caret-down"></i>';
  document.getElementById('dropdown-ampm-preferences').innerHTML = 'AM/PM <i class="fa fa-caret-down"></i>';
  document.getElementById('activity-dur-preferences').innerHTML = 'Duration <i class="fa fa-caret-down"></i>';
  // hide questions
  document.getElementById('start-and-duration').style.display = 'none';
}

function submitDailyActivity(){
  var activity = localStorage.getItem('dailyActivity');
  var activityStatement;
  if (activity == 'Housework' || activity == 'Carpentry' || activity == 'Manual Labour' || activity == 'Yardwork'){
    activityStatement = 'doing ' + activity;
  } else {
    activityStatement = activity;
  };
  var time = localStorage.getItem('dailyActivityTime');
  var duration = document.getElementById('dropdown-dur-daily').innerHTML;
  if (localStorage.getItem('DailyActivityStatementArray') == null){newArrayLocalStorage('DailyActivityStatementArray')};
  var retrievedData = localStorage.getItem('DailyActivityStatementArray');
  var array = JSON.parse(retrievedData);
  var message = '<br>' + activityStatement + ' for ' + duration + ' in the ' + time + '.'; 
  array.push(message);
  localStorage.setItem('DailyActivityStatementArray', JSON.stringify(array));

  // for csv-writer
  if (localStorage.hasOwnProperty('activities') == false){newArrayLocalStorage('activities')};
  if (localStorage.hasOwnProperty('starttimes') == false){newArrayLocalStorage('starttimes')};
  if (localStorage.hasOwnProperty('durations') == false){newArrayLocalStorage('durations')};
  var activitiesArray = JSON.parse(localStorage.getItem('activities'));
  var starttimesArray = JSON.parse(localStorage.getItem('starttimes'));
  var durationsArray = JSON.parse(localStorage.getItem('durations'));
  activitiesArray.push(activity);
  starttimesArray.push(time);
  durationsArray.push(duration);

  // for csv-writer
  var newActivity = activity;
  var newStartTime = time;
  var newDuration = duration;

  localStorage.setItem('activities', JSON.stringify(activitiesArray));
  localStorage.setItem('starttimes', JSON.stringify(starttimesArray));
  localStorage.setItem('durations', JSON.stringify(durationsArray));

  if (localStorage.getItem('DailyActivityStatementArray') !== null){
    var arrayName = 'DailyActivityStatementArray';
    var divID = 'logged-daily-activities';
    var countName = 'activityCountDaily';
    if (localStorage.getItem(arrayName) == null){newArrayLocalStorage(arrayName)};
    var retrievedData = localStorage.getItem(arrayName);
    var array = JSON.parse(retrievedData);
    var element = document.getElementById(divID);
    for (var i = 0; i < array.length; i++){
      let p = document.createElement('p');
      p.innerHTML = array[i];
      p.id = 'p-' + (i + 20);
      p.style.display = 'inline';
      let button = document.createElement('button');
      button.id = 'btn-' + (i + 20);
      button.style.display = 'inline';
      button.innerHTML = 'X';
      button.className = 'btnx';

      button.onclick = function(){
        element.removeChild(p);
        element.removeChild(button);
        let newarr = removeItemOnce(JSON.parse(localStorage.getItem(arrayName)), p.innerHTML);
        localStorage.setItem(arrayName, JSON.stringify(newarr));
        decreaseCountStorage(countName);
        if (localStorage.hasOwnProperty('activityCountDaily') == false){localStorage.setItem('activityCountDaily', 0)};
        if (localStorage.hasOwnProperty('activityCountPreferences') == false){localStorage.setItem('activityCountPreferences', 0)};
        var countTot = parseInt(localStorage.getItem('activityCountDaily')) + parseInt(localStorage.getItem('activityCountPreferences'));
        document.getElementById('num-activity').innerHTML = countTot;  
        localStorage.setItem('activityComplete', 'False')

        // for csv-writer
        let newActivityArr = removeItemOnce(JSON.parse(localStorage.getItem('activities')), newActivity);
        let newStartTimeArr = removeItemOnce(JSON.parse(localStorage.getItem('starttimes')), newStartTime);
        let newDurationArr = removeItemOnce(JSON.parse(localStorage.getItem('durations')), newDuration);
        localStorage.setItem('activities', JSON.stringify(newActivityArr));
        localStorage.setItem('starttimes', JSON.stringify(newStartTimeArr));
        localStorage.setItem('durations', JSON.stringify(newDurationArr));
    
        checkNoMoreActivity();
        FlagCountCheck();   
      };
      if (!document.getElementById(p.id)){element.appendChild(p);};
      if (!document.getElementById(button.id)){element.appendChild(button);};
    }
    document.getElementById('logged-daily-activities').display = 'block';
    localStorage.setItem(countName, array.length);

    if (localStorage.hasOwnProperty('activityCountDaily') == false){localStorage.setItem('activityCountDaily', 0)};
    if (localStorage.hasOwnProperty('activityCountPreferences') == false){localStorage.setItem('activityCountPreferences', 0)};
    var countTot = parseInt(localStorage.getItem('activityCountDaily')) + parseInt(localStorage.getItem('activityCountPreferences'));
    document.getElementById('num-activity').innerHTML = countTot;
    localStorage.setItem('activityComplete', 'False')
    checkNoMoreActivity();
    FlagCountCheck();
    // window.location.reload();
  };
  // reset activity buttons
  buttonsInDiv('All', 'daily-activities', undefined, undefined);
  // reset question buttons
  buttonsInDiv('All', 'daily-activity-time', undefined, undefined)
  document.getElementById('dropdown-dur-daily').innerHTML = 'Duration <i class="fa fa-caret-down"></i>';
  // hide questions and submit button
  document.getElementById('daily-activity-time').style.display = 'none';
  document.getElementById('daily-submit').style.display = 'none';
  document.getElementById('daily-activities-duration').style.display = 'none';

}

function nomoreActivity(value){
  var value = value;
  if (value == '1'){
    // button turns orange
    document.getElementById('activity-nomore').style.background = 'rgb(245, 191, 76)';
    // submit button appears
    document.getElementById('activity-nomore-submit').style.display = 'inline';
  } else if (value == '2'){
    // both buttons disappear
    document.getElementById('activity-nomore').style.display = 'none';
    document.getElementById('activity-nomore-submit').style.display = 'none';
    // statement appears
    document.getElementById('nomore-msg').style.display = 'inline';
    document.getElementById('nomore-btnx').style.display = 'inline';
    // storage updated --> show checkmark now instead of count
    localStorage.setItem('activityComplete', 'True');
    FlagCountCheck();
  } else if (value == '3'){
    localStorage.setItem('activityComplete', 'False')
    FlagCountCheck();
    document.getElementById('nomore-msg').style.display = 'none';
    document.getElementById('nomore-btnx').style.display = 'none';
    if (parseInt(localStorage.getItem('activityCount')) != 0){
      document.getElementById('activity-nomore').style.display = 'inline';
      document.getElementById('activity-nomore').style.background = 'white';
      document.getElementById('activity-nomore-submit').style.display = 'none';
    }
    FlagCountCheck();
  }
  FlagCountCheck();
}

function checkNoMoreActivity(){
  var activityCount = parseInt(localStorage.getItem('activityCountDaily')) + parseInt(localStorage.getItem('activityCountPreferences'));
  var activityComplete = localStorage.getItem('activityComplete');
  if (activityCount == 0 && activityComplete == 'False'){
    document.getElementById('activity-nomore').style.display = 'none';
    document.getElementById('activity-nomore').style.background = 'white';
    document.getElementById('activity-nomore-submit').style.display = 'none';
    document.getElementById('nomore-msg').style.display = 'none';
    document.getElementById('nomore-btnx').style.display = 'none';

  } else if (activityCount == 0 && activityComplete == 'True'){

    document.getElementById('activity-nomore').style.display = 'none';
    document.getElementById('activity-nomore').style.background = 'white';
    document.getElementById('activity-nomore-submit').style.display = 'none';
    document.getElementById('nomore-msg').style.display = 'none';
    document.getElementById('nomore-btnx').style.display = 'none';
  
  } else if (activityCount != 0 && activityComplete == 'False'){

    document.getElementById('activity-nomore').style.display = 'inline';
    document.getElementById('activity-nomore').style.background = 'white';
    document.getElementById('activity-nomore-submit').style.display = 'none';
    document.getElementById('nomore-msg').style.display = 'none';
    document.getElementById('nomore-btnx').style.display = 'none';
  
  } else if (activityCount != 0 && activityComplete == 'True'){
   
    document.getElementById('activity-nomore').style.display = 'none';
    document.getElementById('activity-nomore').style.background = 'white';
    document.getElementById('activity-nomore-submit').style.display = 'none';
    document.getElementById('nomore-msg').style.display = 'inline';
    document.getElementById('nomore-btnx').style.display = 'inline';
  }
  FlagCountCheck();
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

      // for csv-writer
      let str = array[i];
      let newDurationMin = (str.split('for ')[1]).split(' starting')[0];
      let newNap = (str.split("starting at ")[1]).split(".")[0];

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

        // for csv-writer
        newNapTimeArr = removeItemOnce(JSON.parse(localStorage.getItem('naptimes')), newNap);
        newNapDurArr = removeItemOnce(JSON.parse(localStorage.getItem('napdurations')), newDurationMin);
        localStorage.setItem('naptimes', JSON.stringify(newNapTimeArr));
        localStorage.setItem('napdurations', JSON.stringify(newNapDurArr));

      }
      // add p and the button to the parent  
      element.appendChild(p);
      element.appendChild(button);
      }
    }
  checkNomoreSleep();
}

function checkNomoreSleep(){
  var sleepqual = localStorage.getItem('logmessage1');
  var BedTime = localStorage.getItem('logmessage2');
  var WakeTime = localStorage.getItem('logmessage3');
  if (localStorage.getItem('sleepComplete') == 'True'){
      document.getElementById('nomore-msg').style.display = 'inline';
      document.getElementById('nomore-btnx').style.display = 'inline';
    document.getElementById('sleep-nomore').style.display = 'none';
    document.getElementById('sleep-nomore').style.background = 'white';
    document.getElementById('sleep-nomore-submit').style.display = 'none';
    document.getElementById('nap').style.display = 'none';
  } else if (localStorage.getItem('sleepComplete') == 'False'){
    document.getElementById('nomore-msg').style.display = 'none';
    document.getElementById('nomore-btnx').style.display = 'none';
    document.getElementById('nap').style.display = 'block';
    if (sleepqual != null && BedTime != null && WakeTime != null){
      document.getElementById('sleep-nomore').style.display = 'inline';
      document.getElementById('sleep-nomore').style.background = 'white';
      document.getElementById('sleep-nomore-submit').style.display = 'none';
    } else {
      document.getElementById('sleep-nomore').style.display = 'none';
      document.getElementById('sleep-nomore-submit').style.display = 'none';
    }
  } else {
    if (sleepqual != null && BedTime != null && WakeTime != null){
      document.getElementById('sleep-nomore').style.display = 'inline';
      document.getElementById('sleep-nomore').style.background = 'white';
      document.getElementById('sleep-nomore-submit').style.display = 'none';
    } else {
      document.getElementById('sleep-nomore').style.display = 'none';
      document.getElementById('sleep-nomore-submit').style.display = 'none';
    }
  }
  document.getElementById('bedtime-hour').innerHTML = 'Hour <i class="fa fa-caret-down"></i>';
  document.getElementById('bedtime-minutes').innerHTML = 'Minutes <i class="fa fa-caret-down"></i>';
  document.getElementById('bedtime-ampm').innerHTML = 'AM/PM <i class="fa fa-caret-down"></i>';
  document.getElementById('log-bed-time').style.display = 'none';
  document.getElementById('waketime-hour').innerHTML = 'Hour <i class="fa fa-caret-down"></i>';
  document.getElementById('waketime-minutes').innerHTML = 'Minutes <i class="fa fa-caret-down"></i>';
  document.getElementById('waketime-ampm').innerHTML = 'AM/PM <i class="fa fa-caret-down"></i>';
  document.getElementById('log-wake-time').style.display = 'none';
  document.getElementById('sleepqual1').style.background = '#04c3db';
  document.getElementById('sleepqual2').style.background = '#4ecdde';
  document.getElementById('sleepqual3').style.background = '#81d3de';
  document.getElementById('sleepqual4').style.background = '#a9d8de';
  document.getElementById('log-sleep-quality').style.display = 'none';

  if (localStorage.hasOwnProperty('sleepCount') == false){localStorage.setItem('sleepCount', 0)};
  var countTot = parseInt(localStorage.getItem('sleepCount'));
  document.getElementById('num-sleep').innerHTML = countTot;
  FlagCountCheck();
}


function nomoreSleep(value) {
  var value = value;
  var sleepqual = localStorage.getItem('logmessage1');
  var BedTime = localStorage.getItem('logmessage2');
  var WakeTime = localStorage.getItem('logmessage3');
  if (value == '1'){
    // button turns orange
    document.getElementById('sleep-nomore').style.background = 'rgb(245, 191, 76)';
    // submit button appears
    document.getElementById('sleep-nomore-submit').style.display = 'inline';
  } else if (value == '2'){
    // both buttons disappear
    document.getElementById('sleep-nomore').style.display = 'none';
    document.getElementById('sleep-nomore-submit').style.display = 'none';
    // statement appears
      document.getElementById('nomore-msg').style.display = 'inline';
      document.getElementById('nomore-btnx').style.display = 'inline';
    // storage updated --> show checkmark now instead of count
    localStorage.setItem('sleepComplete', 'True');
    // hide naps entry field
    document.getElementById('nap').style.display = 'none';
    FlagCountCheck();
  } else if (value == '3'){
    localStorage.setItem('sleepComplete', 'False')
    document.getElementById('nomore-msg').style.display = 'none';
    document.getElementById('nomore-btnx').style.display = 'none';
    document.getElementById('nap').style.display = 'block';
    if (sleepqual != null && BedTime != null && WakeTime != null){
      document.getElementById('sleep-nomore').style.display = 'inline';
      document.getElementById('sleep-nomore').style.background = 'white';
      document.getElementById('sleep-nomore-submit').style.display = 'none';
    }
    FlagCountCheck();
  };
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
  FlagCountCheck();
}

function logSleepQuality(){
  if (sleepquality != null || sleepquality != "null"){
    // logmessage1 for sleep quality
    var logMessage1 = 'You indicated that your quality of sleep last night was ' + sleepquality + '.';
    localStorage.setItem('quality', sleepquality); // use in csv-writer
    document.getElementById('logmsg1').innerHTML = logMessage1;
    localStorage.setItem('logmessage1', logMessage1);
    document.getElementById('sleep-quality').style.display = 'none';
    countStorage('sleepCount');
    
    // Create button to remove the sleepquality entry
    createClearButton('logmsg1', 'logmessage1', 'clearlogmsg1', 'sleep-quality', 'sleepCount');
  }
  FlagCountCheck();
  checkNomoreSleep();
}

function logBedTime(){
  var BedTimeHour = document.getElementById("bedtime-hour").innerHTML;
  var BedTimeMinute = document.getElementById("bedtime-minutes").innerHTML;
  var BedTimeAMPM = document.getElementById("bedtime-ampm").innerHTML;
  
  var logMessage2 = 'You went to bed at ' + BedTimeHour + ':' + BedTimeMinute + ' ' + BedTimeAMPM + ' last night.';
  document.getElementById('logmsg2').innerHTML = logMessage2;
  localStorage.setItem('logmessage2', logMessage2);
  localStorage.setItem('bedtime', BedTimeHour + ':' + BedTimeMinute + ' ' + BedTimeAMPM); // for csv-writer
  document.getElementById('bedtime').style.display = 'none';
  countStorage('sleepCount');
  createClearButton('logmsg2', 'logmessage2', 'clearlogmsg2', 'bedtime', 'sleepCount');
  checkNomoreSleep();
}

function logWakeTime(){
  var WakeTimeHour = document.getElementById("waketime-hour").innerHTML;
  var WakeTimeMinute = document.getElementById("waketime-minutes").innerHTML;
  var WakeTimeAMPM = document.getElementById("waketime-ampm").innerHTML;

  var logMessage3 = 'You woke up at ' + WakeTimeHour + ':' + WakeTimeMinute + ' ' + WakeTimeAMPM + ' today.';
  document.getElementById('logmsg3').innerHTML = logMessage3;
  localStorage.setItem('logmessage3', logMessage3);
  localStorage.setItem('waketime', WakeTimeHour + ':' + WakeTimeMinute + ' ' + WakeTimeAMPM); // for csv-writer
  document.getElementById('waketime').style.display = 'none';
  countStorage('sleepCount');
  createClearButton('logmsg3', 'logmessage3', 'clearlogmsg3', 'waketime', 'sleepCount');
  checkNomoreSleep();
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

  // for csv-writer
  if (localStorage.getItem('naptimes') == null){newArrayLocalStorage('naptimes')};
  if (localStorage.getItem('napdurations') == null){newArrayLocalStorage('napdurations')};
  var napTimesData = localStorage.getItem('naptimes');
  var napDurationsData = localStorage.getItem('napdurations');
  var napTimesArray = JSON.parse(napTimesData);
  var napDurationsArray = JSON.parse(napDurationsData);
  var newNapTime = Hour + ':' + Minute + ' ' + AMPM;
  var newNapDur = NapDur;
  napTimesArray.push(Hour + ':' + Minute + ' ' + AMPM);
  napDurationsArray.push(NapDur);
  localStorage.setItem('naptimes', JSON.stringify(napTimesArray));
  localStorage.setItem('napdurations', JSON.stringify(napDurationsArray));
  
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

    // for csv-writer
    newNapTimeArr = removeItemOnce(JSON.parse(localStorage.getItem('naptimes')), newNapTime);
    newNapDurArr = removeItemOnce(JSON.parse(localStorage.getItem('napdurations')), newNapDur);
    localStorage.setItem('naptimes', JSON.stringify(newNapTimeArr));
    localStorage.setItem('napdurations', JSON.stringify(newNapDurArr));

    // decrease count by 1
    decreaseCountStorage('sleepCount')
    if (localStorage.hasOwnProperty('sleepCount') == false){localStorage.setItem('sleepCount', 0)};
    var countTot = parseInt(localStorage.getItem('sleepCount'));
    document.getElementById('num-sleep').innerHTML = countTot;
    localStorage.setItem('sleepComplete', 'False');
    checkNomoreSleep();
  }
  element.appendChild(newP);
  element.appendChild(newButton);

  localStorage.setItem('NapEntryArray', JSON.stringify(array));

  document.getElementById('nap-hour').innerHTML = 'Hour <i class="fa fa-caret-down"></i>';
  document.getElementById('nap-minutes').innerHTML = 'Minutes <i class="fa fa-caret-down"></i>';
  document.getElementById('nap-ampm').innerHTML = 'AM/PM <i class="fa fa-caret-down"></i>';
  document.getElementById('nap-dur').innerHTML = 'Duration <i class="fa fa-caret-down"></i>';
  document.getElementById('log-nap').style.display = 'none';
  if (localStorage.hasOwnProperty('sleepCount') == false){localStorage.setItem('sleepCount', 0)};
  var countTot = parseInt(localStorage.getItem('sleepCount'));
  document.getElementById('num-sleep').innerHTML = countTot;
  localStorage.setItem('sleepComplete', 'False');
  checkNomoreSleep();
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
    fallMoreDetails = '<br>You provided additional information: ' + textarea;
  }
  fallMessage = '<br> You indicated: <br> You ' + fallOrNearFall + ' in the ' + fallTime + ' while you were ' + fallLocation + fallLocationInside + '. <br> You were ' + fallActivity + ' before you ' + fallOrNearFall + ' and that ' + fallCause + '. ' + fallWalkingAid + '<br>You were ' + fallInjured + fallMedical + fallMoreDetails;
  if (fallOrNearFall == undefined || fallOrNearFall == 'undefined'){
    fallMessage = '<br> You indicated: You did not fall today.';
  }
  if (localStorage.getItem('FallEntryArray') == null){newArrayLocalStorage('FallEntryArray')};
  var retrievedData = localStorage.getItem('FallEntryArray');
  var array = JSON.parse(retrievedData);
  array.push(fallMessage);
  localStorage.setItem('FallEntryArray', JSON.stringify(array));

  // for csv-writer
  // if (localStorage.hasOwnProperty('fallOrNearFallCSV') == false){newArrayLocalStorage('fallOrNearFallCSV')};
  // var fallOrNearFallArray = JSON.parse(localStorage.getItem('fallOrNearFallCSV'));
  // fallOrNearFallArray.push(fallOrNearFall);
  // localStorage.setItem('fallOrNearFallCSV', JSON.stringify(fallOrNearFallArray));

  // if (localStorage.hasOwnProperty('fallTimeCSV') == false){newArrayLocalStorage('fallTimeCSV')};
  // var fallTimeArray = JSON.parse(localStorage.getItem('fallTimeCSV'));
  // fallTimeArray.push(fallTime);
  // localStorage.setItem('fallTimeCSV', JSON.stringify(fallTimeArray));

  // if (localStorage.hasOwnProperty('fallLocationCSV') == false){newArrayLocalStorage('fallLocationCSV')};
  // var fallLocationArray = JSON.parse(localStorage.getItem('fallLocationCSV'));
  // fallLocationArray.push(fallLocation);
  // localStorage.setItem('fallLocationCSV', JSON.stringify(fallLocationArray));

  // if (localStorage.hasOwnProperty('fallLocationInsideCSV') == false){newArrayLocalStorage('fallLocationInsideCSV')};
  // var fallLocationInsideArray = JSON.parse(localStorage.getItem('fallLocationInsideCSV'));
  // fallLocationInsideArray.push(fallLocationInside);
  // localStorage.setItem('fallLocationInsideCSV', JSON.stringify(fallLocationInsideArray));

  // if (localStorage.hasOwnProperty('fallActivityCSV') == false){newArrayLocalStorage('fallActivityCSV')};
  // var fallActivityArray = JSON.parse(localStorage.getItem('fallActivityCSV'));
  // fallActivityArray.push(fallActivity);
  // localStorage.setItem('fallActivityCSV', JSON.stringify(fallActivityArray));

  // if (localStorage.hasOwnProperty('fallCauseCSV') == false){newArrayLocalStorage('fallCauseCSV')};
  // var fallCauseArray = JSON.parse(localStorage.getItem('fallCauseCSV'));
  // fallCauseArray.push(fallCause);
  // localStorage.setItem('fallCauseCSV', JSON.stringify(fallCauseArray));

  // if (localStorage.hasOwnProperty('fallInjuredCSV') == false){newArrayLocalStorage('fallInjuredCSV')};
  // var fallInjuredArray = JSON.parse(localStorage.getItem('fallInjuredCSV'));
  // fallInjuredArray.push(fallInjured);
  // localStorage.setItem('fallInjuredCSV', JSON.stringify(fallInjuredArray));

  // if (localStorage.hasOwnProperty('fallMedicalCSV') == false){newArrayLocalStorage('fallMedicalCSV')};
  // var fallMedicalArray = JSON.parse(localStorage.getItem('fallMedicalCSV'));
  // fallMedicalArray.push(fallMedical);
  // localStorage.setItem('fallMedicalCSV', JSON.stringify(fallMedicalArray));

  // if (localStorage.hasOwnProperty('fallMoreDetailsCSV') == false){newArrayLocalStorage('fallMoreDetailsCSV')};
  // var fallMoreDetailsArray = JSON.parse(localStorage.getItem('fallMoreDetailsCSV'));
  // fallMoreDetailsArray.push(fallMoreDetails);
  // localStorage.setItem('fallMoreDetailsCSV', JSON.stringify(fallMoreDetailsArray));

  // if (localStorage.hasOwnProperty('fallWalkingAidCSV') == false){newArrayLocalStorage('fallWalkingAidCSV')};
  // var fallWalkingAidArray = JSON.parse(localStorage.getItem('fallWalkingAidCSV'));
  // fallWalkingAidArray.push(fallWalkingAid);
  // localStorage.setItem('fallWalkingAidCSV', JSON.stringify(fallWalkingAidArray));

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
  createPAndXButtonFromArray('FallEntryArray', 'fallCount', 'fall-entries');
  window.location.reload()
  
  document.getElementById('fall-textarea').value = '';
  if (localStorage.hasOwnProperty('fallCount') == false){localStorage.setItem('fallCount', 0)};
  var countTot = parseInt(localStorage.getItem('fallCount'));
  document.getElementById('num-falls').innerHTML = countTot;
  localStorage.setItem('fallsComplete', 'False');
  var countTot = parseInt(localStorage.getItem('fallCount'));
  document.getElementById('num-falls').innerHTML = countTot;
  // checkFallEntries();
  checkNoMoreFalls();
  FlagCountCheck();
}

var fallMessage;
var fallOrNearFall; // fell/almost fell
var fallTime; // morning/daytime/evening/nighttime
var fallLocation; // inside/outside
var fallLocationInside; // home/not at home
var fallActivity; // standing/walking/in the bathroom/on the stairs
var fallCause; // slipped/dizzy/lost your balance/tripped over an object/tripped on the stairs/other reason
var fallInjured; // not injured/injured
var fallMedical; // '.'/ and got medical help./ and did not get medical help.
var fallMoreDetails; // ' '/You provided additional information: + textinput + .
var fallWalkingAid; // ' '/You were not using your walking aid./You were using your walking aid.

function fallType(details){
  var details = details;
  if (details == 'no-fall'){
    document.getElementById('nofall-image').src = 'images/nofall_words_purple.ico';
    document.getElementById('fall-image').src = 'images/fall_words.ico';
    document.getElementById('almostfall-image').src = 'images/almostfall_words.ico';
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
    document.getElementById('submit-nofall').style.display = 'inline';
    fallMessage = 'undefined';
    fallOrNearFall = 'undefined'; // fell/almost fell
    fallTime = 'undefined'; // morning/daytime/evening/nighttime
    fallLocation = 'undefined'; // inside/outside
    fallLocationInside = 'undefined'; // home/not at home
    fallActivity = 'undefined'; // standing/walking/in the bathroom/on the stairs
    fallCause = 'undefined'; // slipped/dizzy/lost your balance/tripped over an object/tripped on the stairs/other reason
    fallInjured = 'undefined'; // not injured/injured
    fallMedical = 'undefined'; // '.'/ and got medical help./ and did not get medical help.
    fallMoreDetails = 'undefined'; // ' '/You provided additional information: + textinput + .
    fallWalkingAid = 'undefined';

  };
  if (details == 'fall' || details == 'near-fall'){
    document.getElementById('submit-nofall').style.display = 'none';
    document.getElementById('nofall-image').src = 'images/nofall_words.ico';
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
      document.getElementById('fall-outside').style.background = 'rgb(255, 244, 125)';
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
      fallLocationInside = ' and in another location';
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
      fallActivity = 'standing still';
      document.getElementById('fall-standing-still').style.background = '#f5bf4c';
      document.getElementById('fall-standing-up').style.background = 'white';
      document.getElementById('fall-sitting-down').style.background = 'white';
      document.getElementById('fall-walking').style.background = 'white';
      document.getElementById('fall-rushing').style.background = 'white';  
    } else if (details == 'fall-standing-up'){
      fallActivity = 'standing up';
      document.getElementById('fall-standing-still').style.background = 'white';
      document.getElementById('fall-standing-up').style.background = '#f5bf4c';
      document.getElementById('fall-sitting-down').style.background = 'white';
      document.getElementById('fall-walking').style.background = 'white';
      document.getElementById('fall-rushing').style.background = 'white';  
    } else if (details == 'fall-sitting-down'){
      fallActivity = 'sitting down';
      document.getElementById('fall-standing-still').style.background = 'white';
      document.getElementById('fall-standing-up').style.background = 'white';
      document.getElementById('fall-sitting-down').style.background = '#f5bf4c';
      document.getElementById('fall-walking').style.background = 'white';
      document.getElementById('fall-rushing').style.background = 'white';  
    } else if (details == 'fall-walking'){
      fallActivity = 'walking';
      document.getElementById('fall-standing-still').style.background = 'white';
      document.getElementById('fall-standing-up').style.background = 'white';
      document.getElementById('fall-sitting-down').style.background = 'white';
      document.getElementById('fall-walking').style.background = '#f5bf4c';
      document.getElementById('fall-rushing').style.background = 'white';  
    } else if (details == 'fall-rushing'){
      fallActivity = 'rushing';
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
      document.getElementById('fall-walking-aid').style.display = 'none';
      fallInjured = 'injured';
    } else if (details == 'not-injured'){
      document.getElementById('medical-questions').style.display = 'none';
      fallInjured = 'not injured';
      fallMedical = '.';
      document.getElementById('fall-more-details').style.display = 'block';
      document.getElementById('submit-fall').style.display = 'block';
      document.getElementById('not-injured').style.background = '#eb5f34';
      document.getElementById('injured').style.background = 'white';
      document.getElementById('fall-walking-aid').style.display = 'block';
      document.getElementById('submit-fall').style.display = 'none';
    }
  } else if (details == 'medical' || details == 'no-medical'){
    document.getElementById('fall-time').style.display = 'block';
    document.getElementById('fall-location').style.display = 'block';
    document.getElementById('fall-activity').style.display = 'block';
    document.getElementById('fall-cause').style.display = 'block';
    document.getElementById('injured-question').style.display = 'block';
    document.getElementById('medical-questions').style.display = 'block';
    document.getElementById('fall-more-details').style.display = 'block';
    document.getElementById('no-walking-aid').style.background = 'white';
    document.getElementById('yes-walking-aid').style.background = 'white';
    document.getElementById('fall-walking-aid').style.display = 'block';
    document.getElementById('submit-fall').style.display = 'none';
    if (details == 'medical'){
      fallMedical = ' and got medical help.';
      document.getElementById('medical').style.background = '#eb5f34';
      document.getElementById('no-medical').style.background = 'white';
    } else if (details == 'no-medical'){
      fallMedical = ' and did not get medical help.';
      document.getElementById('medical').style.background = 'white';
      document.getElementById('no-medical').style.background = '#eb5f34';
    }
  } else if (details == 'yes-walking-aid' || details == 'no-walking-aid'){
    document.getElementById('submit-fall').style.display = 'block';

    if (details == 'yes-walking-aid'){
      document.getElementById('yes-walking-aid').style.background = 'rgb(167, 232, 211)';
      document.getElementById('no-walking-aid').style.background = 'white';
      fallWalkingAid = '<br>You were using a walking aid. ';
    } else {
      document.getElementById('yes-walking-aid').style.background = 'white';
      document.getElementById('no-walking-aid').style.background = 'rgb(167, 232, 211)';
      fallWalkingAid = '<br>You were not using a walking aid. ';
    }
  }
}

function submitNoFall(){
  localStorage.setItem('noFallsToday', 'True');
  localStorage.setItem('fallsComplete', 'True');
  document.getElementById('msg-nofall').style.display = 'inline';
  document.getElementById('btn-nofall').style.display = 'inline';
  document.getElementById('fall-image').style.display = 'none';
  document.getElementById('almostfall-image').style.display = 'none';
  document.getElementById('nofall-image').style.display = 'none';
  document.getElementById('submit-nofall').style.display = 'none';

  localStorage.setItem('fallOrNearFallCSV', JSON.stringify([null]));
  localStorage.setItem('fallTimeCSV', JSON.stringify([null]));
  localStorage.setItem('fallLocationCSV', JSON.stringify([null]));
  localStorage.setItem('fallLocationInsideCSV', JSON.stringify([null]));
  localStorage.setItem('fallActivityCSV', JSON.stringify([null]));
  localStorage.setItem('fallCauseCSV', JSON.stringify([null]));
  localStorage.setItem('fallInjuredCSV', JSON.stringify([null]));
  localStorage.setItem('fallMedicalCSV',JSON.stringify([null]));
  localStorage.setItem('fallMoreDetailsCSV', JSON.stringify([null]));
  localStorage.setItem('fallWalkingAidCSV', JSON.stringify([null]));

  FlagCountCheck();
}

function removeNoFall(){
  localStorage.setItem('noFallsToday', 'False');
  localStorage.setItem('fallsComplete', 'False');
  document.getElementById('msg-nofall').style.display = 'none';
  document.getElementById('btn-nofall').style.display = 'none';
  document.getElementById('fall-image').style.display = 'inline';
  document.getElementById('almostfall-image').style.display = 'inline';
  if (parseInt(localStorage.getItem('fallCount')) == 0){
    document.getElementById('nofall-image').style.display = 'inline';
    document.getElementById('nofall-image').src = 'images/nofall_words.ico';
    localStorage.setItem('fallOrNearFallCSV', JSON.stringify([]));
    localStorage.setItem('fallTimeCSV', JSON.stringify([]));
    localStorage.setItem('fallLocationCSV', JSON.stringify([]));
    localStorage.setItem('fallLocationInsideCSV', JSON.stringify([]));
    localStorage.setItem('fallActivityCSV', JSON.stringify([]));
    localStorage.setItem('fallCauseCSV', JSON.stringify([]));
    localStorage.setItem('fallInjuredCSV', JSON.stringify([]));
    localStorage.setItem('fallMedicalCSV', JSON.stringify([]));
    localStorage.setItem('fallMoreDetailsCSV', JSON.stringify([]));
    localStorage.setItem('fallWalkingAidCSV', JSON.stringify([]));
  } else {
    document.getElementById('nofall-image').style.display = 'none';
  }
  FlagCountCheck();
}

function checkFallEntries(){
  if (localStorage.getItem('FallEntryArray') == null){newArrayLocalStorage('FallEntryArray');};
  var retrievedData = localStorage.getItem('FallEntryArray');
  var array = JSON.parse(retrievedData);
  if (array.length == 0){
    document.getElementById('fall-statement').style.display = 'block';
    document.getElementById('nofall-image').style.display = 'inline';
  } else {
    document.getElementById('fall-statement').style.display = 'block';
    document.getElementById('nofall-image').style.display = 'none';
  }
  if (localStorage.getItem('noFallsToday') == 'True'){
    submitNoFall();
  } else if (localStorage.getItem('noFallsToday') == 'False'){
    FlagCountCheck();
    document.getElementById('msg-nofall').style.display = 'none';
    document.getElementById('btn-nofall').style.display = 'none';
    document.getElementById('fall-image').style.display = 'inline';
    document.getElementById('almostfall-image').style.display = 'inline';
    if (parseInt(localStorage.getItem('fallCount')) == 0){
      document.getElementById('nofall-image').style.display = 'inline';
      document.getElementById('nofall-image').src = 'images/nofall_words.ico';
    } else {
      document.getElementById('nofall-image').style.display = 'none';
    }
  };
  FlagCountCheck();
}

function nomoreFalls(value) {
  var value = value;
  if (value == '1'){
    // button turns orange
    document.getElementById('falls-nomore').style.background = 'rgb(245, 191, 76)';
    // submit button appears
    document.getElementById('falls-nomore-submit').style.display = 'inline';
  } else if (value == '2'){
    // both buttons disappear
    document.getElementById('falls-nomore').style.display = 'none';
    document.getElementById('falls-nomore-submit').style.display = 'none';
    // statement appears
    document.getElementById('nomore-msg').style.display = 'inline';
    document.getElementById('nomore-btnx').style.display = 'inline';
    // storage updated --> show checkmark now instead of count
    localStorage.setItem('fallsComplete', 'True');
    FlagCountCheck();
  } else if (value == '3'){
    localStorage.setItem('fallsComplete', 'False')
    document.getElementById('nomore-msg').style.display = 'none';
    document.getElementById('nomore-btnx').style.display = 'none';
    document.getElementById('falls-nomore').style.display = 'inline';
    document.getElementById('falls-nomore').style.background = 'white';
    document.getElementById('falls-nomore-submit').style.display = 'none';
    FlagCountCheck();
  };
}

function checkNoMoreFalls(){
  var fallsCount = parseInt(localStorage.getItem('fallCount'));
  var fallsComplete = localStorage.getItem('fallsComplete');

  if (fallsCount == 0 && fallsComplete == 'False'){
    document.getElementById('fall-image').style.display = 'inline';
    document.getElementById('almostfall-image').style.display = 'inline';
    document.getElementById('nofall-image').style.display = 'inline';

    document.getElementById('msg-nofall').style.display = 'none';
    document.getElementById('btn-nofall').style.display = 'none';

    document.getElementById('falls-nomore').style.display = 'none';
    document.getElementById('falls-nomore').style.background = 'white';
    document.getElementById('falls-nomore-submit').style.display = 'none';
    document.getElementById('nomore-msg').style.display = 'none';
    document.getElementById('nomore-btnx').style.display = 'none';

  } else if (fallsCount == 0 && fallsComplete == 'True'){
    document.getElementById('fall-image').style.display = 'none';
    document.getElementById('almostfall-image').style.display = 'none';
    document.getElementById('nofall-image').style.display = 'none';

    document.getElementById('msg-nofall').style.display = 'inline';
    document.getElementById('btn-nofall').style.display = 'inline';

    document.getElementById('falls-nomore').style.display = 'none';
    document.getElementById('falls-nomore').style.background = 'white';
    document.getElementById('falls-nomore-submit').style.display = 'none';
    document.getElementById('nomore-msg').style.display = 'none';
    document.getElementById('nomore-btnx').style.display = 'none';
  
  } else if (fallsCount != 0 && fallsComplete == 'False'){
    document.getElementById('fall-image').style.display = 'inline';
    document.getElementById('almostfall-image').style.display = 'inline';
    document.getElementById('nofall-image').style.display = 'none';

    document.getElementById('msg-nofall').style.display = 'none';
    document.getElementById('btn-nofall').style.display = 'none';

    document.getElementById('falls-nomore').style.display = 'inline';
    document.getElementById('falls-nomore').style.background = 'white';
    document.getElementById('falls-nomore-submit').style.display = 'none';
    document.getElementById('nomore-msg').style.display = 'none';
    document.getElementById('nomore-btnx').style.display = 'none';
  
  } else if (fallsCount != 0 && fallsComplete == 'True'){
    document.getElementById('fall-image').style.display = 'inline';
    document.getElementById('almostfall-image').style.display = 'inline';
    document.getElementById('nofall-image').style.display = 'none';

    document.getElementById('msg-nofall').style.display = 'none';
    document.getElementById('btn-nofall').style.display = 'none';

    document.getElementById('falls-nomore').style.display = 'none';
    document.getElementById('falls-nomore').style.background = 'white';
    document.getElementById('falls-nomore-submit').style.display = 'none';
    document.getElementById('nomore-msg').style.display = 'inline';
    document.getElementById('nomore-btnx').style.display = 'inline';
  }
  FlagCountCheck();
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
  if (
    (afraid !==  'null' && confused !==  'null' && sad !==  'null' && angry !==  'null' && energetic !== 'null' && tired !== 'null' && happy !== 'null' && tense !== 'null') && 
    (afraid !==  undefined && confused !==  undefined && sad !==  undefined && angry !==  undefined && energetic !== undefined && tired !== undefined && happy !== undefined && tense !== undefined) && 
    (afraid !==  null && confused !==  null && sad !==  null && angry !==  null && energetic !== null && tired !== null && happy !== null && tense !== null)
  )
    {
      document.getElementById('submit-mood').style.display = 'block';
    
  };
}

// on click of the button
function changeLikertMoodforPreferences(divID, buttonID, likert, mood){
  var buttonID = buttonID;
  var afraid = localStorage.getItem('afraidPref');
  var confused = localStorage.getItem('confusedPref');
  var sad = localStorage.getItem('sadPref');
  var angry = localStorage.getItem('angryPref');
  var energetic = localStorage.getItem('energeticPref');
  var tired = localStorage.getItem('tiredPref');
  var happy = localStorage.getItem('happyPref');
  var tense = localStorage.getItem('tensePref');
  // update the mood to the likert option selected
  if (mood == 'afraidPref'){localStorage.setItem(mood, likert); afraid = localStorage.getItem(mood);};
  if (mood == 'confusedPref'){localStorage.setItem(mood, likert); confused = localStorage.getItem(mood);};
  if (mood == 'sadPref'){localStorage.setItem(mood, likert); sad = localStorage.getItem(mood);};
  if (mood == 'angryPref'){localStorage.setItem(mood, likert); angry = localStorage.getItem(mood);};
  if (mood == 'energeticPref'){localStorage.setItem(mood, likert); energetic = localStorage.getItem(mood);};
  if (mood == 'tiredPref'){localStorage.setItem(mood, likert); tired = localStorage.getItem(mood);};
  if (mood == 'happyPref'){localStorage.setItem(mood, likert); happy = localStorage.getItem(mood);};
  if (mood == 'tensePref'){localStorage.setItem(mood, likert); tense = localStorage.getItem(mood);};
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
  var confused = localStorage.getItem('confused');
  var sad = localStorage.getItem('sad');
  var angry = localStorage.getItem('angry');
  var energetic = localStorage.getItem('energetic');
  var tired = localStorage.getItem('tired');
  var happy = localStorage.getItem('happy');
  var tense = localStorage.getItem('tense');
  if (afraid !== 'null' && afraid !== null && afraid !== undefined){count += 1};
  if (confused !== 'null' && confused !== null && confused !== undefined){count += 1};
  if (sad !== 'null' && sad !== null && sad !== undefined){count += 1};
  if (angry !== 'null' && angry !== null && angry !== undefined){count += 1};
  if (energetic !== 'null' && energetic !== null && energetic !== undefined){count += 1};
  if (tired !== 'null' && tired !== null && tired !== undefined){count += 1};
  if (happy !== 'null' && happy !== null && happy !== undefined){count += 1};
  if (tense !== 'null' && tense !== null && tense !== undefined){count += 1};
  if (count > 0){document.getElementById('mood-statement').style.display = 'block';};
  var array = ['afraid', afraid, 'confused', confused, 'sad', sad, 'angry', angry, 'energetic', energetic, 'tired', tired, 'happy', happy, 'tense', tense];
    localStorage.setItem('moodCount', count);
  var element = document.getElementById('mood-entries');
  for (var i = 0; i < array.length; i = i + 2){
    let likert = array[i+1];
    if (likert !== null && likert !== 'null' && likert !== undefined){
      let p = document.createElement('p');
      let button = document.createElement("button");
      let divid = 'mood-' + array[i];
      let mood = array[i];
      
      p.innerHTML = capitalize(array[i]) + ': ' +  array[i+1]; // e.g Afraid: Always
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
        if (localStorage.getItem('moodCount') == 0 || localStorage.getItem('moodCount') == '0'){
          document.getElementById('mood-statement').style.display = 'none';
        }
        // reset all of the buttons to be white with black text
        var children = [].slice.call(document.getElementById(divid).getElementsByTagName('button'), 0);
        for (var i = 0; i < children.length; i++){
          let id = children[i].getAttribute('id');
            document.getElementById(id).style.background = 'white';
            document.getElementById(id).style.color = 'black';
          };
          var countTot = parseInt(localStorage.getItem('moodCount'));
          document.getElementById('num-mood').innerHTML = countTot;
          FlagCountCheck();
        }
      if (!document.getElementById(p.id)){
        element.appendChild(document.createElement("br"))
        element.appendChild(p);
      };
      if (!document.getElementById(button.id)){
        element.appendChild(button);
        document.getElementById('mood-' + mood).style.display = 'none';
      }
    }
  }  
  document.getElementById('submit-mood').style.display = 'none';
  if (localStorage.hasOwnProperty('moodCount') == false){localStorage.setItem('moodCount', 0)};
  var countTot = parseInt(localStorage.getItem('moodCount'));
  document.getElementById('num-mood').innerHTML = countTot;
  FlagCountCheck();
}

function submitMoodAndLikertforPreferences(){
  var count = localStorage.getItem('moodCountPref');
  count = 0;
  var afraid = localStorage.getItem('afraidPref');
  var confused = localStorage.getItem('confusedPref');
  var sad = localStorage.getItem('sadPref');
  var angry = localStorage.getItem('angryPref');
  var energetic = localStorage.getItem('energeticPref');
  var tired = localStorage.getItem('tiredPref');
  var happy = localStorage.getItem('happyPref');
  var tense = localStorage.getItem('tensePref');
  if (afraid !== 'null' && afraid !== null && afraid !== undefined){count += 1};
  if (confused !== 'null' && confused !== null && confused !== undefined){count += 1};
  if (sad !== 'null' && sad !== null && sad !== undefined){count += 1};
  if (angry !== 'null' && angry !== null && angry !== undefined){count += 1};
  if (energetic !== 'null' && energetic !== null && energetic !== undefined){count += 1};
  if (tired !== 'null' && tired !== null && tired !== undefined){count += 1};
  if (happy !== 'null' && happy !== null && happy !== undefined){count += 1};
  if (tense !== 'null' && tense !== null && tense !== undefined){count += 1};
  if (count > 0){document.getElementById('mood-statement').style.display = 'block';};
  var array = ['afraidPref', afraid, 'confusedPref', confused, 'sadPref', sad, 'angryPref', angry, 'energeticPref', energetic, 'tiredPref', tired, 'happyPref', happy, 'tensePref', tense];
  localStorage.setItem('moodCountPref', count);
  var element = document.getElementById('mood-entries');
  for (var i = 0; i < array.length; i = i + 2){
    let likert = array[i+1];
    if (likert !== null && likert !== 'null' && likert !== undefined){
      let p = document.createElement('p');
      let button = document.createElement("button");
      let divid = 'mood-' + array[i].slice(0, -4);
      let mood = array[i];
      
      p.innerHTML = capitalize(array[i].slice(0, -4)) + ': ' +  array[i+1]; // e.g Afraid: Always
      p.id = "p-" + array[i]; // e.g. p-afraidPref
      button.id = 'button-' + array[i]; // e.g. button-afraidPref
      button.innerHTML = 'X';
      button.className = 'btnx';
      button.onclick = function(){
        document.getElementById(divid).style.display = 'block';
        document.getElementById('submit-mood').style.display = 'none';
        localStorage.setItem(mood, null);
        element.removeChild(p);
        element.removeChild(button);
        decreaseCountStorage('moodCountPref');
        if (localStorage.getItem('moodCountPref') == 0 || localStorage.getItem('moodCountPref') == '0'){
          document.getElementById('mood-statement').style.display = 'none';
        }
        // reset all of the buttons to be white with black text
        var children = [].slice.call(document.getElementById(divid).getElementsByTagName('button'), 0);
        for (var i = 0; i < children.length; i++){
          let id = children[i].getAttribute('id');
            document.getElementById(id).style.background = 'white';
            document.getElementById(id).style.color = 'black';
          };
          var countTot = parseInt(localStorage.getItem('moodCountPref'));
        moodPrefFlagCheck();
        }
      if (!document.getElementById(p.id)){
        element.appendChild(document.createElement("br"))
        element.appendChild(p);
      };
      if (!document.getElementById(button.id)){
        element.appendChild(button);
        document.getElementById('mood-' + mood.slice(0, -4)).style.display = 'none';
      }
    }
  }  
  document.getElementById('submit-mood').style.display = 'none';
  if (localStorage.hasOwnProperty('moodCountPref') == false){localStorage.setItem('moodCountPref', 0)};
  var countTot = parseInt(localStorage.getItem('moodCountPref'));
  moodPrefFlagCheck();
}

// - - - - - - 
// PREFERENCES
// - - - - - - 
function DailyActivitySelect(id, activity){
  var activity = ' ' + activity;
  var btn = document.getElementById(id);
  var count = localStorage.getItem('DailySelectedCount');
  if (localStorage.getItem('DailySelectedArray') == null){newArrayLocalStorage('DailySelectedArray');};
  var retrievedData = localStorage.getItem('DailySelectedArray');
  var array = JSON.parse(retrievedData);
  if (count == null){
    count = 0;
  } else {
    count = parseInt(count);
  };

  if (btn.className == 'btn'){
    btn.className += " active";
    btn.style.background = 'dodgerblue';
    count += 1; 
    array.push(activity)
  } else {
    btn.className = 'btn';
    btn.style.background = 'white';
    if (count > 0){count -= 1;}
    var index = array.indexOf(activity);
    array.splice(index, 1);
  }
  localStorage.setItem('DailySelectedCount', count);
  localStorage.setItem('DailySelectedArray', JSON.stringify(array));

  // show submit button
  document.getElementById('daily-preferences-submit').style.display = 'block';
}

function makeDailyButtons(){
  var buttonNames = JSON.parse(localStorage.getItem('DailySelectedArray'));
  // if (buttonNames.length !== 0){
  //   document.getElementById('daily-preferences-1').style.display = 'none';
  //   document.getElementById('daily-preferences-2').style.display = 'none';
  //   document.getElementById('daily-preferences-3').style.display = 'none';
  //   document.getElementById('daily-preferences-4').style.display = 'none';
  //   document.getElementById('daily-preferences-5').style.display = 'none';
  //   document.getElementById('daily-preferences-6').style.display = 'none';
  // }
  console.log(buttonNames)
  for (var i = 0; i < buttonNames.length; i++){
    var id = 'daily-selected-' + i;
    var button = document.getElementById(id);
    button.style.display = 'inline-block';
    button.innerHTML = buttonNames[i];
    document.getElementById(id).style.display = 'inline';
  }
  if (buttonNames.length > 0){
    document.getElementById('preferences-daily-activities').style.display = 'none';
    document.getElementById('daily-preferences-submit').style.display = 'none';
    document.getElementById('change-daily-activities').style.display = 'block';
    document.getElementById('selected-daily-activities').style.display = 'block'; 

    // for button in selected-daily-activities: if button.innerText not in buttonNames, then hide it   

    let parent = document.getElementById('selected-daily-activities');
    var children = [].slice.call(parent.getElementsByTagName('button'), 0);
    for (var i = 0; i < children.length; i++){
      let id = children[i].getAttribute('id');
      let innerText = document.getElementById(id).innerText
      
      if (innerText.includes('cooking')){
        innerText = innerText.slice(0, 27);
      } else if (innerText.includes('yardwork')){
        innerText = innerText.slice(0, 28);
      };
      if (!buttonNames.includes(innerText)){
        document.getElementById(id).style.display = 'none';
      }
    }

    // show check, hide flag
    document.getElementById('activitieswork-check').style.display = 'inline';
    document.getElementById('activitieswork-flag').style.display = 'none';
  } else {
    document.getElementById('preferences-daily-activities').style.display = 'inline';
    document.getElementById('daily-preferences-submit').style.display = 'block';
    document.getElementById('change-daily-activities').style.display = 'none';    
    document.getElementById('selected-daily-activities').style.display = 'none';    

    // hide check, show flag
    document.getElementById('activitieswork-check').style.display = 'none';
    document.getElementById('activitieswork-flag').style.display = 'inline';
  }
  document.getElementById('daily-selected-buttons').style.display = 'inline';
  document.getElementById('daily-preferences-submit').style.display = 'none';

}

function changeDailyActivities(){
  resetCount('DailySelectedCount');
  newArrayLocalStorage('DailySelectedArray');
  console.log(JSON.parse(localStorage.getItem('DailySelectedArray')))
  document.getElementById('preferences-daily-activities').style.display = 'inline';
  document.getElementById('daily-preferences-submit').style.display = 'none';
  document.getElementById('daily-selected-buttons').style.display = 'none';
  document.getElementById('change-daily-activities').style.display = 'none';
  document.getElementById('selected-daily-activities').style.display = 'none';    

  var parent = document.getElementById('preferences-daily-activities');
  var children = [].slice.call(parent.getElementsByTagName('button'), 0);
  for (var i = 0; i < children.length; i++){
    let id = children[i].getAttribute('id');
    document.getElementById(id).style.background = 'white';
    document.getElementById(id).style.color = 'black';
    document.getElementById(id).className = 'btn';
  }

  // hide check, show flag
  document.getElementById('activitieswork-check').style.display = 'none';
  document.getElementById('activitieswork-flag').style.display = 'inline';

  logEvent('clicked changeactivities')
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

function checkChange(checkbox, id){
  var checkbox = checkbox;
  var id = id;
  if (id == 'room-none'){
    document.getElementById('room-cane').checked = false;
    document.getElementById('room-walker').checked = false;
    document.getElementById('room-other').checked = false;
    document.getElementById('room-other-text').value = null;
    document.getElementById('room-other-text').style.display = 'none';
  } else if (id == 'room-cane' || id == 'room-walker' || id == 'room-other') {
    document.getElementById('room-none').checked = false;
  };
  if (id == 'room-other'){
    if (checkbox.checked == true){
      document.getElementById('room-other-text').style.display = 'inline';
    } else if (checkbox.checked == false){
      document.getElementById('room-other-text').value = null;
      document.getElementById('room-other-text').style.display = 'none';
    };
  };
  if (id == 'short-none'){
    document.getElementById('short-cane').checked = false;
    document.getElementById('short-walker').checked = false;
    document.getElementById('short-other').checked = false;
    document.getElementById('short-other-text').value = null;
    document.getElementById('short-other-text').style.display = 'none';
  } else if (id == 'short-cane' || id == 'short-walker' || id == 'short-other'){
    document.getElementById('short-none').checked = false;
  };
  if (id == 'short-other'){
    if (checkbox.checked == true){
      document.getElementById('short-other-text').style.display = 'inline';
    } else if (checkbox.checked == false){
      document.getElementById('short-other-text').value = null;
      document.getElementById('short-other-text').style.display = 'none';
    };
  };
  if (id == 'long-none'){
    document.getElementById('long-cane').checked = false;
    document.getElementById('long-walker').checked = false;
    document.getElementById('long-other').checked = false;
    document.getElementById('long-other-text').value = null;
    document.getElementById('long-other-text').style.display = 'none';
  } else if (id == 'long-cane' || id == 'long-walker' || id == 'long-other'){
    document.getElementById('long-none').checked = false;
  };
  if (id == 'long-other'){
    if (checkbox.checked == true){
      document.getElementById('long-other-text').style.display = 'inline';
    } else if (checkbox.checked == false){
      document.getElementById('long-other-text').value = null;
      document.getElementById('long-other-text').style.display = 'none';
    };
  };
  if (id == 'outside-none'){
    document.getElementById('outside-cane').checked = false;
    document.getElementById('outside-walker').checked = false;
    document.getElementById('outside-other').checked = false;
    document.getElementById('outside-other-text').value = null;
    document.getElementById('outside-other-text').style.display = 'none';
  } else if (id == 'outside-cane' || id == 'outside-walker' || id == 'outside-other'){
    document.getElementById('outside-none').checked = false;
  };
  if (id == 'outside-other'){
    if (checkbox.checked == true){
      document.getElementById('outside-other-text').style.display = 'inline';
    } else if (checkbox.checked == false){
      document.getElementById('outside-other-text').value = null;
      document.getElementById('outside-other-text').style.display = 'none';
    };
  };

  var parentRoom = document.getElementById('aid-in-room');
  var childrenRoom = [].slice.call(parentRoom.getElementsByTagName('input'), 0);
  var nRoom = 0
  for (var i = 0; i < childrenRoom.length; i++){
    let idRoom = childrenRoom[i].getAttribute('id');
    let idRoomChecked = '#' + idRoom + ':checked';
    let n = document.querySelector(idRoomChecked);
    if (n !== null){
      nRoom += 1;
    }
  }


  var parentShort = document.getElementById('aid-short-hall');
  var childrenShort = [].slice.call(parentShort.getElementsByTagName('input'), 0);
  var nShort = 0
  for (var i = 0; i < childrenShort.length; i++){
    let idShort = childrenShort[i].getAttribute('id');
    let idShortChecked = '#' + idShort + ':checked';
    let n = document.querySelector(idShortChecked);
    if (n !== null){
      nShort += 1;
    }
  }

  var parentLong = document.getElementById('aid-long-hall');
  var childrenLong = [].slice.call(parentLong.getElementsByTagName('input'), 0);
  var nLong = 0
  for (var i = 0; i < childrenLong.length; i++){
    let idLong = childrenLong[i].getAttribute('id');
    let idLongChecked = '#' + idLong + ':checked';
    let n = document.querySelector(idLongChecked);
    if (n !== null){
      nLong += 1;
    }
  }
  
  var parentOutside = document.getElementById('aid-outside');
  var childrenOutside = [].slice.call(parentOutside.getElementsByTagName('input'), 0);
  var nOutside = 0
  for (var i = 0; i < childrenOutside.length; i++){
    let idOutside = childrenOutside[i].getAttribute('id');
    let idOutsideChecked = '#' + idOutside + ':checked';
    let n = document.querySelector(idOutsideChecked);
    if (n !== null){
      nOutside += 1;
    }
  }

  if (nRoom !== 0 && nShort !== 0 && nLong !== 0 && nOutside !== 0){
    document.getElementById('walking-aid-submit').style.display = 'block';
  } else {
    document.getElementById('walking-aid-submit').style.display = 'none';
  }
}

function submitWalkingAid(){
  newArrayLocalStorage('walkingAidArray');
  var retrievedData = localStorage.getItem('walkingAidArray');
  var array = JSON.parse(retrievedData);
  var otherTextEmpty = false; 

  var parentRoom = document.getElementById('aid-in-room');
  var childrenRoom = [].slice.call(parentRoom.getElementsByTagName('input'), 0);
  for (var i = 0; i < childrenRoom.length; i++){
    let idRoom = childrenRoom[i].getAttribute('id');
    let idRoomChecked = '#' + idRoom + ':checked';
    let n = document.querySelector(idRoomChecked);
    if (n !== null){
      if (idRoom == 'room-other'){
        let otherText = document.getElementById('room-other-text').value;
        if (otherText == ''){
          otherTextEmpty = true;
        }
        array.push('room-other: ' + otherText);
      } else {
        array.push(idRoom)
      }      
    }
  }

  var parentShort = document.getElementById('aid-short-hall');
  var childrenShort = [].slice.call(parentShort.getElementsByTagName('input'), 0);
  for (var i = 0; i < childrenShort.length; i++){
    let idShort = childrenShort[i].getAttribute('id');
    let idShortChecked = '#' + idShort + ':checked';
    let n = document.querySelector(idShortChecked);
    if (n !== null){
      if (idShort == 'short-other'){
        let otherText = document.getElementById('short-other-text').value;
        if (otherText == ''){
          otherTextEmpty = true;
        }
        array.push('short-other: ' + otherText);
      } else {
        array.push(idShort)
      }      
    }
  }  

  var parentLong = document.getElementById('aid-long-hall');
  var childrenLong = [].slice.call(parentLong.getElementsByTagName('input'), 0);
  for (var i = 0; i < childrenLong.length; i++){
    let idLong = childrenLong[i].getAttribute('id');
    let idLongChecked = '#' + idLong + ':checked';
    let n = document.querySelector(idLongChecked);
    if (n !== null){
      if (idLong == 'long-other'){
        let otherText = document.getElementById('long-other-text').value;
        if (otherText == ''){
          otherTextEmpty = true;
        }
        array.push('long-other: ' + otherText);
      } else {
        array.push(idLong)
      }      
    }
  }  

  var parentOutside = document.getElementById('aid-outside');
  var childrenOutside = [].slice.call(parentOutside.getElementsByTagName('input'), 0);
  for (var i = 0; i < childrenOutside.length; i++){
    let idOutside = childrenOutside[i].getAttribute('id');
    let idOutsideChecked = '#' + idOutside + ':checked';
    let n = document.querySelector(idOutsideChecked);
    if (n !== null){
      if (idOutside == 'outside-other'){
        let otherText = document.getElementById('outside-other-text').value;
        if (otherText == ''){
          otherTextEmpty = true;
        }
        array.push('outside-other: ' + otherText);
      } else {
        array.push(idOutside)
      }      
    }
  }  

  if (otherTextEmpty == true){
    alert("Please enter the type of assistive device in the text field next to 'Other'")
  } else {
    localStorage.setItem('walkingAidArray', JSON.stringify(array));

    var roomStatement = '';
    var shortStatement = '';
    var longStatement = '';
    var outsideStatement = '';

    for (var i = 0; i < array.length; i++){
      if (array[i].slice(0, 4) == 'room'){
        if (array[i].slice(5, 11) == 'other'){
          roomStatement = roomStatement + ' ' + array[i].slice(12, array[i].length) + ';'
        } else if (array[i].slice(5, 9) == 'none'){
          roomStatement = roomStatement + ' no assistive device;'
        } else {
          roomStatement = roomStatement + ' ' + array[i].slice(5, array[i].length) + ';'
        }      
      }
    }

    for (var i = 0; i < array.length; i++){
      if (array[i].slice(0, 5) == 'short'){
        if (array[i].slice(6, 12) == 'other'){
          shortStatement = shortStatement + ' ' + array[i].slice(13, array[i].length) + ';'
        } else if (array[i].slice(6, 10) == 'none'){
          shortStatement = shortStatement + ' no assistive device;'
        } else {
          shortStatement = shortStatement + ' ' + array[i].slice(6, array[i].length) + ';'
        }      
      }
    }

    for (var i = 0; i < array.length; i++){
      if (array[i].slice(0, 4) == 'long'){
        if (array[i].slice(5, 11) == 'other'){
          longStatement = longStatement + ' ' + array[i].slice(12, array[i].length) + ';'
        } else if (array[i].slice(5, 9) == 'none'){
          longStatement = longStatement + ' no assistive device;'
        } else {
          longStatement = longStatement + ' ' + array[i].slice(5, array[i].length) + ';'
        }      
      }
    }

    for (var i = 0; i < array.length; i++){
      if (array[i].slice(0, 7) == 'outside'){
        if (array[i].slice(8, 14) == 'other'){
          outsideStatement = outsideStatement + ' ' + array[i].slice(15, array[i].length) + ';'
        } else if (array[i].slice(8, 12) == 'none'){
          outsideStatement = outsideStatement + ' no assistive device;'
        } else {
          outsideStatement = outsideStatement + ' ' + array[i].slice(8, array[i].length) + ';'
        }      
      }
    }

    document.getElementById('walking-aid-answer').style.display = 'block';
    document.getElementById('room-answer').innerHTML = roomStatement;
    document.getElementById('short-answer').innerHTML = shortStatement;
    document.getElementById('long-answer').innerHTML = longStatement;
    document.getElementById('outside-answer').innerHTML = outsideStatement;
    localStorage.setItem('roomStatement', roomStatement);
    localStorage.setItem('shortStatement', shortStatement);
    localStorage.setItem('longStatement', longStatement);
    localStorage.setItem('outsideStatement', outsideStatement);

    document.getElementById('walking-aid-question').style.display = 'none';
  }

  document.getElementById('walkingaid-check').style.display = 'inline';
  document.getElementById('walkingaid-flag').style.display = 'none';
}

function resetWalkingAid(){
  localStorage.removeItem('roomStatement');
  localStorage.removeItem('shortStatement');
  localStorage.removeItem('longStatement');
  localStorage.removeItem('outsideStatement');

  document.getElementById('walking-aid-answer').style.display = 'none';
  document.getElementById('walking-aid-question').style.display = 'block';

  document.getElementById('walkingaid-check').style.display = 'none';
  document.getElementById('walkingaid-flag').style.display = 'inline';
}

// onload
function checkWalkingAidAnswers(){
  var roomStatement = localStorage.getItem('roomStatement');
  if (roomStatement == null || roomStatement == 'null'){
    document.getElementById('walking-aid-answer').style.display = 'none';
    document.getElementById('walking-aid-question').style.display = 'block';
    document.getElementById('walkingaid-check').style.display = 'none';
    document.getElementById('walkingaid-flag').style.display = 'inline';
  } else {
    document.getElementById('walking-aid-answer').style.display = 'block';
    document.getElementById('walking-aid-question').style.display = 'none';
    document.getElementById('room-answer').innerHTML = localStorage.getItem('roomStatement');
    document.getElementById('short-answer').innerHTML = localStorage.getItem('shortStatement');
    document.getElementById('long-answer').innerHTML = localStorage.getItem('longStatement');
    document.getElementById('outside-answer').innerHTML = localStorage.getItem('outsideStatement');
    document.getElementById('walkingaid-check').style.display = 'inline';
    document.getElementById('walkingaid-flag').style.display = 'none';
  }
}

function changeSelection(selection, id){
  var selection = selection;
  var id = id;
  document.getElementById(id).innerHTML = selection;
  showSubmit();
  ontouchend = "touchEndFunction(id)";
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
  if (!array.includes(activityText)){  
    array.push(activityText);  
  } else {
    alert('This activity is already in the list.')
  }
  // update local storage
  localStorage.setItem('activitySelections', JSON.stringify(array));
  createPAndXButtonFromArray('activitySelections', 'activitySelectionsCount', 'activity-selected-list');
  if (localStorage.hasOwnProperty('fallCount') == false){localStorage.setItem('fallCount', 0)};
  var countTot = parseInt(localStorage.getItem('fallCount'));
  if (document.getElementById('num-falls')){
    document.getElementById('num-falls').innerHTML = countTot;
    FlagCountCheck();
  }
  
  // show check, hide flag
  document.getElementById('activitiesexercise-check').style.display = 'inline';
  document.getElementById('activitiesexercise-flag').style.display = 'none';

  logEvent('clicked activityPref')
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

function activityPrefFlagCheck(){
  var array = JSON.parse(localStorage.getItem('activitySelections'));
  if (array.length == 0){
    // hide check, show flag
    document.getElementById('activitiesexercise-check').style.display = 'none';
    document.getElementById('activitiesexercise-flag').style.display = 'inline';
  } else {
    // show check, hide flag
    document.getElementById('activitiesexercise-check').style.display = 'inline';
    document.getElementById('activitiesexercise-flag').style.display = 'none';
  }
}

function moodPrefFlagCheck(){
  var moodCountPref = parseInt(localStorage.getItem('moodCountPref'));
  if (moodCountPref == 8){
    // show check, hide flag
    document.getElementById('mood-check').style.display = 'inline';
    document.getElementById('mood-flag').style.display = 'none';
  } else {
    // hide check, show flag
    document.getElementById('mood-check').style.display = 'none';
    document.getElementById('mood-flag').style.display = 'inline';
  }
}

// onload
function checkProfSubmitted(){
  var ProfSubmitted = localStorage.getItem('ProfSubmitted');
  if (ProfSubmitted == 'True'){
    // show answers for all
    document.getElementById('age-answer-div').style.display = 'block';
    document.getElementById('living-alone-div').style.display = 'block';
    document.getElementById('age-answer').innerHTML = localStorage.getItem('ageProfile');
    document.getElementById('living-alone-statement').innerHTML = localStorage.getItem('liveAloneStatement');

    // hide questions for all
    document.getElementById('age-questions').style.display = 'none';
    document.getElementById('live-alone-questions').style.display = 'none';

    // hide submit button
    document.getElementById('profile-submit').style.display = 'none';

    // show check, hide flag
    document.getElementById('profile-check').style.display = 'inline';
    document.getElementById('profile-flag').style.display = 'none';
  } else {
    var age = localStorage.getItem('ageProfile');
    if (age == null || age == 'null' || age == ''){
      // hide answer
      document.getElementById('age-answer-div').style.display = 'none';

      // show question
      document.getElementById('age-questions').style.display = 'block';
    } else {
      // show answer
      document.getElementById('age-answer-div').style.display = 'block';
      document.getElementById('age-answer').innerHTML = age;

      // hide question
      document.getElementById('age-questions').style.display = 'none';
    };
    var liveAloneStatement = localStorage.getItem('liveAloneStatement');
    if (liveAloneStatement == null || liveAloneStatement == 'null'){
      // hide answer
      document.getElementById('living-alone-div').style.display = 'none';

      // show question
      document.getElementById('live-alone-questions').style.display = 'block';

    } else {
      // show answer
      document.getElementById('living-alone-div').style.display = 'block';
      document.getElementById('living-alone-statement').innerHTML = liveAloneStatement;

      // hide question 
      document.getElementById('live-alone-questions').style.display = 'none';   
    }
    // hide check, show flag
    document.getElementById('profile-check').style.display = 'none';
    document.getElementById('profile-flag').style.display = 'inline';
  };
  document.getElementById('profile-submit').style.display = 'none';
}

function ProfSubmit(){
  if (document.getElementById('profile-age').value == ''){
    alert('You must enter an age before submitting')
  } else {

  localStorage.setItem('ProfSubmitted', 'True');

  if (localStorage.getItem('ageProfile') !== '' && localStorage.getItem('ageProfile') !== null && localStorage.getItem('ageProfile') !== 'null'){
    var age = localStorage.getItem('ageProfile');
  } else {
    var age = document.getElementById('profile-age').value;
    localStorage.setItem('ageProfile', age);
    document.getElementById('age-answer').innerHTML = localStorage.getItem('ageProfile');
  };

  var liveAlone = localStorage.getItem('liveAlone');
  if (liveAlone == 'Yes'){
    localStorage.setItem('liveAloneStatement', 'Living alone');
  } else if (liveAlone == 'Sometimes'){
    localStorage.setItem('liveAloneStatement', 'Sometimes living alone');
  } else if (liveAlone == 'No'){
    localStorage.setItem('liveAloneStatement', 'Not living alone');
  };
  document.getElementById('living-alone-statement').innerHTML = localStorage.getItem('liveAloneStatement');

  // show all answers
  document.getElementById('age-answer-div').style.display = 'block';
  document.getElementById('living-alone-div').style.display = 'block';

  // hide all questions
  document.getElementById('age-questions').style.display = 'none';
  document.getElementById('live-alone-questions').style.display = 'none';

  // hide submit button
  document.getElementById('profile-submit').style.display = 'none';

  // show check, hide flag
  document.getElementById('profile-check').style.display = 'inline';
  document.getElementById('profile-flag').style.display = 'none';
}
}

function updateAge(){
  localStorage.setItem('ProfSubmitted', 'False');
  var age = document.getElementById('profile-age').value;
  var liveAloneStatement = localStorage.getItem('liveAloneStatement');

  if (age !== null && age !== 'null' && liveAloneStatement !== null && liveAloneStatement !== 'null'){
    document.getElementById('profile-submit').style.display = 'block';
  };
}

function liveAlone(value){
  var value = value;
  var age = document.getElementById('profile-age').value;
  localStorage.setItem('liveAlone', value);
  var liveAlone = localStorage.getItem('liveAlone');
  if (age !== null && age !== 'null' && liveAlone !== null && liveAlone !== 'null'){
    document.getElementById('profile-submit').style.display = 'block';
  };
}

function resetAge(){
  localStorage.setItem('ProfSubmitted', 'False');
  document.getElementById('profile-age').value = null;
  localStorage.setItem('ageProfile', null);
  document.getElementById('age-questions').style.display = 'block';
  document.getElementById('age-answer-div').style.display = 'none';
  // hide check, show flag
  document.getElementById('profile-check').style.display = 'none';
  document.getElementById('profile-flag').style.display = 'inline';
}

function resetLiveAlone(){
  localStorage.setItem('ProfSubmitted', 'False');
  localStorage.setItem('liveAlone', null);
  localStorage.setItem('liveAloneStatement', null);
  buttonsInDiv(undefined, 'live-alone-questions', undefined, undefined);
  document.getElementById('living-alone-div').style.display = 'none';
  document.getElementById('live-alone-questions').style.display = 'block';
  // hide check, show flag
  document.getElementById('profile-check').style.display = 'none';
  document.getElementById('profile-flag').style.display = 'inline';
}

// global variables
var sleepqualitypref = null;

function sleepQualityPref(x) {
  var n = x;
  sleepqualitypref = n; // changes the global variable of sleep quality based on the most recently clicked sleep quality button
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
}

// onload
// check storage
// if empty: show questions, hide answers, hide submit
// if full: hide questions, show answers, fill answers, hide submit
function sleepPrefStorage(){
  var sleepQualityPref = localStorage.getItem('sleepqualitypref');
  var weeknightHour = localStorage.getItem('weeknightHour');
  var weeknightMin = localStorage.getItem('weeknightMin');
  var weeknightAMPM = localStorage.getItem('weeknightAMPM');
  var weekendnightHour = localStorage.getItem('weekendnightHour');
  var weekendnightMin = localStorage.getItem('weekendnightMin');
  var weekendnightAMPM = localStorage.getItem('weekendnightAMPM');
  var weekdayHour = localStorage.getItem('weekdayHour');
  var weekdayMin = localStorage.getItem('weekdayMin');
  var weekdayAMPM = localStorage.getItem('weekdayAMPM');
  var weekenddayHour = localStorage.getItem('weekenddayHour');
  var weekenddayMin = localStorage.getItem('weekenddayMin');
  var weekenddayAMPM = localStorage.getItem('weekenddayAMPM');
  var napsFrequency = localStorage.getItem('napsFrequency');
  var sleepStorageArray = [sleepQualityPref, weeknightHour,
  weeknightMin, weeknightAMPM, weekendnightHour, weekendnightMin,
  weekendnightAMPM, weekdayHour, weekdayMin, weekdayAMPM,
  weekenddayHour, weekenddayMin, weekenddayAMPM, napsFrequency];

  var storageCount = 0;
  for (var i = 0; i < sleepStorageArray.length; i++){
    let storagecheck = sleepStorageArray[i];
    if (storagecheck !== null && storagecheck !== 'null' && storagecheck !== '' && storagecheck !== undefined){
      storageCount += 1;
    };
  }
  if (storageCount == sleepStorageArray.length){
    document.getElementById('sleep-answers').style.display = 'block';
    document.getElementById('sleep-quality-answer').innerHTML = sleepQualityPref;
    document.getElementById('sleep-weeknight-answer').innerHTML = weeknightHour + ':' + weeknightMin + ' ' + weeknightAMPM;
    document.getElementById('sleep-weekendnight-answer').innerHTML = weekendnightHour + ':' + weekendnightMin + ' ' + weekendnightAMPM;
    document.getElementById('sleep-weekday-answer').innerHTML = weekdayHour + ':' + weekdayMin + ' ' + weekdayAMPM;
    document.getElementById('sleep-weekendday-answer').innerHTML = weekenddayHour + ':' + weekenddayMin + ' ' + weekenddayAMPM;
    document.getElementById('sleep-naps-answer').innerHTML = napsFrequency;

    document.getElementById('sleep-questions').style.display = 'none';
    document.getElementById('sleep-submit').style.display = 'none';

    // show check, hide flag
    document.getElementById('sleep-check').style.display = 'inline';
    document.getElementById('sleep-flag').style.display = 'none';
  } else {
    // hide check, show flag
    document.getElementById('sleep-check').style.display = 'none';
    document.getElementById('sleep-flag').style.display = 'inline';
  }
}

// on change 
// check values
// if full: show submit
// else: hide submit
function sleepCheckShowSubmit(){
  var sleepQualityPref = sleepqualitypref;
  var weeknightHour = document.getElementById('weeknight-hour').innerText;
  var weeknightMin = document.getElementById('weeknight-minutes').innerText;
  var weeknightAMPM = document.getElementById('weeknight-ampm').innerText;
  var weekendnightHour = document.getElementById('weekendnight-hour').innerText;
  var weekendnightMin = document.getElementById('weekendnight-minutes').innerText;
  var weekendnightAMPM = document.getElementById('weekendnight-ampm').innerText;
  var weekdayHour = document.getElementById('weekday-hour').innerText;
  var weekdayMin = document.getElementById('weekday-minutes').innerText;
  var weekdayAMPM = document.getElementById('weekday-ampm').innerText;
  var weekenddayHour = document.getElementById('weekendday-hour').innerText;
  var weekenddayMin = document.getElementById('weekendday-minutes').innerText;
  var weekenddayAMPM = document.getElementById('weekendday-ampm').innerText;
  var napsFrequency = document.getElementById('naps').innerText;
  var sleepStorageArray = [sleepQualityPref, weeknightHour,
  weeknightMin, weeknightAMPM, weekendnightHour, weekendnightMin,
  weekendnightAMPM, weekdayHour, weekdayMin, weekdayAMPM,
  weekenddayHour, weekenddayMin, weekenddayAMPM, napsFrequency];

  var storageCount = 0;
  for (var i = 0; i < sleepStorageArray.length; i++){
    let storagecheck = sleepStorageArray[i];
    if (storagecheck !== null && storagecheck !== 'null' && storagecheck !== '' && storagecheck !== undefined
    && storagecheck !== 'Hour ' && storagecheck !==
    'Minutes ' && storagecheck !== 
    'AM/PM'  && storagecheck !== 
    'Duration ' && storagecheck !== 'How often '){
      storageCount += 1;
    };
  }
  
  if (storageCount == sleepStorageArray.length){
    document.getElementById('sleep-submit').style.display = 'block';
  } else {
    document.getElementById('sleep-submit').style.display = 'none';
  }
  
}

// on submit
// get values from buttons and dropdowns
// update local storage
// fill p-tags with values from local storage
// hide questions, hide submit, show answers
function sleepPrefSubmit(){
  var sleepQualityPref = sleepqualitypref;
  var weeknightHour = document.getElementById('weeknight-hour').innerHTML;
  var weeknightMin = document.getElementById('weeknight-minutes').innerHTML;
  var weeknightAMPM = document.getElementById('weeknight-ampm').innerHTML;
  var weekendnightHour = document.getElementById('weekendnight-hour').innerHTML;
  var weekendnightMin = document.getElementById('weekendnight-minutes').innerHTML;
  var weekendnightAMPM = document.getElementById('weekendnight-ampm').innerHTML;
  var weekdayHour = document.getElementById('weekday-hour').innerHTML;
  var weekdayMin = document.getElementById('weekday-minutes').innerHTML;
  var weekdayAMPM = document.getElementById('weekday-ampm').innerHTML;
  var weekenddayHour = document.getElementById('weekendday-hour').innerHTML;
  var weekenddayMin = document.getElementById('weekendday-minutes').innerHTML;
  var weekenddayAMPM = document.getElementById('weekendday-ampm').innerHTML;
  var napsFrequency = document.getElementById('naps').innerHTML;
  
  localStorage.setItem('sleepqualitypref', sleepQualityPref);
  localStorage.setItem('weeknightHour', weeknightHour);
  localStorage.setItem('weeknightMin', weeknightMin);
  localStorage.setItem('weeknightAMPM', weeknightAMPM);
  localStorage.setItem('weekendnightHour', weekendnightHour);
  localStorage.setItem('weekendnightMin', weekendnightMin);
  localStorage.setItem('weekendnightAMPM', weekendnightAMPM);
  localStorage.setItem('weekdayHour', weekdayHour);
  localStorage.setItem('weekdayMin', weekdayMin);
  localStorage.setItem('weekdayAMPM', weekdayAMPM);
  localStorage.setItem('weekenddayHour', weekenddayHour);
  localStorage.setItem('weekenddayMin', weekenddayMin);
  localStorage.setItem('weekenddayAMPM', weekenddayAMPM);
  localStorage.setItem('napsFrequency', napsFrequency);
  
  localStorage.setItem('sleepqualitypref', sleepqualitypref)

  document.getElementById('sleep-answers').style.display = 'block';
  document.getElementById('sleep-quality-answer').innerHTML = sleepQualityPref;
  document.getElementById('sleep-weeknight-answer').innerHTML = weeknightHour + ':' + weeknightMin + ' ' + weeknightAMPM;
  document.getElementById('sleep-weekendnight-answer').innerHTML = weekendnightHour + ':' + weekendnightMin + ' ' + weekendnightAMPM;
  document.getElementById('sleep-weekday-answer').innerHTML = weekdayHour + ':' + weekdayMin + ' ' + weekdayAMPM;
  document.getElementById('sleep-weekendday-answer').innerHTML = weekenddayHour + ':' + weekenddayMin + ' ' + weekenddayAMPM;
  document.getElementById('sleep-naps-answer').innerHTML = napsFrequency;

  document.getElementById('sleep-questions').style.display = 'none';
  document.getElementById('sleep-submit').style.display = 'none';

  // show check, hide flag
  document.getElementById('sleep-check').style.display = 'inline';
  document.getElementById('sleep-flag').style.display = 'none';
}

// on reset entries
// reset values in buttons and dropdowns
// clear local storage
// show questions, hide submit, hide answers
function resetSleepPref(){
  sleepqualitypref = null;
  localStorage.setItem('sleepqualitypref', null);
  localStorage.setItem('weeknightHour', null);
  localStorage.setItem('weeknightMin', null);
  localStorage.setItem('weeknightAMPM', null);
  localStorage.setItem('weekendnightHour', null);
  localStorage.setItem('weekendnightMin', null);
  localStorage.setItem('weekendnightAMPM', null);
  localStorage.setItem('weekdayHour', null);
  localStorage.setItem('weekdayMin', null);
  localStorage.setItem('weekdayAMPM', null);
  localStorage.setItem('weekenddayHour', null);
  localStorage.setItem('weekenddayMin', null);
  localStorage.setItem('weekenddayAMPM', null);
  localStorage.setItem('napsFrequency', null);

  document.getElementById('sleep-answers').style.display = 'none';
  document.getElementById('sleep-questions').style.display = 'block';
  document.getElementById('sleep-submit').style.display = 'none';

  // hide check, show flag
  document.getElementById('sleep-check').style.display = 'none';
  document.getElementById('sleep-flag').style.display = 'block';

  window.location.reload();
}

//onload
// check if fall answers are filled in local storage
// if filled, show answers, set p-tags to local storage, hide questions, hide submit
// if empty, hide answers, show  questions, hide submit button
function checkFallsPref(){

  if (localStorage.hasOwnProperty('fallAfraid') == true && localStorage.hasOwnProperty('fallBalance') == true && localStorage.hasOwnProperty('fallPast')){
    var fallAfraid = localStorage.getItem('fallAfraid');
    var fallBalance = localStorage.getItem('fallBalance');
    var fallPast = localStorage.getItem('fallPast');
    document.getElementById('fall-answers').style.display = 'block';
    document.getElementById('number-fall-afraid').innerHTML = fallAfraid;
    document.getElementById('number-fall-balance').innerHTML = fallBalance;
    document.getElementById('number-fall-past').innerHTML = fallPast;
    document.getElementById('fall-questions').style.display = 'none';
    document.getElementById('fall-submit').style.display = 'none';
    // show check, hide flag
    document.getElementById('falls-check').style.display = 'inline';
    document.getElementById('falls-flag').style.display = 'none';
  } else {
    document.getElementById('fall-answers').style.display = 'none';
    document.getElementById('fall-questions').style.display = 'block';
    document.getElementById('fall-submit').style.display = 'none';
    // hide check, show flag
    document.getElementById('falls-check').style.display = 'none';
    document.getElementById('falls-flag').style.display = 'inline';
  }
}

// on x button
// delete all in local storage
// hide answers, show questions, hide submit button
// reload page
function resetFallsPref(){
  localStorage.setItem('fallAfraid', '');
  localStorage.setItem('fallBalance', '');
  localStorage.setItem('fallPast', '');
  document.getElementById('fall-answers').style.display = 'none';
  document.getElementById('fall-questions').style.display = 'block';
  document.getElementById('fall-submit').style.display = 'none';
  window.location.reload();
  // hide check, show flag
  document.getElementById('falls-check').style.display = 'none';
  document.getElementById('falls-flag').style.display = 'inline';
}

// on change
// check if all fields entered
// if all entered, show submit button
// if not, hide submit button
function checkFallsPrefEntries(){
  var fallAfraid = document.getElementById('dropdown-fall-afraid').innerText;
  var fallBalance = document.getElementById('dropdown-fall-balance').innerText;
  var fallPast = document.getElementById('input-fall-past').value;
  if (fallAfraid !== 'Select a number ' && fallBalance !== 'Select a number ' && fallPast){
    document.getElementById('fall-submit').style.display = 'block';
  } else {
    document.getElementById('fall-submit').style.display = 'none';
  }
}

// on submit
// update local storage
// show answers, set p-tags to local storage, hide questions, hide submit
function fallPrefSubmit(){
  var fallAfraid = document.getElementById('dropdown-fall-afraid').innerText;
  var fallBalance = document.getElementById('dropdown-fall-balance').innerText;
  var fallPast = document.getElementById('input-fall-past').value;
  localStorage.setItem('fallAfraid', fallAfraid);
  localStorage.setItem('fallBalance', fallBalance);
  localStorage.setItem('fallPast', fallPast);
  document.getElementById('fall-answers').style.display = 'block';
  document.getElementById('number-fall-afraid').innerHTML = fallAfraid;
  document.getElementById('number-fall-balance').innerHTML = fallBalance;
  document.getElementById('number-fall-past').innerHTML = fallPast;
  document.getElementById('fall-questions').style.display = 'none';
  document.getElementById('fall-submit').style.display = 'none';
  // show check, hide flag
  document.getElementById('falls-check').style.display = 'inline';
  document.getElementById('falls-flag').style.display = 'none';
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
    localStorage.setItem('sleepComplete', 'False');
    checkNomoreSleep();
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
      logEvent('removed ' + p.innerHTML + ' with ' + button.id);
      decreaseCountStorage(countName);
      if (localStorage.hasOwnProperty('fallCount') == false){localStorage.setItem('fallCount', 0)};
      var countTot = parseInt(localStorage.getItem('fallCount'));
      if (document.getElementById('num-falls')){document.getElementById('num-falls').innerHTML = countTot;}
      localStorage.setItem('fallsComplete', 'False');
      if (document.getElementById('num-falls')){
        checkNoMoreFalls();
        FlagCountCheck();
        if (newarr.length == 0){
          document.getElementById('fall-statement').style.display = 'block';
          document.getElementById('nofall-image').style.display = 'inline';
        }
        createPAndXButtonFromArray('FallEntryArray', 'fallCount', 'fall-entries');
      };
      if (document.getElementById('activitiesexercise-flag')){
        activityPrefFlagCheck();
      } 
     
      window.location.reload()
      
    }
    if (!document.getElementById(p.id)){element.appendChild(p);};
    if (!document.getElementById(button.id)){element.appendChild(button);};
  }
}

// - - - - -
// BUTTONS
// - - - - -
function buttonsInDiv(buttonID, divID, background, colour){
  var buttonID = buttonID;
  var divID = divID;
  var background = background;
  var colour = colour;
  if (background == undefined){background = '#0335fc'};
  if (colour == undefined){colour = 'white'};
  var parent = document.getElementById(divID);
  var children = [].slice.call(parent.getElementsByTagName('button'), 0);
  for (var i = 0; i < children.length; i++){
    let id = children[i].getAttribute('id');
    if (buttonID !== id){
      document.getElementById(id).style.background = 'white';
      document.getElementById(id).style.color = 'black';
    } else {
      document.getElementById(buttonID).style.background = background;
      document.getElementById(buttonID).style.color = colour;
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

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// - - - - - 
// DASHBOARD
// - - - - -
function FlagCountCheck(){
  if (localStorage.hasOwnProperty('sleepCount') == false){
    var sleepCount = 0;
    localStorage.setItem('sleepComplete', 'False');
  } else {
    var sleepCount = parseInt(localStorage.getItem('sleepCount'));
  };
  var sleepComplete = localStorage.getItem('sleepComplete');

  if (localStorage.hasOwnProperty('activityCountDaily') == false){
    if (localStorage.hasOwnProperty('activityCountPreferences') == false){
      var activityCount = 0; // both false
    } else {
      var activityCount = parseInt(localStorage.getItem('activityCountPreferences'));
    }
  } else { // activityCountDaily is true
    if (localStorage.hasOwnProperty('activityCountPreferences') == false){
      var activityCount = parseInt(localStorage.getItem('activityCountDaily'));
    } else {
      var activityCount = parseInt(localStorage.getItem('activityCountDaily')) + parseInt(localStorage.getItem('activityCountPreferences'));
    }
  };

  var activityComplete = localStorage.getItem('activityComplete');
  if (localStorage.hasOwnProperty('moodCount') == false){
    var moodCount = 0;
  } else {
    var moodCount = parseInt(localStorage.getItem('moodCount'));
  };

  if (localStorage.hasOwnProperty('fallCount') == false){
    var fallCount = 0;
  } else {
    var fallCount = parseInt(localStorage.getItem('fallCount'));
  };
  var fallsComplete = localStorage.getItem('fallsComplete');

  if (sleepCount == 0){
    document.getElementById('num-sleep').style.display = 'none';
    document.getElementById('sleep-check').style.display = 'none';
    document.getElementById('sleep-flag').style.display = 'inline';
  } else if (sleepComplete == 'False'){
    document.getElementById('num-sleep').style.display = 'inline';
    document.getElementById('sleep-check').style.display = 'none';
    document.getElementById('sleep-flag').style.display = 'none';
  } else if (sleepComplete == 'True'){
    document.getElementById('num-sleep').style.display = 'none';
    document.getElementById('sleep-check').style.display = 'inline';
    document.getElementById('sleep-flag').style.display = 'none';
  } else{
    document.getElementById('num-sleep').style.display = 'none';
    document.getElementById('sleep-check').style.display = 'none';
    document.getElementById('sleep-flag').style.display = 'inline';
  };
  if (moodCount == 0){
    document.getElementById('num-mood').style.display = 'none';
    document.getElementById('mood-check').style.display = 'none';
    document.getElementById('mood-flag').style.display = 'inline';
  } else if (moodCount == 8){
    document.getElementById('num-mood').style.display = 'none';
    document.getElementById('mood-check').style.display = 'inline';
    document.getElementById('mood-flag').style.display = 'none';
  } else if (moodCount > 0 && moodCount < 8){
    document.getElementById('num-mood').style.display = 'inline';
    document.getElementById('mood-check').style.display = 'none';
    document.getElementById('mood-flag').style.display = 'none';
  } else {
    document.getElementById('num-mood').style.display = 'none';
    document.getElementById('mood-check').style.display = 'none';
    document.getElementById('mood-flag').style.display = 'inline';
  };
  // if complete: show the checkmark
  if (fallsComplete == 'True'){
    document.getElementById('num-falls').style.display = 'none';
    document.getElementById('falls-check').style.display = 'inline';
    document.getElementById('falls-flag').style.display = 'none';
  } else if (fallsComplete == 'False'){
    if (fallCount == 0){
      document.getElementById('num-falls').style.display = 'none';
      document.getElementById('falls-check').style.display = 'none';
      document.getElementById('falls-flag').style.display = 'inline';
    } else {
      document.getElementById('num-falls').style.display = 'inline';
      document.getElementById('falls-check').style.display = 'none';
      document.getElementById('falls-flag').style.display = 'none';
    }
  } else {
    document.getElementById('num-falls').style.display = 'none';
    document.getElementById('falls-check').style.display = 'none';
    document.getElementById('falls-flag').style.display = 'inline';
  };
  if (activityCount == 0){
    document.getElementById('num-activity').style.display = 'none';
    document.getElementById('activity-check').style.display = 'none';
    document.getElementById('activity-flag').style.display = 'inline';
  } else if (activityComplete == 'False'){
    document.getElementById('num-activity').style.display = 'inline';
    document.getElementById('activity-check').style.display = 'none';
    document.getElementById('activity-flag').style.display = 'none';
  } else if (activityComplete == 'True'){
    document.getElementById('num-activity').style.display = 'none';
    document.getElementById('activity-check').style.display = 'inline';
    document.getElementById('activity-flag').style.display = 'none';
  } else {
    document.getElementById('num-activity').style.display = 'none';
    document.getElementById('activity-check').style.display = 'none';
    document.getElementById('activity-flag').style.display = 'inline';
  };
} 

// CHECK IF PREFERENCES ARE COMPLETE
function checkPrefComplete(page){
  var page = page;
  var walkingAid = localStorage.getItem('roomStatement');
  var walkingAidComplete = false;
  if (walkingAid !== null && walkingAid !== 'null'){
    walkingAidComplete = true;
  };
  var sleep = localStorage.getItem('napsFrequency');
  var sleepComplete = false;
  if (sleep !== null && sleep !== 'null' && sleep !== undefined){
    sleepComplete = true;
  };
  var actWork = localStorage.getItem('DailySelectedArray');
  var actWorkComplete = false;
  if (actWork !== null && actWork !== 'null' && actWork !== undefined){
    var actWorkArray = JSON.parse(actWork);
    if (actWorkArray.length !== 0){
      actWorkComplete = true;
    }
  };  
  var actEx = localStorage.getItem('activitySelections');
  var actExComplete = false;
  if (actEx !== null && actEx !== 'null' && actEx !== undefined){
    var actExArray = JSON.parse(actEx);
    if (actExArray.length !== 0){
      actExComplete = true;
    };
  };
  var mood = localStorage.getItem('moodCountPref');
  var moodComplete = false;
  if (parseInt(mood) == 8){
    moodComplete = true;
  };
  var falls = localStorage.getItem('fallPast');
  var fallsComplete = false;
  if (falls !== null && falls !== 'null' && falls !== undefined){
    fallsComplete = true;
  };
  var profile = localStorage.getItem('ProfSubmitted');
  var profileComplete = false;
  if (profile == 'True'){
    profileComplete = true;
  };

  if (walkingAidComplete == true && sleepComplete == true && actWorkComplete == true &&
    actExComplete == true && moodComplete == true && fallsComplete == true && profileComplete == true){
      // preferences page is complete
      if (page == 'home'){
        document.getElementById('home-to-pref').style.display = 'none';
      } else {
      document.getElementById('pref-modal').style.display = 'none';
        };
      return true;
  } else {
      // preferences page is incomplete
      if (page == 'home'){
        document.getElementById('home-to-pref').style.display = 'block';
      } else {
        document.getElementById('pref-modal').style.display = 'block';
      }
      return false;
    };
}

// CHECK IF ALL PAGES ARE COMPLETE
function checkAllComplete(){
  var sleepComplete = localStorage.getItem('sleepComplete');
  var moodCount = localStorage.getItem('moodCount');
  var fallsComplete = localStorage.getItem('fallsComplete');
  var activityComplete = localStorage.getItem('activityComplete');
  var prefComplete = checkPrefComplete('home');
  if (localStorage.hasOwnProperty('study') == true && localStorage.hasOwnProperty('site') == true && localStorage.hasOwnProperty('name') == true){
    if (localStorage.getItem('study') !== 'null' && localStorage.getItem('study') !== null && localStorage.getItem('study') !== ''
    && localStorage.getItem('site') !== 'null' && localStorage.getItem('site') !== null && localStorage.getItem('site') !== ''
    && localStorage.getItem('name') !== 'null' && localStorage.getItem('name') !== null && localStorage.getItem('name') !== ''){
    var studySiteIDComplete = true;
  } else {
    var studySiteIDComplete = false;
  }
  } 

  if (sleepComplete == 'True' 
  && parseInt(moodCount) == 8 
  && fallsComplete == 'True'
  && activityComplete == 'True'
  && studySiteIDComplete == true
  && prefComplete == true
  ){
    document.getElementById('day-complete-submit').style.display = 'block';
    document.getElementById('day-incomplete').style.display = 'none';
  } else {
    document.getElementById('day-complete-submit').style.display = 'none';
    document.getElementById('day-incomplete').style.display = 'block';
  }
}

function submitAllPages(){

  if (window.confirm('Once you submit, you will not be able to change any of your answers for today. Please confirm that all of the information has been entered correctly before submitting.')){
    var study = localStorage.getItem('study');
    var site = localStorage.getItem('site');
    var subject = localStorage.getItem('name');
    if (localStorage.hasOwnProperty('naptimes') == false){localStorage.setItem('naptimes', JSON.stringify([null]))};
    if (localStorage.hasOwnProperty('napdurations') == false){localStorage.setItem('napdurations', JSON.stringify([null]))};    

    CLIENTwriteSleepPage(study=study, site=site, subject=subject, 
    quality=localStorage.getItem('quality'), 
    bedtime=localStorage.getItem('bedtime'), 
    waketime=localStorage.getItem('waketime'), 
    naptimes=JSON.parse(localStorage.getItem('naptimes')),
    napdurations=JSON.parse(localStorage.getItem('napdurations')),
    );
    console.log('Wrote Sleep Page to csv');

    CLIENTwriteActivityPage(study=study, site=site, subject=subject,
    activities=JSON.parse(localStorage.getItem('activities')),
    starttimes=JSON.parse(localStorage.getItem('starttimes')),
    durations=JSON.parse(localStorage.getItem('durations'))
    );
    console.log('Wrote Activity Page to csv');

    CLIENTwriteMoodPage(study=study, site=site, subject=subject,
    afraid=localStorage.getItem('afraid'),
    confused=localStorage.getItem('confused'),
    sad=localStorage.getItem('sad'),
    angry=localStorage.getItem('angry'),
    energetic=localStorage.getItem('energetic'),
    tired=localStorage.getItem('tired'),
    happy=localStorage.getItem('happy'),
    tense=localStorage.getItem('tense')
    );
    console.log('Wrote Mood Page to csv');

    newArrayLocalStorage('fallOrNearFallCSV');
    newArrayLocalStorage('fallTimeCSV');
    newArrayLocalStorage('fallLocationCSV');
    newArrayLocalStorage('fallLocationInsideCSV');
    newArrayLocalStorage('fallActivityCSV');
    newArrayLocalStorage('fallCauseCSV');
    newArrayLocalStorage('fallInjuredCSV');
    newArrayLocalStorage('fallMedicalCSV');
    newArrayLocalStorage('fallMoreDetailsCSV');
    newArrayLocalStorage('fallWalkingAidCSV');

    array = JSON.parse(localStorage.getItem('FallEntryArray'));
    for (var i = 0; i < array.length; i++){
      var str = array[i];
    var newFallOrNearFall = (str.split('<br> You indicated: <br> You ')[1]).split(' in the ')[0];
    if (newFallOrNearFall == 'undefined'){
      var newFallOrNearFall = 'N/A'
        var newFallTime = 'N/A';
        var newFallLocation = 'N/A';
        var newFallLocationInside = 'N/A';
        var newFallActivity = 'N/A';
        var newFallCause = 'N/A';
        var newFallInjured = 'N/A';
        var newFallMedical = 'N/A';
        var newFallMoreDetails = 'N/A';
        var newFallWalkingAid = 'N/A';
    } else {
        var newFallTime = (str.split('in the ')[1]).split(' while you were')[0]
        var location = (str.split('while you were ')[1]).split('. <br> You were')[0]
        if (location.slice(0,6) == 'inside'){
            var newFallLocation = 'inside';
            if (location.includes('and in the ')){
                var newFallLocationInside = location.split('and in the ')[1];
            } else if (location.includes('and on the ')){
                var newFallLocationInside = location.split('and on the ')[1];
            } else if (location.includes('and in another')){
                var newFallLocationInside = 'other location';
            }
        } else if (location.slice(0,7) == 'outside'){
            var newFallLocation = 'outside';
            var newFallLocationInside = 'N/A';
        }
        var newFallActivity = (str.split('. <br> You were ')[1]).split(' before you ')[0];
        var newFallCause = (str.split(' and that ')[1]).split('.')[0];
        if (newFallCause.includes('it happened because you')){
          newFallCause = ((str.split(' and that ')[1]).split('.')[0]).split('it happened because you ')[1];
        } else if (newFallCause.includes('recall')){
          newFallCause = "Don't recall";
        }

        var injuryMedicalSentence = (str.split('walking aid. <br>You were '))[1];
        if (injuryMedicalSentence.slice(0, 7) == 'injured'){
            var newFallInjured = 'injured';
            var newFallMedical = (str.split('<br>')[5]).split('injured')[1];
            if (newFallMedical.includes('did not get')){
                newFallMedical = 'No medical help';
            } else if (newFallMedical.includes('and got')){
                newFallMedical = 'Yes medical help';
            }
        } else {
            var newFallInjured = 'not injured';
            var newFallMedical = 'N/A';
        }
        var newFallWalkingAid = '<br>' + (str.split('<br>')[4]);
        if (newFallWalkingAid.includes('were using')){
            newFallWalkingAid = 'Yes walking aid';
        } else if (newFallWalkingAid.includes('were not using')){
            newFallWalkingAid = 'No walking aid';
        }

        if ((str.split('.')[4]).includes('additional information')){
          var newFallMoreDetails = (str.split('.')[4]).split('additional information: ')[1];
        } else {
          var newFallMoreDetails = 'N/A';
        }
    }
        
        var fallOrNearFallArray = JSON.parse(localStorage.getItem('fallOrNearFallCSV'));
        fallOrNearFallArray.push(newFallOrNearFall);
        localStorage.setItem('fallOrNearFallCSV', JSON.stringify(fallOrNearFallArray));

        var fallTimeArray = JSON.parse(localStorage.getItem('fallTimeCSV'));
        fallTimeArray.push(newFallTime);
        localStorage.setItem('fallTimeCSV', JSON.stringify(fallTimeArray));

        var fallLocationArray = JSON.parse(localStorage.getItem('fallLocationCSV'));
        fallLocationArray.push(newFallLocation);
        localStorage.setItem('fallLocationCSV', JSON.stringify(fallLocationArray));

        var fallLocationInsideArray = JSON.parse(localStorage.getItem('fallLocationInsideCSV'));
        fallLocationInsideArray.push(newFallLocationInside);
        localStorage.setItem('fallLocationInsideCSV', JSON.stringify(fallLocationInsideArray));

        var fallActivityArray = JSON.parse(localStorage.getItem('fallActivityCSV'));
        fallActivityArray.push(newFallActivity);
        localStorage.setItem('fallActivityCSV', JSON.stringify(fallActivityArray));

        var fallCauseArray = JSON.parse(localStorage.getItem('fallCauseCSV'));
        fallCauseArray.push(newFallCause);
        localStorage.setItem('fallCauseCSV', JSON.stringify(fallCauseArray));

        var fallInjuredArray = JSON.parse(localStorage.getItem('fallInjuredCSV'));
        fallInjuredArray.push(newFallInjured);
        localStorage.setItem('fallInjuredCSV', JSON.stringify(fallInjuredArray));

        var fallMedicalArray = JSON.parse(localStorage.getItem('fallMedicalCSV'));
        fallMedicalArray.push(newFallMedical);
        localStorage.setItem('fallMedicalCSV', JSON.stringify(fallMedicalArray));

        var fallMoreDetailsArray = JSON.parse(localStorage.getItem('fallMoreDetailsCSV'));
        fallMoreDetailsArray.push(newFallMoreDetails);
        localStorage.setItem('fallMoreDetailsCSV', JSON.stringify(fallMoreDetailsArray));

        var fallWalkingAidArray = JSON.parse(localStorage.getItem('fallWalkingAidCSV'));
        fallWalkingAidArray.push(newFallWalkingAid);
        localStorage.setItem('fallWalkingAidCSV', JSON.stringify(fallWalkingAidArray));
    }

    CLIENTwriteFallsPage(study=study, site=site, subject=subject,
    fallOrNearFall=JSON.parse(localStorage.getItem('fallOrNearFallCSV')),
    fallTime=JSON.parse(localStorage.getItem('fallTimeCSV')),
    fallLocation=JSON.parse(localStorage.getItem('fallLocationCSV')),
    fallLocationInside=JSON.parse(localStorage.getItem('fallLocationInsideCSV')),
    fallActivity=JSON.parse(localStorage.getItem('fallActivityCSV')),
    fallCause=JSON.parse(localStorage.getItem('fallCauseCSV')),
    fallInjured=JSON.parse(localStorage.getItem('fallInjuredCSV')),
    fallMedical=JSON.parse(localStorage.getItem('fallMedicalCSV')),
    fallMoreDetails=JSON.parse(localStorage.getItem('fallMoreDetailsCSV')),
    fallWalkingAid=JSON.parse(localStorage.getItem('fallWalkingAidCSV'))
    )
    console.log('Wrote Falls Page to csv')

    CLIENTwritePreferencesPage(study=study, site=site, subject=subject, 
    walkingAidSingleRoom=localStorage.getItem('roomStatement'),
    walkingAidShortHall=localStorage.getItem('shortStatement'),
    walkingAidLongHall=localStorage.getItem('longStatement'),
    walkingAidOutside=localStorage.getItem('outsideStatement'), 
    sleepQuality=localStorage.getItem('sleepqualitypref'),
    sleepBedWeeknight=localStorage.getItem('weeknightHour') + ':' + localStorage.getItem('weeknightMin') + ' ' + localStorage.getItem('weeknightAMPM'),
    sleepBedWeekend=localStorage.getItem('weekendnightHour') + ':' + localStorage.getItem('weekendnightMin') + ' ' + localStorage.getItem('weekendnightAMPM'),
    sleepWakeWeekday=localStorage.getItem('weekdayHour') + ':' + localStorage.getItem('weekdayMin') + ' ' + localStorage.getItem('weekdayAMPM'),
    sleepWakeWeekend=localStorage.getItem('weekenddayHour') + ':' + localStorage.getItem('weekenddayMin') + ' ' + localStorage.getItem('weekenddayAMPM'),
    sleepNapsFrequency=localStorage.getItem('napsFrequency'),
    moodAfraid=localStorage.getItem('afraidPref'),
    moodConfused=localStorage.getItem('confusedPref'),
    moodSad=localStorage.getItem('sadPref'),
    moodAngry=localStorage.getItem('angryPref'),
    moodEnergetic=localStorage.getItem('energeticPref'),
    moodTired=localStorage.getItem('tiredPref'),
    moodHappy=localStorage.getItem('happyPref'),
    moodTense=localStorage.getItem('tensePref'),
    fallsFear=localStorage.getItem('fallAfraid'),
    fallsBalance=localStorage.getItem('fallBalance'),
    fallsNumPast=localStorage.getItem('fallPast'),
    profileAge=localStorage.getItem('ageProfile'),
    profileLiveAlone=localStorage.getItem('liveAloneStatement'),
    )
    console.log('Wrote Preferences Page to csv')

    CLIENTwriteTimestamps(study=study, site=site, subject=subject,
      events=JSON.parse(localStorage.getItem('Events')),
      times=JSON.parse(localStorage.getItem('Timestamps'))
      )
    console.log('Wrote Events and Timestamps to csv')

    resetStorageItems();

  } else {
    alert('You clicked cancel')    

  }
}

function resetStorageItems(){
  // reset storage items which aren't linked to preferences page
  localStorage.removeItem('activities');
  localStorage.removeItem('activityComplete');
  localStorage.removeItem('activityCountDaily');
  localStorage.removeItem('activityCountPreferences');
  localStorage.removeItem('activitySelectionsCount');
  localStorage.removeItem('ActivityStatementArray');
  localStorage.removeItem('afraid');
  localStorage.removeItem('angry');
  localStorage.removeItem('bedtime');
  localStorage.removeItem('confused');

  localStorage.removeItem('dailyActivity');
  localStorage.removeItem('DailyActivityStatementArray');
  localStorage.removeItem('dailyActivityTime');
  localStorage.removeItem('durations');
  localStorage.removeItem('energetic');
  localStorage.removeItem('fallActivity');
  localStorage.removeItem('fallCause');
  localStorage.removeItem('fallCount');

  localStorage.removeItem('FallEntryArray');
  localStorage.removeItem('fallInjuredCSV');
  localStorage.removeItem('fallLocationCSV');
  localStorage.removeItem('fallLocationInsideCSV');
  localStorage.removeItem('fallMedicalCSV');
  localStorage.removeItem('fallMoreDetailsCSV');
  localStorage.removeItem('fallOrNearFallCSV');
  localStorage.removeItem('fallsComplete');
  localStorage.removeItem('fallTimeCSV');
  localStorage.removeItem('fallWalkingAidCSV');
  localStorage.removeItem('fallActivityCSV');
  localStorage.removeItem('fallCauseCSV');

  localStorage.removeItem('happy');
  localStorage.removeItem('logmessage1');
  localStorage.removeItem('logmessage2');
  localStorage.removeItem('logmessage3');
  localStorage.removeItem('logmessage4');
  localStorage.removeItem('moodCount');
  localStorage.removeItem('moodCount');
  localStorage.removeItem('napdurations');
  localStorage.removeItem('NapEntryArray');
  localStorage.removeItem('naptimes');

  localStorage.removeItem('noFallsToday');
  localStorage.removeItem('quality');
  localStorage.removeItem('sad');
  localStorage.removeItem('sleepComplete');
  localStorage.removeItem('sleepCount');
  localStorage.removeItem('starttimes');
  localStorage.removeItem('tense');
  localStorage.removeItem('tired');
  localStorage.removeItem('waketime');
  localStorage.removeItem('walkingAid');

  localStorage.removeItem('walkingAidArray');
  localStorage.removeItem('Timestamps');
  localStorage.removeItem('Events');
  window.location.reload()
}
// - - - - - - 
// CSV WRITER
// - - - - - -
function join(t, a, s) {
  function format(m) {
     let f = new Intl.DateTimeFormat('en', m);
     return f.format(t);
  }
  return a.map(format).join(s);
}

function CLIENTwriteSleepPage(study, site, subject, quality, bedtime, waketime, naptimes, napdurations){
  var study = study;
  var site = site;
  var subject = subject;
  var quality = quality;
  var bedtime = bedtime;
  var waketime = waketime;
  var naptimes = naptimes;
  var napdurations = napdurations;

  var naps = '';
  for (var i = 0; i < naptimes.length; i++){
      var naps = naps + naptimes[i] + ';';
  }

  var napdurationmin = '';
  for (var i = 0; i < napdurations.length; i++){
      var napdurationmin = napdurationmin + napdurations[i] + ';';
  }

  var date = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}];
  var dateFormat = join(new Date, date, '')
  var dateISO = (new Date).toISOString()

  const rows = [
      ['ID', 'ID',  'DATE', 'QUALITY', 'BEDTIME', 'WAKETIME', 'NAPS', 'NAPDURATIONMIN']
  ];

  record = [subject, dateISO, quality, bedtime, waketime, naps, napdurationmin];
  rows.push(record)
  
  let filename = 'https://github.com/hanrbern/Hub/tree/main/data/' + study + '_' + site + '_' + subject + '_Sleep_' + dateFormat;

  let csvContent = 'data:text/csv;charset=utf-8';
  rows.forEach(function(rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
  });

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename + '.csv');
  document.body.appendChild(link);
  link.click()


}

function CLIENTwriteActivityPage(study, site, subject, activities, starttimes, durations){
  var study = study;
  var site = site;
  var subject = subject;
  var activities = activities;
  var starttimes = starttimes;
  var durations = durations;

  var date = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}];
  var dateFormat = join(new Date, date, '')
  var dateISO = (new Date).toISOString()

  const records = [
      ['ID', 'ID', 'DATE', 'ACTIVITY', 'STARTTIME', 'DURATION']
  ];

  let filename = 'https://github.com/hanrbern/Hub/tree/main/data/' + study + '_' + site + '_' + subject + '_Activity_' + dateFormat;

  for (var i = 0; i < activities.length; i++){
      var activity = activities[i];
      var starttime = starttimes[i];
      var duration = durations[i];

      record = [subject, dateISO, activity, starttime, duration]
      records.push(record)
  }
  
  let csvContent = 'data:text/csv;charset=utf-8';
  records.forEach(function(rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
  });
  
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename + '.csv');
  document.body.appendChild(link);

  link.click()
}

function CLIENTwriteMoodPage(study, site, subject, afraid, confused, sad, angry, energetic, tired, happy, tense){
  var study = study;
  var site = site;
  var subject = subject;
  var afraid = afraid;
  var confused = confused;
  var sad = sad;
  var angry = angry;
  var energetic = energetic;
  var tired = tired;
  var happy = happy;
  var tense = tense;

  var date = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}];
  var dateFormat = join(new Date, date, '');
  var dateISO = (new Date).toISOString()

  const records = [
    ['ID', 'ID', 'DATE', 'AFRAID', 'CONFUSED', 'SAD', 'ANGRY', 'ENERGETIC', 'TIRED', 'HAPPY', 'TENSE']
  ];
  let filename = 'https://github.com/hanrbern/Hub/tree/main/data/' + study + '_' + site + '_' + subject + '_Mood_' + dateFormat;


  const record = [subject, dateISO, afraid, confused, sad,  angry, energetic, tired, happy, tense];
  records.push(record);

  let csvContent = 'data:text/csv;charset=utf-8';
  records.forEach(function(rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
  });
  
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename + '.csv');
  document.body.appendChild(link);

  link.click()

}

function CLIENTwriteFallsPage(study, site, subject, fallOrNearFall, fallTime, fallLocation, fallLocationInside, fallActivity, fallCause, fallInjured, fallMedical, fallMoreDetails, fallWalkingAid){
  var study = study;
  var site = site;
  var subject = subject;
  var fallOrNearFall = fallOrNearFall;
  var fallTime = fallTime;
  var fallLocation = fallLocation;
  var fallLocationInside = fallLocationInside;
  var fallActivity = fallActivity;
  var fallCause = fallCause;
  var fallInjured = fallInjured;
  var fallMedical = fallMedical;
  var fallMoreDetails = fallMoreDetails;
  var fallWalkingAid = fallWalkingAid;

  var date = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}];
  var dateFormat = join(new Date, date, '');
  var dateISO = (new Date).toISOString()

  const records = [
    ['ID', 'ID', 'DATE', 'FALLORNEARFALL', 'FALLTIME', 'FALLLOCATION', 'FALLLOCATIONINSIDE', 'FALLACTIVITY', 'FALLCAUSE', 'FALLINJURED', 'FALLMEDICAL', 'FALLWALKINGAID', 'FALLMOREDETAILS']
  ];
    let filename = 'https://github.com/hanrbern/Hub/tree/main/data/' + study + '_' + site + '_' + subject + '_Falls_' + dateFormat;

  for (var i = 0; i < fallOrNearFall.length; i++){
      var fallornearfall = fallOrNearFall[i];
      var time = fallTime[i];
      var location = fallLocation[i];
      var locationInside = fallLocationInside[i];
      var activity = fallActivity[i];
      var cause = fallCause[i];
      var injured = fallInjured[i];
      var medical = fallMedical[i];
      var moreDetails = JSON.stringify(fallMoreDetails[i]);
      var walkingAid = fallWalkingAid[i];

      record = [subject, dateISO, fallornearfall, time, location, locationInside, activity, cause, injured,  medical, walkingAid, moreDetails];

      records.push(record)
  }
  let csvContent = 'data:text/csv;charset=utf-8';
    records.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename + '.csv');
  document.body.appendChild(link); 

  link.click()

}

function CLIENTwritePreferencesPage(study, site, subject, 
  walkingAidSingleRoom, walkingAidShortHall, walkingAidLongHall, walkingAidOutside,
  sleepQuality, sleepBedWeeknight, sleepBedWeekend, sleepWakeWeekday, sleepWakeWeekend, sleepNapsFrequency,
  moodAfraid, moodConfused, moodSad, moodAngry, moodEnergetic, moodTired, moodHappy, moodTense,
  fallsFear, fallsBalance, fallsNumPast, 
  profileAge, profileLiveAlone, 
  ){
  
  var study = study;
  var site = site;
  var subject = subject;
  var walkingAidSingleRoom = walkingAidSingleRoom;
  var walkingAidShortHall = walkingAidShortHall;
  var walkingAidLongHall = walkingAidLongHall;
  var walkingAidOutside = walkingAidOutside;
  var sleepQuality = sleepQuality;
  var sleepBedWeeknight = sleepBedWeeknight;
  var sleepBedWeekend = sleepBedWeekend;
  var sleepWakeWeekday = sleepWakeWeekday;
  var sleepWakeWeekend = sleepWakeWeekend;
  var sleepNapsFrequency = sleepNapsFrequency;
  var moodAfraid = moodAfraid;
  var moodConfused = moodConfused;
  var moodSad = moodSad;
  var moodAngry = moodAngry;
  var moodEnergetic = moodEnergetic;
  var moodTired = moodTired;
  var moodHappy = moodHappy;
  var moodTense = moodTense;
  var fallsFear = fallsFear;
  var fallsBalance = fallsBalance;
  var fallsNumPast = fallsNumPast;
  var profileAge = profileAge;
  var profileLiveAlone = profileLiveAlone;

  var date = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}];
  var dateFormat = join(new Date, date, '')
  var dateISO = (new Date).toISOString()

  const records = [
    ['ID', 'ID', 'DATE', 'WALKINGAIDSINGLEROOM', 'WALKINGAIDSHORTHALL', 'WALKINGAIDLONGHALL', 'WALKINGAIDOUTSIDE', 'SLEEPQUALITY', 'SLEEPBEDWEEKNIGHT', 'SLEEPBEDWEEKEND', 'SLEEPWAKEWEEKDAY', 'SLEEPWAKEWEEKEND', 'SLEEPNAPSFREQUENCY', 'MOODAFRAID', 'MOODCONFUSED', 'MOODSAD',  'MOODANGRY',  'MOODENERGETIC',  'MOODTIRED',  'MOODHAPPY',  'MOODTENSE',  'FALLSFEAR',  'FALLSBALANCE',  'FALLSNUMPAST',  'PROFILEAGE',  'PROFILELIVEALONE']
  ];
  let filename = 'https://github.com/hanrbern/Hub/tree/main/data/' + study + '_' + site + '_' + subject + '_Preferences_' + dateFormat;

  const record = [subject,
      dateISO,
      walkingAidSingleRoom,
      walkingAidShortHall,
      walkingAidLongHall,
      walkingAidOutside,
      sleepQuality,
      sleepBedWeeknight,
      sleepBedWeekend,
      sleepWakeWeekday,
      sleepWakeWeekend,
      sleepNapsFrequency,
      moodAfraid,
      moodConfused,
      moodSad,
      moodAngry,
      moodEnergetic,
      moodTired,
      moodHappy,
      moodTense,
      fallsFear,
      fallsBalance,
      fallsNumPast,
      profileAge,
      profileLiveAlone];

  records.push(record);

  let csvContent = 'data:text/csv;charset=utf-8';
    records.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });


  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename + '.csv');
  document.body.appendChild(link); 

  link.click();
}

function CLIENTwriteTimestamps(study, site, subject, events, times){
  var study = study;
  var site = site;
  var subject = subject;
  var events = events;
  var times = times;

  var date = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}];
  var dateFormat = join(new Date, date, '')
  var dateISO = (new Date).toISOString()

  const rows = [
      ['ID', 'ID', 'TIME', 'EVENT']
  ]

  for (var i = 0; i < events.length; i++){
      var event = events[i];
      var time = times[i];

      record = [subject, time, event]
      rows.push(record)
  }

  let filename = 'https://github.com/hanrbern/Hub/tree/main/data' + study + '_' + site + '_' + subject + '_Timestamps_' + dateFormat;
  let csvContent = 'data:text/csv;charset=utf-8';
  rows.forEach(function(rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
  });
  
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename + '.csv');
  document.body.appendChild(link); // Required for FF

  link.click()
  console.log('Done')
}

// EVENT FILE
function logEvent(event){
  var event = event;
  if (localStorage.hasOwnProperty('Timestamps') == false){newArrayLocalStorage('Timestamps')};
  if (localStorage.hasOwnProperty('Events') == false){newArrayLocalStorage('Events')};
  var timestampsArr = JSON.parse(localStorage.getItem('Timestamps'));
  var eventsArr = JSON.parse(localStorage.getItem('Events'));
  
  var date = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}];
  var dateISO = (new Date).toISOString()

  timestampsArr.push(dateISO);

  if (event == 'width and height'){
    eventsArr.push('screen width: ' + window.innerWidth + '; screen height: ' + window.innerHeight);
  } else {
    eventsArr.push(JSON.stringify(event));
  }
  localStorage.setItem('Timestamps', JSON.stringify(timestampsArr));
  localStorage.setItem('Events', JSON.stringify(eventsArr));
}