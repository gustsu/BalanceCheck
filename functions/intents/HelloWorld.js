const lib = require('lib');
const https = require("https");
const url = "https://api.etherscan.io/api?module=account&action=balance&address=0xe50474b3f04055089d92ca455ed041296caa694e&tag=latest&apikey=FH12Z2IYGM3JKD1RN42NG6VHSXV73YX61H";

/**
* Basic "Hello World" intent, can receive a `name` parameter
* @param {string} name Your name
* @returns {string}
*/
module.exports = (name = 'World', callback) => {
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://api.etherscan.io/api?module=account&action=balance&address=0xe50474b3f04055089d92ca455ed041296caa694e&tag=latest&apikey=FH12Z2IYGM3JKD1RN42NG6VHSXV73YX61H", true);
// xhr.send();
// xhr.onreadystatechange = processRequest;
// function processRequest(e) {
//   var response = JSON.parse(xhr.responseText);
//   var bal = (response.result / Math.pow(10, response.result.length));
//   return callback(null, (`Justin's Balance is ` + bal));
// }
https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    return callback(null, (`Justin's Balance is 0.` + body.result.toFixed(4) + ` Ethereum. I will be able to tell you Ralph's Balance soon.`));
  });
});


};
