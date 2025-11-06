let kelvin = 283;
let celsius = kelvin - 273;
let fahrenheit = celsius *(9/5) + 32;
console.log(`${kelvin} K = ${celsius} °C = ${fahrenheit} °F`);

kelvin = 263;
celsius = kelvin - 273;
fahrenheit = celsius *(9/5) + 32;
console.log(`${kelvin} K = ${celsius} °C = ${fahrenheit} °F`);

kelvin = 643;
celsius = kelvin - 273;
fahrenheit = celsius *(9/5) + 32;
console.log(`${kelvin} K = ${celsius} °C = ${fahrenheit} °F`);

kelvin = 300;
celsius = kelvin - 273;
fahrenheit = celsius *(9/5) + 32;
console.log(`${kelvin} K = ${celsius} °C = ${fahrenheit} °F`);

let aditemp = 1;
celsius = aditemp * 10;
fahrenheit = celsius *(9/5) + 32;
console.log(`${aditemp} AT = ${celsius} °C = ${fahrenheit} °F`);

aditemp = -8;
celsius = aditemp * 10;
fahrenheit = celsius *(9/5) + 32;
console.log(`${aditemp} AT = ${celsius} °C = ${fahrenheit} °F`);

if (aditemp >= 7 || celsius >= 70 || fahrenheit >= 350) {
    console.log("It's Lit!!!");
} else {
    console.log("It's Chilled Bro!!!");
};

if (aditemp <= 0) {
    console.log("In Fact, It's Ice Cold!!!");
};

// Return (Function)

function daylightHours(sunset, sunrise) {
    let hours = sunset - sunrise;
    return hours;
}
console.log(Math.floor(daylightHours(18.30, 5.45)));

// Helper Functions

function multiplyByNineFiths(number) {
    return number * (9/5);
};

function getFahrenheit(celsius) {
    return multiplyByNineFiths(celsius) + 32;
};

console.log(Math.floor(getFahrenheit(15)));

// The .push() Method (Arrays)

const countriesToVisit = [' Russia', ' England', ' Iceland', ' Norway', ' Sweden', ' Finland', ' Denmark', ' Australia', ' Costa Rica', ' Fiji', ' Indonesia'];

countriesToVisit.push(' USA', ' Thailand', ' Seychelles', ' Croatia', ' Greece', ' Maldives');

console.log("This is a list of countries I will be visiting in the coming years: " + countriesToVisit);

// The .pop() Method 

const removed = countriesToVisit.pop();

console.log( "I might not have enough time to visit all the mentioned countries in 2026. I will move my trip to the " + removed + " to 2027.");

// The .join() Method 

const withSeperators = countriesToVisit.join(' &');

console.log('Countries to visit in 2026:', withSeperators);

// The .slice() Method 

const winterVisits = countriesToVisit.slice(0, 7);

console.log("These are the countries that are best to visit when it's Cold: " + winterVisits);

const springVisits = countriesToVisit.slice(7, 11);

console.log("During the rainy season, I'll be visiting: " + springVisits);

const summerVisits = countriesToVisit.slice(-5);

console.log("Then finally, I'll be enjoying the beach in the following countries: " + summerVisits);

// The .splice() Method 

const historicalVisits = countriesToVisit.splice(16, 0, ' Egypt', ' China', ' Japan');

console.log("All of the above mentioned trips are recreational, I will also be taking educational trips. So here is a complete list of all the countries I'll be visiting in 2026: " + countriesToVisit);


// The .shift() and .Unshift() Method

const warCountry = countriesToVisit.shift();

console.log("Since " + warCountry + " has been sanctioned, I don't think it's a good idea to go there right now. I guess I'll just be going to " + countriesToVisit); 

countriesToVisit.unshift(' Spain');

console.log("The 2026 budget has already been allocated for 19 trips, so I will go to Espanya instead. So here is the final list: " + countriesToVisit);

// Looping through Arrays 

for (let i = 11; i < countriesToVisit.length; i++){
    console.log(countriesToVisit[i] + " I'll see you in the Summer!!!");
};

// For...of Loop (Cleaner syntax)

for (const country of countriesToVisit) {
    console.log("I love " + country);
};

// Break Keyword

for (const winter of countriesToVisit) {
    if (winter === ' Australia'){
        break;
    }
    console.log(winter + " I'll see you in the winter!!!");
};

// Iterators 
// The .forEach() Method 

countriesToVisit.forEach(countriesToVisit =>
    console.log(' - ' + countriesToVisit));

const printCountries = (arr) => {
    console.log(' * ' + countriesToVisit);
};

countriesToVisit.forEach(printCountries);

// The .findIndex() Method 

const smallCountries = countriesToVisit.findIndex(countriesToVisit => {
    return countriesToVisit.length < 5;
});

console.log(smallCountries);









