module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fCustCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fFrom: { public: true, type: 'DATE' },
     fTAX1Reb: { public: true, type: 'FLOAT' } },
  indexes: { CodeIndex488: { fields: [ 'fCode', 'fCustCode' ], indicesType: 'UNIQUE' } } }