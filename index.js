module.exports = function clearDb(db) {
  return db.allDocs({include_docs: true})
    .then(function(resp) {

      var docs = resp.rows.map(function(row) {
        row.doc._deleted = true;
        return row.doc;
      });

      return db.bulkDocs(docs);
    }).then(function() {
      return db.compact();
    })
  ;
};
