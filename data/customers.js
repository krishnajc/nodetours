var Customers = function() {

  // GET all
  this.getCustomers = function(dbo, callback) {
    dbo.collection("customers").find({}).toArray(function(err, data) {
      // TODO: filter out _id
      if (err) {
        console.log("getCustomers : Error reading bookings db");
        console.log(err);
        callback(err, null);
      } else {
        var customersData = data;
        callback(null, customersData);
      }
    });
  }

  // GET by {id}
  this.getCustomer = function(dbo, id, callback) {
    dbo.collection("customers").findOne({'customer.emailAddress': id}, function(err, data) {
      // TODO: filter out _id
      if (err) {
        console.log("getCustomer : Error reading customers db");
        console.log(err);
        callback(err, null);
      } else {
        var customerData = data;
        callback(null, customerData);
      }
    });
  }

}

module.exports = Customers;
