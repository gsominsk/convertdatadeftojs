module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fAccAP: { public: true, type: 'TEXT' },
     fOnAccAcc: { public: true, type: 'TEXT' },
     fRetainAcc: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex87: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }