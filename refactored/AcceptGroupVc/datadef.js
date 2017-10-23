module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fName: { public: true, type: 'TEXT' },
     fPersons: { public: true, type: 'TEXT' },
     fNextGroup: { public: true, type: 'TEXT' },
     fType: { public: true, type: 'INTEGER' },
     fValLimit: { public: true, type: 'FLOAT' },
     fITGroup: { public: true, type: 'TEXT' },
     fIntORFlag: { public: true, type: 'INTEGER' },
     fPOFlag: { public: true, type: 'INTEGER' },
     fVIFlag: { public: true, type: 'INTEGER' } },
  indexes: { CodeIndex439: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }