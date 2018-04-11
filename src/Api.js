import key from './apiKey';

const root = 'http://api.wunderground.com';
const extentions = '/conditions/forecast/hourly/geolookup/forecast10day/q/'

const fetchWeather = (location) => {
  return fetch(`${root}/api/${key}${extentions}${location}.json`)
}

export default fetchWeather;

// 'http://api.wunderground.com/api/b2e64fbf73098622/geolookup/conditions/q/IA/Cedar_Rapids.json'