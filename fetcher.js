const request = require('request');
const fs = require('fs');

var args = process.argv.slice(2);
const url = args[0]
const filePath = args[1]

const fetcher = function (url, filePath) {
  request(url, (error, response, body) => {
    if (error) {
      console.error(error);
    }
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    fs.writeFile(filePath, body, err => {
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
      if (err) {
        console.error(err);
      }
    });
  });
}
fetcher(url, filePath)



