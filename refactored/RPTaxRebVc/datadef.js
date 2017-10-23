module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fFrom: { public: true, type: 'DATE' },
     fTAX2Reb: { public: true, type: 'FLOAT' } },
  indexes: { CodeIndex487: { fields: [ 'fCode', 'fCustCode' ], indicesType: 'UNIQUE' } } }