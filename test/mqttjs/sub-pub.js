var mqtt = require('mqtt')

client = mqtt.createClient(1883, '127.0.0.1');

client.subscribe('presence');
client.publish('presence', 'Hello mqtt');

client.on('message', function (topic, message) {
  console.log(message);
});

client.end();
