var mqtt = require('mqtt')

client = mqtt.createClient(1883, '127.0.0.1');

client.publish('csrgxtu', 'I like GPS search');

client.end();
