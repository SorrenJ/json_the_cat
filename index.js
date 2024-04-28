/* This file will be the one that users can run 
and provide the breed name to. 
It will then require the breedFetcher file and call its exported function.
*/
const args = process.argv.slice(2);
const { fetchBreedDescription } = require('./breedFetcher');


// Edge case: Handle request errors and print the error details to the screen.
fetchBreedDescription(args[0], (error, desc) => {
    if (error) {
      console.log("Error fetch details: ", error);
    } else {
      console.log(desc);
    }
  });
  
  //console.log(typeof body);