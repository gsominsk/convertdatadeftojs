module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fTransDate: { public: true, type: 'DATE' },
     fAmount: { public: true, type: 'FLOAT' },
     fComment: { public: true, type: 'TEXT' },
     fExpiryDate: { public: true, type: 'DATE' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' },
     fBarCode: { public: true, type: 'TEXT' },
     fFileName: { public: true, type: 'TEXT' },
     fTransNr: { public: true, type: 'INTEGER' },
     fType: { public: true, type: 'TEXT' } },
  indexes: { SerNrIndex416: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }