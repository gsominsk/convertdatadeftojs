module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fLookupServIP: { public: true, type: 'TEXT' },
     fLookupServPort: { public: true, type: 'INTEGER' },
     fManualsServIP: { public: true, type: 'TEXT' },
     fLookupServHTTPPort: { public: true, type: 'INTEGER' } } }