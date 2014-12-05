var mqtt = require('mqtt');
var conn = mqtt.createConnection(
  1883,
  'localhost',
  function(err, client) {
    if (err) {
      throw err;
    }
    client.connect({
      protocolId: 'MQIsdp',
      protocolVersion: 3,
      clientId: 'MQTTJS_suber',
      keepalive: 30000,
      clean: false,

    });

    client.on('connack', function(packet) {
      if (packet.returnCode !== 0) {
        throw 'Connect error';
      }
      client.subscribe({
        messageId: 1,
        subscriptions: [{topic: 'example', qos: 2}],
      });

      /*
      client.publish({
        topic: 'example',
        payload: new Buffer('example', 'utf8'),
        qos: 2,
        messageId: 1,
      });*/
      console.log("Debug here");
      client.end();
    });
});
