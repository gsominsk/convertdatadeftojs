module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fVECode: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fStartBal: { public: true, type: 'FLOAT' } },
  indexes: { VECodeIndex321: { fields: [ 'fVECode', 'fTransDate' ], indicesType: 'UNIQUE' } } }