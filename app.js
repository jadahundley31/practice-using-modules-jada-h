// const yargs = require('yargs');
// const { hideBin } = require('yargs/helpers');

// const chalk = require(`chalk`);

// const argv = yargs(hideBin(process.argv))

// .option(`city`, { 
//     describe: `city name used to retrieve weather information`, demandOption: true, 
//     type: `string`})
    
// .help()
// .argv;

// const weatherData = {
//     "St.Louis": {
//         temperature: "75",
//         condition: "rainy",
//     },
//     "Chicago": {
//         temperature: "60",
//         condition: "cloudy",
//     },
//     "Los Angeles": {
//         temperature: "90",
//         condition: "sunny",
//     },
//     "Miami": {
//         temperature: "85",
//         condition: "sunny",
//     }
// };

// console.log(weatherData);
// const weather = weatherData[argv.city];
// console.log(weather);


// Import required modules
const yargs = require('yargs');
const chalk = require('chalk');
// Configure command line arguments using yargs
const argv = yargs
    .option('city', {
    describe: 'City name used to retrieve weather information',
demandOption: true,
type: 'string'
})
.help()
.argv;
function getWeatherData(city) {
// Convert city name to lowercase for case-insensitive comparison
const cityLower = city.toLowerCase().trim();
// Define weather data for different cities
const weatherData = {
'new york': {
temperature: 72,
conditions: 'Partly Cloudy',
humidity: 65,
windSpeed: 8
},
'london': {
temperature: 60,
conditions: 'Rainy',
humidity: 80,
windSpeed: 12
},
'tokyo': {
temperature: 80,
conditions: 'Sunny',
humidity: 40,
windSpeed: 5
},
'sydney': {
temperature: 85,
conditions: 'Clear',
humidity: 35,
windSpeed: 10
}
};
// Return data for the requested city or a default response
return weatherData[cityLower] || {
temperature: 0,
conditions: 'Unknown',
humidity: 0,
windSpeed: 0
};
}
function displayWeather(city, weatherData) {
console.log(chalk.bold.blue('\n===== WEATHER REPORT =====\n'));
console.log(chalk.yellow.bold(`Location: ${city}`));
console.log(chalk.green(`Temperature:
${weatherData.temperature}°F`));
console.log(chalk.cyan(`Conditions: ${weatherData.conditions}`));
console.log(chalk.magenta(`Humidity: ${weatherData.humidity}%`));
console.log(chalk.red(`Wind Speed: ${weatherData.windSpeed} mph`));
console.log(chalk.bold.blue('\n=========================\n'));
}
// Main
function main() {
try {
// Get the city from command line arguments
const city = argv.city;
// Simulate fetching weather data
console.log(chalk.dim(`Fetching weather data for ${city}...`));
const weatherData = getWeatherData(city);
// Display the weather information
displayWeather(city, weatherData);
} catch (error) {
console.error(chalk.bgRed.white(' ERROR '),
chalk.red(error.message));
}
}
// Run the application
main();
