module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSign: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fPassword: { public: true, type: 'TEXT' },
     fTextStr: { public: true, type: 'TEXT' },
     fMasterPassword: { public: true, type: 'TEXT' },
     fLoginMode: { public: true, type: 'INTEGER' },
     fCompCode: { public: true, type: 'INTEGER' },
     fRememberLoginf: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex54: { fields: [ 'fSign' ], indicesType: 'UNIQUE' } } }