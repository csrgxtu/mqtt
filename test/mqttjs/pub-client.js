var mqtt = require('mqtt')

client = mqtt.createClient(1884, '127.0.0.1');

client.publish('csrgxtu', 'I like GPS search', {qos: 2}, function(err) {
  if (err) {
    console.log("Error after publishing");
  } else {
    console.log("Yeah");
    client.end();
  }
});
