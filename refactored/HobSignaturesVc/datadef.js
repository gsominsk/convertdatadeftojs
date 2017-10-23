module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSignature: { public: true, type: 'TEXT' },
     fProtVer: { public: true, type: 'INTEGER' },
     fName: { public: true, type: 'TEXT' },
     fProduct: { public: true, type: 'INTEGER' },
     fStatus: { public: true, type: 'INTEGER' } },
  indexes: 
   { MainKeyIndex550: 
      { fields: [ 'fSignature', 'fProtVer', 'fProduct' ],
        indicesType: 'UNIQUE' } } }