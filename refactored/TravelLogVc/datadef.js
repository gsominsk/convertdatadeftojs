module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fSerNr: { public: true, type: 'INTEGER' },
     fDescription: { public: true, type: 'TEXT' },
     fUserCode: { public: true, type: 'TEXT' },
     fApprovedBy: { public: true, type: 'TEXT' },
     fOKFlag: { public: true, type: 'INTEGER' },
     fSum: { public: true, type: 'FLOAT' } },
  indexes: { SerNrIndex689: { fields: [ 'fSerNr' ], indicesType: 'UNIQUE' } } }