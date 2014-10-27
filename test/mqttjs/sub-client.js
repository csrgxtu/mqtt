var mqtt = require('mqtt')

client = mqtt.createClient(1883, '127.0.0.1');

client.subscribe('csrgxtu');

client.on('message', function (topic, message) {
  console.log(message);
});

