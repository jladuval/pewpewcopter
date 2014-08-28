// var arDrone = require('ar-drone'),
//     client  = arDrone.createClient();
//
// client.takeoff();
// client.on('navdata', console.log);
//

 var say = require('say'),
  colors = require('colors'),
  sys = require('sys');

  // output some text to the console as the callback
  say.speak('Good News', 'whats up, dog?', function () {
    sys.puts('text to speech complete'.green);
  });

var arDrone = require('ar-drone');
var fs      = require('fs');

// drone client
var client = arDrone.createClient();

client.takeoff();

// png stream
var pngStream = client.getPngStream();


pngStream.on('error', function () { console.log("error taking pic") }).on('data', function(pngBuffer) {
  var lastPng;
  lastPng = pngBuffer;
  console.info('pic taken, scan for faces');

  cv.readImage("./examples/test.jpg", function(err, im){
      im.detectObject(cv.FACE_CASCADE, {}, function(err, faces){
        if(face.length > 0){
            console.log("face");
        }
      });
  });
});

// set max height to 3 meters, cause ceiling
client.config('control:altitude_max', 3000);

client.takeoff();

client
 .after(5000, function() {
   this.up(0.1);
   this.clockwise(0.5);
 })
 .after(5000, function() {
   client.animateLeds('redSnake', 5, 2);
 })
 .after(10000, function() {
   this.stop();
   this.land();
 });
