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

function NEWwriteTimestamps(study, site, subject, events, times){
    var study = study;
    var site = site;
    var subject = subject;
    var events = events;
    var times = times;

    var date = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}];
    var dateFormat = join(new Date, date, '')
    var dateISO = (new Date).toISOString()

    const rows = [
        ['ID', 'DATE', 'EVENT', 'TIME']
    ]

    for (var i = 0; i < events.length; i++){
        var event = events[i];
        var time = times[i];

        record = [subject, dateISO, event, time]
        rows.push(record)
    }

    let filename = 'data/' + study + '_' + site + '_' + subject + '_Timestamps_' + dateFormat;
    let csvContent = 'date:text/csv;charset=utf-8';
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

NEWwriteTimestamps('Test', 'UW', '1001', ['p-10', 'b-9'], ['11:53', '10:05'])