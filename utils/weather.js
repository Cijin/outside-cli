require("dotenv").config();
const axios = require("axios");

const apiKey = process.env.WEATHER_API_KEY;

module.exports = async (city) => {
  const results = await axios({
    method: "get",
    url: "https://api.weatherbit.io/v2.0/current",
    params: {
      key: apiKey,
      city: city,
    },
  });

  const cloudCoverage = results.data.data[0].clouds;
  const temperature = results.data.data[0].temp;
  const weatherDescription = results.data.data[0].weather.description;

  return {
    cloudCoverage,
    temperature,
    weatherDescription,
  };
};
