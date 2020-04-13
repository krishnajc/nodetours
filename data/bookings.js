var Bookings = function() {

  // GET all
  this.getBookings = function(dbo, callback) {
    dbo.collection("bookings").find({}).toArray(function(err, data) {
      // TODO: filter out _id
      if (err) {
        console.log("getBookings : Error reading bookings db");
        console.log(err);
        callback(err, null);
      } else {
        var bookingsData = data;
        callback(null, bookingsData);
      }
    });
  }

  // POST booking
  this.postBookings = function(dbo, bookings, callback) {
    // set new booking id for record being instered
    newBookingID = maxBookingID + 1;
    bookings.bookingID = newBookingID;
    // increment global booking id
    maxBookingID++;
    dbo.collection("bookings").insertOne(bookings, function(err, res) {
      if (err) {
        console.log("postBookings : Error writing to bookings db");
        console.log(err);
        callback(err, null);
      } else {
        var result = res;
        // FIXME: set proper 204 response
        callback(null, result);
      }
    });
  }
  
  // GET by {id}
  this.getBooking = function(dbo, id, callback) {
    dbo.collection("bookings").findOne({'bookingID': parseInt(id)}, function(err, data) {
      // TODO: filter out _id
      if (err) {
        console.log("getBooking : Error reading bookings db");
        console.log(err);
        callback(err, null);
      } else {
        var bookingData = data;
        callback(null, bookingData);
      }
    });
  }

  // PUT by {id}
  //this.putBooking
  //TODO: implement

  // DELETE by {id}
  //this.deleteBooking
  //TODO: implement
  
}

module.exports = Bookings;