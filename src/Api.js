import key from './apiKey';

const root = 'https://api.wunderground.com';
const extentions = '/conditions/forecast/hourly/geolookup/forecast10day/q/';

const fetchWeather = (location) => {
  return fetch(`${root}/api/${key}${extentions}${location}.json`);
};

export default fetchWeather;