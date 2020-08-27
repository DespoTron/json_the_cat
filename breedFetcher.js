const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q='
let breedNames = process.argv.slice(2);

request(url + breedNames, (error, response, body) => { 
  if(error) { 
    console.log('Error:', error); 
}
 console.log('statusCode:', response && response.statusCode); 
 console.log('Body:', typeof body) 
 const data = JSON.parse(body); 
 console.log(data[0].description); 
 console.log(typeof data);

});