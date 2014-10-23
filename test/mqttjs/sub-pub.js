var mqtt = require('mqtt')

client = mqtt.createClient(1883, '124.232.154.82');

client.subscribe('presence');
client.publish('presence', 'Hello mqtt');

client.on('message', function (topic, message) {
  console.log(message);
});

client.end();