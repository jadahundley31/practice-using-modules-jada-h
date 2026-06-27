const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const chalk = require("chalk");

const argv = yargs(hideBin(process.argv)).argv;

const weatherData = {
    "St.Louis": {
        temperature: "75",
        condition: "rainy",
    },
    "Chicago": {
        temperature: "60",
        condition: "cloudy",
    },
    "Los Angeles": {
        temperature: "90",
        condition: "sunny",
    },
    "Miami": {
        temperature: "85",
        condition: "sunny",
    }
};

const city = argv.city;

if (!city) {
    console.log(chalk.red("Please provide a city."));
    console.log("Example:");
    console.log("node app.js --city=\"Los Angeles\"");
} else if (weatherData[city]) {
    console.log(chalk.bold.blue('\n===== WEATHER REPORT =====\n'));
    console.log(chalk.yellow.bold(`Location: ${city}`));
    console.log(chalk.green(`Temperature: ${weatherData[city].temperature}°F`));
    console.log(chalk.cyan(`Conditions: ${weatherData[city].condition}`));
} else {
    console.log(chalk.red(`Sorry, the weather for ${city} is unavailable.`));
}
