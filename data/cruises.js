const logger = require('../utilities/loggers')

const Cruises = function() {
  // GET all
  this.getCruises = function(dbo, callback) {
    dbo.collection('cruises').find({}).toArray(function(err, data) {
      // TODO: filter out _id
      if (err) {
        logger.error(`getCruises : Error reading cruises db`);
        logger.error(`  Error: ${err}`);
        callback(err, null);
      } else {
        let cruisesData = data;
        callback(null, cruisesData);
      }
    });
  }
  
  // GET by {id}
  this.getCruise = function(dbo, id, callback) {
    dbo.collection("cruises").findOne({'cruiseID': id}, function (err, data) {
      // TODO: filter out _id
      if (err) {
        logger.error(`getCruise(id): Error reading cruises db`);
        logger.error(`  Error: ${err}`);
        callback(err, null);
      } else {
        let cruisesData = data;
        callback(null, cruisesData);
      }
    });
  }
}

module.exports = Cruises;