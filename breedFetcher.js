const fs = require('fs');
let args = process.argv.slice(2);
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    // converts the JSON string into an actual object
    const data = JSON.parse(body);
console.log(data);
console.log(typeof data);

// Access the first entry in the data array and print out the description for the user.
return callback(null, data[0].description);

});
};


fetchBreedDescription(args[0], (error, desc) => {
    if (error) {
      console.log("Error fetch details: ", error);
    } else {
      console.log(desc);
    }
  });

console.log(typeof body);

