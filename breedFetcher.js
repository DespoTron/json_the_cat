const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breedNames = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, response, body) => {
    const data = JSON.parse(body);
    const breedName = data[0];

    if (error) {
      callback('Wrong URL Entered', error);
    } else if (breedName === undefined) {
      callback('Error unknown Cat!', );
    } else {
      callback(null, breedName.description);
    }
  });
};

module.exports = { fetchBreedDescription };