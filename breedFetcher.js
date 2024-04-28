
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    // converts the JSON string into an actual object
    const data = JSON.parse(body);


    // Edge case: Handle request errors and print the error details to the screen.
    if (error) {
      callback("error", null);
      return;
    }
  
    // Edge Case: Breed Not Found ->  output an appropriate message if the requested breed is not found.
    if (data.length === 0) {
      callback("Invalid breed", null);
      return;
    }

    // Access the first entry in the data array and print out the description for the user.
    return callback(null, data[0].description);

  });
};

module.exports = { fetchBreedDescription };