var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listings = require('./ListingSchema.js'), 
    config = require('./config');

/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listings.find({name: 'Library West'}, function(err, libWest) {
    if (err) throw err;
    console.log("Library West Entry is:")
    console.log(libWest);
   });

};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

  Listings.findOneAndRemove({ code: 'CABL' }, function(err) {
    if (err) throw err;

    console.log('Cable deleted!');
  });
};

var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

   Listings.findOneAndUpdate({name: 'Phelps Laboratory'}, {address: "123 boogie woogie lane"}, {returnNewDocument : true}, function(err, lab) {
    if (err) throw err;
    console.log("Updated Phelps Lab:")
    console.log(lab);
   });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

   Listings.find({}, function(err, listings) {
    if (err) throw err;
    console.log("Retreived all listings:");
    console.log(listings)
   });
};

mongoose.connect(config.db.uri);

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();