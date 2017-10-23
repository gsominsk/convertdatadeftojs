module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fPBXID: { public: true, type: 'TEXT' },
     fVECode: { public: true, type: 'TEXT' },
     fVEName: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex396: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }