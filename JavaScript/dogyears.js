let myAge = 28;

let earlyYears = 2;
earlyYears *= 10.5;

let laterYears = myAge -2;
laterYears *= 4;

const myAgeInDogYears = earlyYears + laterYears;

const myName = 'Sourxe'.toUpperCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);

if (myAge >= 28 && myAgeInDogYears >= 120) {
    console.log("I'm a Big Dawg!!!");
} else {
    console.log("I'm a Lil Dawg!!!");
}; 

// Default Parameters
function callAllMyDawgs(name = 'Stray') {
    console.log(`Wassgud, ${name}!`)
}

callAllMyDawgs('Hefe');
callAllMyDawgs();

// Arrow functions (Function Expression)

const standUpHeight = (length, height) => {
    let standUp = length + height;
    return standUp;
}; 
console.log(standUpHeight(83, 46));

// Implicit return (Single-Line Block)

const dogDay = day => day * 24;

console.log(dogDay(365));

// Global Scope 

const breed = 'Pit Bull';

const returnDogBreed = () => {
    return breed;
};

console.log(returnDogBreed());

// Block Scope (local variables)

const logDogBreed = () => {
    let breed = 'Rotwieler';
    console.log(breed);
};

logDogBreed(); 

// Arrays and functions

const dogNames = [' Booby', ' Rex', ' Waggy', ' Bruno', ' Que'];

function newNames(arr) {
    arr.push(' Pixy', ' Creed');
}

newNames(dogNames);

console.log("If you're not sure what to name your dog, here is a list of suggestions: " + dogNames);

// Nested Arrays 

const namePairs = [[' Andy', ' Mandy'], [' Ulo', ' Dre'], [' Ed', ' Fred', ' Reggie']];

console.log("If you have multiple dogs, you can give them names that compliment each other. Like this: " + namePairs[1] + " or: " + namePairs[2]);

console.log("Real Dawgs know what" + namePairs[2][2] + " means, so I doubt they would take that name."); 

// Nested Loops 
const whiteDogs = [' Tex', ' Eulogy', ' Bobby'];
const blackDogs = [' Bobby', ' Spoti', ' Mzwamandla'];

for (let i = 0; i < whiteDogs.length; i++) {
    for (let j = 0; j < blackDogs.length; j++) {
        if (whiteDogs[i] === blackDogs[j]) {
            console.log("Whether you're black or white" + blackDogs[j] + " is a fitting name for your dog.");
        }
    }
};

// Continue Keyword

for (const tag of dogNames) {
    if (tag === ' Waggy'){
        continue;
    }
    console.log("Real Nigga Options: " + tag);
};

// The this keyword (Objects)

const wolf = {
    dietType: 'carnivore',
    collective: 'pack',
    howl() {
        console.log('awoooo');
    },
    diet() {
        console.log(this.dietType);
    },
    family() {
        console.log(this.collective);
    }
};

wolf.howl();
wolf.diet();
wolf.family();

// Factory Functions (Property value shorthand)

const wolfPack = (name, age, order, howl) =>{
    return {
        name,
        age,
        order,
        howl() {
            console.log(howl);
        }
    }
}; 

const leader = wolfPack('Sourxe', 28, 'Alpha', 'Awoooo');
leader.howl();

// Destructured Assignment

const commander = {
    name: 'Black Khan',
    age: 29,
    order: 'General',
    roles: {
        day: 'Back up',
        night: 'Lead'
    }
};

const { order } = commander;
console.log("In my absence, Hefe will be the " + order + " of the pack.");

const { day } = commander.roles;
const { night } = commander.roles;

console.log("From sunrise to sunset, he will be my " + day + ", and from sunset to sunrise he will " + night + " the pack.");

// Functions as Parameters (Callback Functions)

const hunt = (hunt) => {
    hunt();
    return `Get into formation it's time to ${hunt.name} gang!`
};

const attack = () => {
    return 'Awooo, Charge!!!';
};

hunt(attack);

console.log(hunt(attack)); 

hunt(() => {
    for (let i = 1; i <= 8; i++){
        console.log(i + "Attack!!!");
    }
});

// Iterators
// The .map() Method 

const tagNames = dogNames.map(dogNames => {
    return 'My name is' + dogNames;
});

console.log(tagNames);

// The .filter() Method 

const shortNames = dogNames.filter(dogNames => {
    return dogNames.length < 5;
});

console.log(shortNames + ' are short names.');

























