function join(t, a, s) {
    function format(m) {
       let f = new Intl.DateTimeFormat('en', m);
       return f.format(t);
    }
    return a.map(format).join(s);
 }

function writeSleepPage(study, site, subject, quality, bedtime, waketime, naptimes, napdurations){
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
        var naps = naps + naptimes[i] + ',';
    }

    var napdurationmin = '';
    for (var i = 0; i < napdurations.length; i++){
        var napdurationmin = napdurationmin + napdurations[i] + ',';
    }

    var date = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}];
    var dateFormat = join(new Date, date, '')
    var dateISO = (new Date).toISOString()

    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
        path: 'data/' + study + '_' + site + '_' + subject + '_Sleep_' + dateFormat,
        header: [
            {id: 'id', title: 'ID'},
            {id: 'date', title: 'DATE'},
            {id: 'quality', title: 'QUALITY'},
            {id: 'bedtime', title: 'BEDTIME'},
            {id: 'waketime', title: 'WAKETIME'},
            {id: 'naps', title: 'NAPS'},
            {id: 'napdurationmin', title: 'NAPDURATIONMIN'}
        ] 
    });

    const records = [
        {id: subject, date: dateISO, quality: quality, bedtime: bedtime, waketime: waketime, naps: naps, napdurationmin: napdurationmin}
    ];
    
    csvWriter.writeRecords(records)
        .then(() => {
            console.log('...Done');
        });

}

function writeActivityPage(study, site, subject, activities, starttimes, durations){
    var study = study;
    var site = site;
    var subject = subject;
    var activities = activities;
    var starttimes = starttimes;
    var durations = durations;

    var date = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}];
    var dateFormat = join(new Date, date, '')
    var dateISO = (new Date).toISOString()

    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
        path: 'data/' + study + '_' + site + '_' + subject + '_Acitivity_' + dateFormat,
        header: [
            {id: 'id', title: 'ID'},
            {id: 'date', title: 'DATE'},
            {id: 'activity', title: 'ACTIVITY'},
            {id: 'starttime', title: 'STARTTIME'},
            {id: 'duration', title: 'DURATION'},
        ] 
    });

    const records = [];

    for (var i = 0; i < activities.length; i++){
        var activity = activities[i];
        var starttime = starttimes[i];
        var duration = durations[i];

        record = {id: subject, date: dateISO, activity: activity, starttime: starttime, duration: duration}
        records.push(record)
    }
    
    csvWriter.writeRecords(records)
        .then(() => {
            console.log('...Done');
        });

}

function writeMoodPage(study, site, subject, afraid, confused, sad, angry, energetic, tired, happy, tense){
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
    var dateFormat = join(new Date, date, '')
    var dateISO = (new Date).toISOString()

    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
        path: 'data/' + study + '_' + site + '_' + subject + '_Mood_' + dateFormat,
        header: [
            {id: 'id', title: 'ID'},
            {id: 'date', title: 'DATE'},
            {id: 'afraid', title: 'AFRAID'},
            {id: 'confused', title: 'CONFUSED'},
            {id: 'sad', title: 'SAD'},
            {id: 'angry', title: 'ANGRY'},
            {id: 'energetic', title: 'ENERGETIC'},
            {id: 'tired', title: 'TIRED'},
            {id: 'happy', title: 'HAPPY'},
            {id: 'tense', title: 'TENSE'},
        ] 
    });

    const records = [
        {id: subject, date: dateISO, afraid: afraid, confused: confused, sad: sad, angry: angry, energetic: energetic, tired: tired, happy: happy, tense: tense}
    ];
    
    csvWriter.writeRecords(records)
        .then(() => {
            console.log('...Done');
        });

}

function writeFallsPage(study, site, subject, fallOrNearFall, fallTime, fallLocation, fallLocationInside, fallActivity, fallCause, fallInjured, fallMedical, fallMoreDetails, fallWalkingAid){
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
    var dateFormat = join(new Date, date, '')
    var dateISO = (new Date).toISOString()

    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
        path: 'data/' + study + '_' + site + '_' + subject + '_Falls_' + dateFormat,
        header: [
            {id: 'id', title: 'ID'},
            {id: 'date', title: 'DATE'},
            {id: 'fallOrNearFall', title: 'FALLORNEARFALL'},
            {id: 'fallTime', title: 'FALLTIME'},
            {id: 'fallLocation', title: 'FALLLOCATION'},
            {id: 'fallLocationInside', title: 'FALLLOCATIONINSIDE'},
            {id: 'fallActivity', title: 'FALLACTIVITY'},
            {id: 'fallCause', title: 'FALLCAUSE'},
            {id: 'fallInjured', title: 'FALLINJURED'},
            {id: 'fallMedical', title: 'FALLMEDICAL'},
            {id: 'fallMoreDetails', title: 'FALLMOREDETAILS'},
            {id: 'fallWalkingAid', title: 'FALLWALKINGAID'},
        ] 
    });

    const records = [];

    for (var i = 0; i < fallOrNearFall.length; i++){
        var fallornearfall = fallOrNearFall[i];
        var time = fallTime[i];
        var location = fallLocation[i];
        var locationInside = fallLocationInside[i];
        var activity = fallActivity[i];
        var cause = fallCause[i];
        var injured = fallInjured[i];
        var medical = fallMedical[i];
        var moreDetails = fallMoreDetails[i];
        var walkingAid = fallWalkingAid[i];

        record = {id: subject, date: dateISO, fallOrNearFall: fallornearfall,
                    fallTime: time,
                    fallLocation: location,
                    fallLocationInside: locationInside,
                    fallActivity: activity,
                    fallCause: cause,
                    fallInjured: injured,
                    fallMedical: medical,
                    fallMoreDetails: moreDetails,
                    fallWalkingAid: walkingAid}
        records.push(record)
    }
    
    csvWriter.writeRecords(records)
        .then(() => {
            console.log('...Done');
        });
}

function writePreferencesPage(study, site, subject, 
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

        const createCsvWriter = require('csv-writer').createObjectCsvWriter;
        const csvWriter = createCsvWriter({
            path: 'data/' + study + '_' + site + '_' + subject + '_Preferences_' + dateFormat,
            header: [
                {id: 'id', title: 'ID'},
                {id: 'date', title: 'DATE'},
                {id: 'walkingAidSingleRoom', title: 'WALKINGAIDSINGLEROOM'},
                {id: 'walkingAidShortHall', title: 'WALKINGAIDSHORTHALL'},
                {id: 'walkingAidLongHall', title: 'WALKINGAIDLONGHALL'},
                {id: 'walkingAidOutside', title: 'WALKINGAIDOUTSIDE'},
                {id: 'sleepQuality', title: 'SLEEPQUALITY'},
                {id: 'sleepBedWeeknight', title: 'SLEEPBEDWEEKNIGHT'},
                {id: 'sleepBedWeekend', title: 'SLEEPBEDWEEKEND'},
                {id: 'sleepWakeWeekday', title: 'SLEEPWAKEWEEKDAY'},
                {id: 'sleepWakeWeekend', title: 'SLEEPWAKEWEEKEND'},
                {id: 'sleepNapsFrequency', title: 'SLEEPNAPSFREQUENCY'},
                {id: 'moodAfraid', title: 'MOODAFRAID'},
                {id: 'moodConfused', title: 'MOODCONFUSED'},
                {id: 'moodSad', title: 'MOODSAD'},
                {id: 'moodAngry', title: 'MOODANGRY'},
                {id: 'moodEnergetic', title: 'MOODENERGETIC'},
                {id: 'moodTired', title: 'MOODTIRED'},
                {id: 'moodHappy', title: 'MOODHAPPY'},
                {id: 'moodTense', title: 'MOODTENSE'},
                {id: 'fallsFear', title: 'FALLSFEAR'},
                {id: 'fallsBalance', title: 'FALLSBALANCE'},
                {id: 'fallsNumPast', title: 'FALLSNUMPAST'},
                {id: 'profileAge', title: 'PROFILEAGE'},
                {id: 'profileLiveAlone', title: 'PROFILELIVEALONE'},

            ] 
        });

        const records = [
            {id: subject, date: dateISO, 
                walkingAidSingleRoom: walkingAidSingleRoom,
                walkingAidShortHall: walkingAidShortHall,
                walkingAidLongHall: walkingAidLongHall,
                walkingAidOutside: walkingAidOutside,
                sleepQuality: sleepQuality,
                sleepBedWeeknight: sleepBedWeeknight,
                sleepBedWeekend: sleepBedWeekend,
                sleepWakeWeekday: sleepWakeWeekday,
                sleepWakeWeekend: sleepWakeWeekend,
                sleepNapsFrequency: sleepNapsFrequency,
                moodAfraid: moodAfraid,
                moodConfused: moodConfused,
                moodSad: moodSad,
                moodAngry: moodAngry,
                moodEnergetic: moodEnergetic,
                moodTired: moodTired,
                moodHappy: moodHappy,
                moodTense: moodTense,
                fallsFear: fallsFear,
                fallsBalance: fallsBalance,
                fallsNumPast: fallsNumPast,
                profileAge: profileAge,
                profileLiveAlone: profileLiveAlone,}
        ];
        
        csvWriter.writeRecords(records)
            .then(() => {
                console.log('...Done');
            });
}

function writeTimestamps(study, site, subject, events, times){
    var study = study;
    var site = site;
    var subject = subject;
    var events = events;
    var times = times;

    var date = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}];
    var dateFormat = join(new Date, date, '')
    var dateISO = (new Date).toISOString()

    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
        path: 'data/' + study + '_' + site + '_' + subject + '_Timestamps_' + dateFormat,
        header: [
            {id: 'id', title: 'ID'},
            {id: 'date', title: 'DATE'},
            {id: 'event', title: 'EVENT'},
            {id: 'time', title: 'TIME'}
        ] 
    });

    const records = [];

    for (var i = 0; i < events.length; i++){
        var event = events[i];
        var time = times[i];

        record = {id: subject, date: dateISO, event: event, time: time}
        records.push(record)
    }
    
    csvWriter.writeRecords(records)
        .then(() => {
            console.log('...Done');
        });
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
        var naps = naps + naptimes[i] + ',';
    }

    var napdurationmin = '';
    for (var i = 0; i < napdurations.length; i++){
        var napdurationmin = napdurationmin + napdurations[i] + ',';
    }

    var date = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}];
    var dateFormat = join(new Date, date, '')
    var dateISO = (new Date).toISOString()

    const rows = [
        ['ID', 'DATE', 'QUALITY', 'BEDTIME', 'WAKETIME', 'NAPS', 'NAPDURATIONMIN']
    ]

    record = [subject, dateISO, quality, bedtime, waketime, naps, napdurationmin]
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
        ['ID', 'DATE', 'ACTIVITY', 'STARTTIME', 'DURATION']
    ];

    let filename = 'https://github.com/hanrbern/Hub/tree/main/data/' + study + '_' + site + '_' + subject + '_Acitivity_' + dateFormat;

    for (var i = 0; i < activities.length; i++){
        var activity = activities[i];
        var starttime = starttimes[i];
        var duration = durations[i];

        record = [subject, dateISO, activity, starttime, duration]
        records.push(record)
    }
    
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

    const records = ['ID', 'DATE', 'AFRAID', 'CONFUSED', 'SAD', 'ANGRY', 'ENERGETIC', 'TIRED', 'HAPPY', 'TENSE'];
    let filename = 'https://github.com/hanrbern/Hub/tree/main/data/' + study + '_' + site + '_' + subject + '_Mood_' + dateFormat;

    const record = [subject, dateISO, afraid, confused, sad,  angry, energetic, tired, happy, tense]
    records.push(record)
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename + '.csv');
    document.body.appendChild(link); // Required for FF

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

    const records = ['ID', 'DATE', 'FALLORNEARFALL', 'FALLTIME', 'FALLLOCATION', 'FALLLOCATIONINSIDE', 'FALLACTIVITY', 'FALLCAUSE', 'FALLINJURED', 'FALLMEDICAL', 'FALLMOREDETAILS', 'FALLWALKINGAID'];
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
        var moreDetails = fallMoreDetails[i];
        var walkingAid = fallWalkingAid[i];

        record = [subject, dateISO, fallornearfall, time, location, locationInside, activity, cause, injured,  medical, moreDetails, walkingAid];

        records.push(record)
    }
    
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

    const records = ['ID', 'DATE', 'WALKINGAIDSINGLEROOM', 'WALKINGAIDSHORTHALL', 'WALKINGAIDLONGHALL', 'WALKINGAIDOUTSIDE', 'SLEEPQUALITY', 'SLEEPBEDWEEKNIGHT', 'SLEEPBEDWEEKEND', 'SLEEPWAKEWEEKDAY', 'SLEEPWAKEWEEKEND', 'SLEEPNAPSFREQUENCY', 'MOODAFRAID', 'MOODCONFUSED', 'MOODSAD',  'MOODANGRY',  'MOODENERGETIC',  'MOODTIRED',  'MOODHAPPY',  'MOODTENSE',  'FALLSFEAR',  'FALLSBALANCE',  'FALLSNUMPAST',  'PROFILEAGE',  'PROFILELIVEALONE'];
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
    console.log(dateFormat)
    console.log(dateISO)

    const rows = [
        ['ID', 'DATE', 'EVENT', 'TIME']
    ]

    for (var i = 0; i < events.length; i++){
        var event = events[i];
        var time = times[i];

        record = [subject, dateISO, event, time]
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

CLIENTwriteTimestamps('Test', 'UW', '1001', ['p-10', 'b-9'], ['11:53', '10:05'])
var newFallOrNearFallArr = [];
var newFallTimeArr = [];
var newFallLocationArr = [];
var newFallLocationInsideArr = [];
var newFallActivityArr = [];
var newFallCauseArr = [];
var newFallInjuredArr = [];
var newFallMedicalArr = [];
var newFallMoreDetailsArr = [];
var newFallWalkingAidArr = [];
var array = [
    "<br> You indicated: <br> You fell in the morning while you were inside and in the bathroom. <br> You were standing still before you fell and that it happened because you tripped. <br>You were using a walking aid. <br>You were not injured.<br>You provided additional information: first",
    "<br> You indicated: <br> You almost fell in the daytime while you were outside. <br> You were standing up before you almost fell and that it happened because you slipped. <br>You were not using a walking aid. <br>You were injured and did not get medical help.<br>You provided additional information: second",
    "<br> You indicated: <br> You fell in the evening while you were outside. <br> You were sitting down before you fell and that it happened because you were dizzy. <br>You were using a walking aid. <br>You were injured and got medical help.<br>You provided additional information: third"
]
for (var i = 0; i < array.length; i++){
    var str = array[i];
    var newFallOrNearFall = (str.split('<br> You indicated: <br> You ')[1]).split(' in the ')[0];
    if (newFallOrNearFall == 'undefined'){
        var newFallTime = 'undefined';
        var newFallLocation = 'undefined';
        var newFallLocationInside = 'undefined';
        var newFallActivity = 'undefined';
        var newFallCause = 'undefined';
        var newFallInjured = 'undefined';
        var newFallMedical = 'undefined';
        var newFallMoreDetails = 'undefined';
        var newFallWalkingAid = 'undefined';
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
            var newFallLocationInside = '';
        }
        var newFallActivity = (str.split('. <br> You were ')[1]).split(' before you ')[0];
        var newFallCause = ((str.split(' and that ')[1]).split('.')[0]).split('it happened because you ')[1];

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
            var newFallMedical = '';
        }
        var newFallWalkingAid = '<br>' + (str.split('<br>')[4]);
        if (newFallWalkingAid.includes('were using')){
            newFallWalkingAid = 'Yes walking aid';
        } else if (newFallWalkingAid.includes('were not using')){
            newFallWalkingAid = 'No walking aid';
        }
        var newFallMoreDetails = (str.split('.')[4]).split('additional information: ')[1];
    }
    newFallOrNearFallArr.push(newFallOrNearFall)
    newFallTimeArr.push(newFallTime)
    newFallLocationArr.push(newFallLocation)
    newFallLocationInsideArr.push(newFallLocationInside)
    newFallActivityArr.push(newFallActivity)
    newFallCauseArr.push(newFallCause)
    newFallInjuredArr.push(newFallInjured)
    newFallMedicalArr.push(newFallMedical)
    newFallMoreDetailsArr.push(newFallMoreDetails)
    newFallWalkingAidArr.push(newFallWalkingAid)
}
