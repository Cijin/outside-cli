const ora = require("ora");
const getWeather = require("../utils/weather");

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const city = args.city || args.c;
    const { cloudCoverage, temperature, weatherDescription } = await getWeather(
      city
    );

    spinner.stop();

    console.log(`Current conditions in ${city}:`);
    console.log(
      `\t${temperature}°, ${weatherDescription}, ${cloudCoverage}% Cloud Coverage`
    );
  } catch (err) {
    spinner.stop();

    console.error(err);
  }
};
