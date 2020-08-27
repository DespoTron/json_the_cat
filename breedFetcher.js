const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breedNames = process.argv.slice(2);
const urlSearchBreedName = url + breedNames;

request(urlSearchBreedName, (error, response, body) => {
  if (error) {
    console.log('Wrong URL Entered', error);
  }

  //console.log('statusCode:', response && response.statusCode);
  //console.log('Body:', typeof body);
  const data = JSON.parse(body);
  const breedName = data[0]
  if(breedName === undefined) {
    console.log('Error unknown Cat!');
  } else {
    console.log(breedName.description);
    console.log(typeof data);
  }

});
