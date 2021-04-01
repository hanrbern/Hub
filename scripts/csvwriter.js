var subject = '1001';
var quality = 'Fairy Good';
var bedtime = '10:00 PM';
var waketime = '7:00 AM';
var naptime1 = '3:00 PM';
var napduration1 = '20';
var naptime2 = '8:00 PM';
var napduration2 = '10';


var study = 'Test';
var site = 'UW';
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
    {id: subject, date: dateISO, quality: quality, bedtime: bedtime, waketime: waketime, naps: naptime1 + ',' + naptime2, napdurationmin: napduration1 + ',' + napduration2}
];

csvWriter.writeRecords(records)
    .then(() => {
        console.log('...Done');
    });

function join(t, a, s) {
    function format(m) {
       let f = new Intl.DateTimeFormat('en', m);
       return f.format(t);
    }
    return a.map(format).join(s);
 }

 console.log(dateFormat)
 console.log(dateISO)