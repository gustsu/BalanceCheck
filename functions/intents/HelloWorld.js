const lib = require('lib');
const https = require("https");
const url = "https://api.etherscan.io/api?module=account&action=balance&address=0xe50474b3f04055089d92ca455ed041296caa694e&tag=latest&apikey=FH12Z2IYGM3JKD1RN42NG6VHSXV73YX61H";

/**
* Basic "Hello World" intent, can receive a `name` parameter
* @param {string} name Your name
* @returns {string}
*/
module.exports = (name = 'World', callback) => {

https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    var bal = body.result[0] + body.result[1] + body.result[2];
    return callback(null, (`Justin's Balance is 0.` + bal + ` Ethereum.`));
  });
});


};
