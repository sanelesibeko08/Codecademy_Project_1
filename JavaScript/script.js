console.log('Welcome to AdiWorld'.toUpperCase() + ' Where Dreams Meet Reality !!!'.toUpperCase());
console.log("888 Heaven St, 4th Dimension City, Gaia 1818".length);
console.log("By His Stripes We Are Healed");
//
console.log(11 + 11);
console.log(888 - 777);
console.log(444 * 2);
console.log(888 / 222);
console.log(111 % 2);

console.log('Adidas'.startsWith('A'));

console.log(Math.random() * 11);
console.log(Math.floor(Math.random() * 8));

//Variables
let AdiBoy = 'Sourxe';
console.log(AdiBoy);
AdiBoy = 'Messi';
console.log(AdiBoy);
let AdiClub ='Manchester United'
console.log(AdiClub);

const AdiMoto = 'Impossible Is Nothing';
console.log(AdiMoto);
const AdiCode = "Don't ever compromise on quality and don't believe the hype, in this life you have to earn your stripes!!!";
console.log(AdiCode);

let a = 1;
a += 7;
console.log(a);
a *= 8;
console.log(a);
a -= 60;
console.log(a);
a /= 2;
console.log(a);
a--;
console.log(a);

console.log(AdiBoy + ' is the GOAT.' + AdiClub + ' is the Greatest Club in the World.' + 'One day we will be number ' + a + ' again.');

console.log(`With GOD ${AdiMoto}, Do Not Be Afraid.`);

console.log(typeof AdiCode);
console.log(typeof a);
console.log(typeof AdiClub);

let FoSho = true;
console.log(typeof FoSho);

// If Else Statements and Comparison Operators

if (AdiBoy === 'Messi') {
    console.log('Spot On!!!');
} else {
    console.log('Try Again Fool!!!');
};

if (FoSho = true) {
    console.log('Straight Up!!!');
} else {
    console.log('Negative!!!');
};

if (7 < 10) {
    console.log('Facts!!!');
} else {
    console.log('Try Again Fool!!!');
};

if (AdiClub === 'Manchester United') {
    console.log("You're A True Devil.");
} else {
    console.log("What's Wrong With You Fool?");
};

if (AdiClub === 'Manchester United' && AdiBoy === 'Messi') {
    console.log("You're A Legend.");
} else {
    console.log('You still have much to learn.');
};

// Truthy and Falsy Assignment
let username = 'Sanele';
let defaultName;

if (username) {
    defaultName = username;
} else {
    defaultName = 'Stranger Danger';
}

console.log(defaultName);

// Shorthand for the above code
let userAge = '';
let defaultAge = userAge || 'Imortal';

console.log(defaultAge);

// Ternary Operator
let issaAdiBoy = true;

if (issaAdiBoy) {
    console.log('Welcome Blood.')
} else {
    console.log('What are you doing here Fam?');
};
// Shorthand for the above code
let issaAdiBroad = true;
issaAdiBroad ? console.log('Welcome Home Gal.')
: console.log("You're Lost.");

// Else if Statements 

let weekDay = 'Work';
weekDay = 'Rest';
weekDay = 'Away';

if (weekDay === 'Rest') {
    console.log("Chill Dawg, issa Holiday!");
} else if (weekDay === 'Work') {
    console.log('Keep Grinding King!');
} else if (weekDay === 'Away') {
    console.log('No working while on Vacation Broski.');
} else if (weekDay === 'Date') {
    console.log("Who's the Lucky Lady?");
} else {
    console.log('What are you up to?');
};

// The Switch Keyword

let dripType = 'Football';

switch (dripType) {
    case 'Gym':
        console.log('Range between R500 - R3000');
        break;
    case 'Casual':
        console.log('Ranges between R2000 - R6000');
        break;
    case 'Football':
        console.log('Ranges between R5000 - R10000');
        break;
    case 'Swag':
        console.log('Ranges between R8000 - R25000');
        break;
    case 'Meditation':
        console.log('Ranges between R1000 - R4000');
        break;
    default:
        console.log('Nigga What?');
        break;                    
};

// Functions 

function greetAdiWorld() {
    console.log('Greetings from Planet Mancunia.');
}

greetAdiWorld();

function goodbyeMessage() {
    console.log('May the Grace of our Lord Jesus Christ, the Love of God and the fellowship of the Holy Spirit, be with you, now and forever, Amen.');
} 

goodbyeMessage();

// Parameters and Arguments (Functions)

function calculateDripSize(weight, height) {
    console.log(Math.floor(weight / height));
};

calculateDripSize(67.1, 5.9);

const sourxeWeight = 67.1;
const sourxeHeight = 5.9;

calculateDripSize(sourxeWeight, sourxeHeight);

// Function Expressions

const calculateFreeTime = function(fullDayHours, workHours, sleepHours) {
    const freeTime = fullDayHours - workHours - sleepHours;
    return freeTime;
};

console.log(calculateFreeTime(24, 6, 8));

// Arrays 
let boots = ['F50', 'Preditor', 'Copa', 'Adipure'];
boots[1];
console.log("On the field, I'm a " + boots[1] + ". So that's what I wear.");

boots[3] = 'Toni Boot';
console.log("These are the options I had: " + boots);

console.log("I like the fact that regardless of all the new releases, AdiWorld has kept these " + boots.length + " designs, that were created for different positions on the pitch.");

// The While Loop

let touches = 0; 
while (touches < 65) {
    console.log("There have been games where I have had " + touches + " touch(s) of the ball");
    touches++;
};

let adiVow = "Forever an Adiboy!!!";
let i = 0;

do {
    adiVow = adiVow + i;
    i++;
} while (i < 3);

console.log("Regardless, I'm " + adiVow);

// The Break Keyword

for (let i = 0; i < 10; i++) {
    if (i > 2 ) {
        break;
    }
    console.log('Jesus.');
}

console.log('We praise your Holy Name.'); 

// For...of Loop (String)

for (const char of AdiClub) {
    console.log("Give me a: " + char);
};

console.log("Greatest Club of ALL TIME!!!");

// Objects 
let sourxeBoot = {
    'Boot Type': 'laceless',
    color: 'pink'
};

let sourxeKit = {
    Jersy: 'short sleeve',
    Shorts: 'medium',
    Socks: 'short',
    color: 'red and white'
};

sourxeBoot.color; 
sourxeBoot["Boot Type"];

sourxeKit.Jersy;
sourxeKit.Shorts;
sourxeKit.Socks;

let matchDayFit = (objectName, propName) => 
objectName[propName];

matchDayFit(sourxeKit, 'Jersy'); 

sourxeBoot.color = 'white'; 
sourxeBoot['Stud Type'] = 'grass';

delete sourxeKit.Shorts;

// Methods 

const mathcDayPrayer = {
    pray () {
        console.log("Father God, as I am about to enter the pitch, please be with me. Now and forever, Amen.");
    }
};

mathcDayPrayer.pray(); 

const dreamTeam = {
    stadium: {
        title: 'Old Trafford',
        yearBuilt: 1910,
        capacity: 74000
    },
    team: {
        captain: {
            name: 'Bruno Fernandes',
            num: 8,
            promise() { console.log('We are winning the Premier Legue this season!') }
        }
    },
    sponsor: {
        kit: 'Snapdragon'
    },
    location: {
        geographical: {
            continent: 'Europe',
            country: 'England',
        },
        table: {
            current: '6th',
            final: '1st'
        }
    }
}; 

dreamTeam.location.table.final;

// Pass By Reference 

let renovateIt = obj => {
    obj.capacity = 100000
};

renovateIt(dreamTeam);

dreamTeam.capacity;

console.log("The new Old Trafford is expected to be a " + dreamTeam.capacity + " seater stadium, making it the biggest in Europe.");

// Looping Through Objects (for...in)

let currentTeam = {
    squad: {
        manager: {
            name: 'Ruben Amorim',
            deliverables: 'Create a title winning team',
            philosophy() { console.log('Suffer without the ball, and punish on transitions.')}
        },
        captain: {
            name: 'Bruno Fernandes',
            deliverables: "Translate the manager's tactics to teamates during training and games.",
            cheerTeam() { console.log("Come On Boys!!!")}
        },
        physiotherapist: {
            name: 'Robin Sadler',
            deliverables: 'Make sure that all players are performing at peak capacity and recover well.',
            instruction() { console.log("Complete daily recovery rutine and get enough sleep before matchday.")}
        },
        chef: {
            name: 'Will Carvalho',
            deliverables: 'Cook nutritous food for players and advise them on what to eat at home.',
            advise() { console.log("Eat well when no one is watching and you will play well when all eyes are on you.")}
        }
    }
};

// for...in 
for (let staffMember in currentTeam.squad) {
    console.log(`${staffMember}: ${currentTeam.squad[staffMember].name}`);
};

// Privacy 

const netWorth = {
    _amount: 3000000000
};

netWorth._amount = 3100000000;

// Getters  

const CEO = {
    _firstName: 'Omar',
    _lastName: 'Berrada',
    _age: 46,
    get fullName() {
        if (this._firstName && this._lastName){
            return `${this._firstName} ${this._lastName}`;
        } else {
          return 'Missing a first name or a last name.';  
        }
    }
};

CEO.fullName;
console.log("The club is doing well, thanks to our main guy " + CEO.fullName);


// Setters 
const owner = {
    _age: 72,
    set age(newAge){
        if(typeof newAge === 'number'){
            this._age = newAge;
        } else {
            console.log("You must assign a number to age");
        }
    }
};

owner.age = 73;
console.log("For his " + owner._age + "rd birthday, we will win the premier league for Sir Jim.");

// Abstractions (Functions) Functions as Data

const predictThePlayerOfTheSeason = () => {
    console.log("I think our player of the season will be Bryan Mbuemo.");
};

const starBoy = predictThePlayerOfTheSeason;
starBoy();
















