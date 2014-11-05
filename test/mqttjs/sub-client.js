var mqtt = require('mqtt')

client = mqtt.createClient(1884, '127.0.0.1');

var options = {
  qos: 2,
};

client.subscribe('csrgxtu', options);

client.on('message', function (topic, message) {
  console.log(message);
});

