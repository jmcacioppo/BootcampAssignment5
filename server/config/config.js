//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: process.env.URI, //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: ''
  },
  port: process.env.PORT || 8080
};
