const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=fec2914dc5d46cb7c705b9a51c6b09e4&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ", it is currently " +
          body.current.temperature +
          " degrees out. Feels like " +
          body.current.feelslike +
          " degrees"
      );
    }
  });
};

module.exports = forecast;
