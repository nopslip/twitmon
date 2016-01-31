use strict";

var Twitter = require('twitter');
var influx = require('influx'); // influx node library

/* Twitter ish yo. fill in the blanks*/
var t_client = new Twitter({
                consumer_key: '',
                consumer_secret: '',
                access_token_key: '',
                access_token_secret: ''
     });

// define local influx deets
var client = influx({
  host : 'localhost',
  port : 8086, // optional, default 8086
  protocol : 'http', // optional, default 'http'
  //username : 'dbuser',
  //password : 'f4ncyp4ass',
  database : 'bitfinex_TEST'
})

client.getDatabaseNames( function(err,arrayDatabaseNames){console.log(arrayDatabaseNames);} );

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var series = 'tweets'

/**
* Stream statuses filtered by keyword
* number of tweets per second depends on topic popularity
**/
var cunt = 0 // counter

t_client.stream('statuses/filter', {track: 'bitcoin'},  function(stream){
                stream.on('data', function(tweet) {
                        var currentTime = new Date()
                        console.log(cunt,currentTime, tweet.text);
                        client.writePoint(series,{time: new Date(), value: cunt}, { tag: 'bitcoin'}, function(err, response) {
                        });
                        cunt++
                }); //client.on.data

                stream.on('error', function(error) {
                        console.log(error);
                }); //stream.on.error

   }); //client.stream
