var cleardb = require('../');
var Pouch = require('pouchdb');

var db = new Pouch('some-db');
cleardb(db)
  .then(function(resp) {
    console.log("all docs in db have been deleted", resp);
  })
;
