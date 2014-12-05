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
      clientId: 'MQTTJS_puber',
      keepalive: 30000,
      clean: false,
    });

    client.on('connack', function(packet) {
      if (packet.returnCode !== 0) {
        throw 'Connect error';
      }
      client.publish({
        topic: 'csrgxtu',
        payload: new Buffer('i like you', 'utf8'),
        qos: 2,
        messageId: 1,
      });
      client.on('pubrec', function() {
        console.log("pubrec ok");
        client.pubrel({
          messageId: 1,
        });
        console.log("Send pubrel");
        client.on('pubcomp', function() {
          console.log("pubcomp ok");
        });
        console.log('What the fuck');
      });
    });
});
