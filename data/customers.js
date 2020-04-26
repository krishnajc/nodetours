var logger = require('../utilities/loggers')

var Customers = function() {

  // GET all
  this.getCustomers = function(dbo, callback) {
    dbo.collection("customers").find({}).toArray(function(err, data) {
      // TODO: filter out _id
      if (err) {
        logger.error("getCustomers : Error reading customers db")
        logger.error("  Error: " + err)
        callback(err, null);
      } else {
        var customersData = data;
        callback(null, customersData);
      }
    });
  }

  // POST customers
  this.postCustomers = function(dbo, customers, callback) {
    dbo.collection("customers").insertOne(customers, function(err, res) {
      if (err) {
        logger.error("postCustomers : Error writing to customers db")
        logger.error("  Error: " + err)
        callback(err, null);
      } else {
        var result = res;
        // FIXME: set proper 204 response
        callback(null, result);
      }
    });
  }

  // GET by {id}
  this.getCustomer = function(dbo, id, callback) {
    dbo.collection("customers").findOne({'customer.emailAddress': id}, function(err, data) {
      // TODO: filter out _id
      if (err) {
        logger.error("getCustomer(id) : Error reading customers db")
        logger.error("  Error: " + err)
        callback(err, null);
      } else {
        var customerData = data;
        callback(null, customerData);
      }
    });
  }

  // PUT by {id}
  this.putCustomer = function (dbo, req, callback) {
    dbo.collection("customers").findOneAndUpdate(
      {'customer.emailAddress': req.params.id},
      {$set: JSON.parse(JSON.stringify(req.body))},
      function(err, res) {
        if (err) {
          // FIXME: cancel processing in case of error
          logger.error("putCustomer : Error writing customers db")
          logger.error("  Error: " + err)
          callback(err, null);
        } else {
          // FIXME: set proper response body
          // FIXME: handle cases where bookings doesn't exist
          var result = res;
          callback(null, result);
        }
    });
  }
  
  // DELETE by {id}
  this.deleteCustomer = function(dbo, id, callback) {
    dbo.collection("customers").findOneAndDelete({'customer.emailAddress': id}, function(err, res) {
      if (err) {
        logger.error("deleteCustomer : Error writing to customers db")
        logger.error("  Error: " + err)
        callback(err, null);
      } else {
        // FIXME: set proper response body
        // FIXME: handles cases when booking doesn't exist
        var result = res;
        callback(null, result);
      }
    });
  }

}

module.exports = Customers;
