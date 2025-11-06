function getSleepHours(day) {
    switch (day.toLowerCase()) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 8;
            break;
        case 'friday':
            return 9;
            break;
        case 'saturday':
            return 9;
            break;
        case 'sunday':
            return 8;
            break;
        default:
            return 0;                            
    }
};

function getActualSleepHours() {
    return (
        getSleepHours('monday') +
        getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday') +
        getSleepHours('saturday') +
        getSleepHours('sunday')
    );
};

function getIdealSleepHours() {
    const idealHoursPerNight = 8;
    return idealHoursPerNight * 7;
};

function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log("Perfect! You got the ideal amount of sleep this week");
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got ${actualSleepHours - idealSleepHours} hours(s) more sleep than needed. Well rested!`);
    } else {
        console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you should. Try rest more!`);
    }
};

calculateSleepDebt();

// For Loop and Looping in Reverse 

for (let sleepTime = 0; sleepTime < 8; sleepTime++) {
    console.log(sleepTime);
}; 

for (let napTime = 4; napTime > 0; napTime--) {
    console.log("A nap should never be longer than 4 hours. " + napTime + " Hour(s), then it's time to get up.");
};




