const Bookings = require('../data/bookings');
var logger = require('../utilities/loggers');
var bookings = new Bookings();

exports.bookings_get = function(req, res) {
  const dbo = req.app.locals.dbo;
  bookings.getBookings(dbo, function(err, bookingsRes) {
    if (err) {
      logger.error(`GET /bookings : Error reading bookings db`);
      logger.error(`  Error: ${err}`);
    } else {
      if (typeof bookingsRes !== 'undefined') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(bookingsRes, null, 3));
      } else {
        res.writeHead(204);
      }
      res.end();
    }
  });
}

exports.bookings_post = function(req, res) {
  const dbo = req.app.locals.dbo;  
  bookings.postBookings(dbo, req.body, function(err, bookingRes) {
    if (err) {
      logger.error(`POST /bookings : Error writing to bookings db`);
      logger.error(`  Error: ${err}`);
    } else {
      if (typeof bookingRes !== 'undefined' && bookingRes !== null) {
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(bookingRes, null, 3));
      } else {
        res.writeHead(204);
      }
      res.end();
    }
  });
}

exports.bookings_get_id = function(req, res) {
  const dbo = req.app.locals.dbo;
  bookings.getBooking(dbo, req.params.id, function(err, bookingRes) {
    if (err) {
      logger.error(`GET /bookings/{bookingID} : Error reading bookings db`);
      logger.error(`  Error: ${err}`);
    } else {
      if (typeof bookingRes !== 'undefined' && bookingRes !== null) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(bookingRes, null, 3));
      } else {
        res.writeHead(204);
      }
      res.end();
    }
  });
}

exports.bookings_put_id = function(req, res) {
  const dbo = req.app.locals.dbo;
  bookings.putBooking(dbo, req, function(err, bookingRes) {
    if (err) {
      logger.error(`PUT /bookings/{bookingID} : Error writing to bookings db`);
      logger.error(`  Error: ${err}`);
    } else {
      if (typeof bookingRes !== 'undefined' && bookingRes !== null) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(bookingRes, null, 3));
      } else {
        res.writeHead(204);
      }
      res.end();
    }
  });
}

exports.bookings_delete_id = function(req, res) {
  const dbo = req.app.locals.dbo;
  bookings.deleteBooking(dbo, req.params.id, function(err, bookingRes) {
    if (err) {
      logger.error(`DELETE /bookings/{bookingsID} : Error writing to bookings db`);
      logger.error(`  Error: ${err}`);
    } else {
      if (typeof bookingRes !== 'undefined' && bookingRes !== null) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(bookingRes, null, 3));
      } else {
        res.writeHead(204);
      }
      res.end();
    }
  });
}