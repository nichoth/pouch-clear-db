module.exports = function clearDb(db) {
  db.allDocs({include_docs: true}).then(function(resp) {
    var docs = resp.rows.map(function(row) {
      row.doc._deleted = true;
      return row.doc;
    });
    return db.bulkDocs(docs);
  });
};
