//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: process.env.URI || 'mongodb://jmcacioppo:bootcamp4@ds129344.mlab.com:29344/bootcamp4', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: process.env.MAPS || 'AIzaSyBirIOtBQayM3OdXm9KIIxyy_PeG5ET8G8'
  },
  port: process.env.PORT || 8080
};