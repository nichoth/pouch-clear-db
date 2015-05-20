# pouch clear db

Delete all docs in a pouch db.

```js
var Pouch = require('pouchdb');
var cleardb = require('pouch-clear-db');

var db = new Pouch('some-db');
cleardb(db)
  .then(function(resp) {
    console.log("all docs in db have been deleted", resp);
  })
;
```
