# twitmon
poc code for twitter keyword monitoring 

# Twitmon
-- poc code for twitter keyword monitoring  --
Using the twitter [streaming API] (https://dev.twitter.com/streaming/public) we gather data and feed it to an Influx DB for trend monitoring and much more.  

## Installation
Clone or donwload the repo then run:
`npm install` 

## Usage

You will need to update twitmon.js file with your twitter API info. Current set up to push data to Influx DB but you could easily update for export to file or other datastores. 

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

The idea that patterns in tweet data could be monitored to better understand price fluxauations is what inititally drove this PoC.  However there are lots of other cool things to be done with twitter keyword monitoring as well. 

## Credits

geode.io team (underground for now) 

## License

MIT
