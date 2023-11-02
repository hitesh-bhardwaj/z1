const https = require('https');
 
const options = {
  hostname: 'weareenigma.com',
  port: 443,
  path: '/',
  method: 'GET',
  headers: {
    'Accept-Encoding': 'gzip',
  },
};
 
const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
 
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});
 
req.on('error', (error) => {
  console.error(error);
});
 
req.end();