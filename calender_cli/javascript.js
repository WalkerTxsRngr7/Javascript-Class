// Load the full build.
var _ = require('lodash');

const chalk = require('chalk');
const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);
// var dayofweek = [];

// for (j = 0; j < 7; j++){
//     dayofweek.push(moment().day(j).format("dddd"));
// }

// monthRange.by('days');
// echo (monthRange);

// for (i = 0; i < 12; i++){
//     console.log(moment().month(i).format("MMMM"));
//     console.log(_.join(dayofweek, ' '));   
// }

const range = moment.range('2019-01-01', '2020-01-01');
const range2 = moment.range('2019-02-24', '2019-03-02');
// const range3 = moment.range('2019-01-01', '2019-02-01');

const months = Array.from(range.by('month', {excludeEnd: true}));
const week = Array.from(range2.by('day', {excludeEnd: false}));
// const days = Array.from(range3.by('day', {excludeEnd: true}));

monthForm = months.map(m => m.format('MMMM'))
weekForm = _.join(week.map(m => m.format('ddd')), " ")
// console.log(months.map(m => m.format('MMMM')));
// console.log(moment().month(3).date(1).format("d"));
// console.log(_.join(week.map(m => m.format('dddd')), " "));
// dayForm = _.chunk(days.map(m => m.format('D')), 7)

for (month=0; month < 12; month++){
    console.log(chalk.underline.blue.bold(moment().month(month).format("MMMM")));
    console.log(chalk.underline(weekForm));

    range3 = moment.range(`2019-${moment().month(month).format("MM")}-01`, `2019-${moment().month(month).format("MM")}-${moment().month(month).daysInMonth()}`);
    daysMonth = Array.from(range3.by('day', {excludeEnd: false}));
    emptyDays = []
    for (i = 0; i < moment().month(month).date(1).format("d"); i++){
        emptyDays.push("  ")
    }
    dayForm = daysMonth.map(m => m.format('DD'))
    if (month == 5){
        dayForm[16] = chalk.magenta(17)
    } else if (month == 9){
        dayForm[30] = chalk.red(31)
    }
    dayForm = _.concat(emptyDays, dayForm)
    daysChunk = _.chunk(dayForm, 7)
    
    for (day in daysChunk){
        console.log(_.join(daysChunk[day], "  "))
    }
    console.log("\n")
}


// console.log(monthForm)
// console.log(weekForm)
// console.log(dayForm)

