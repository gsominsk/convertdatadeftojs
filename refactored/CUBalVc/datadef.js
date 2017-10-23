module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCUCode: { public: true, type: 'TEXT' },
     fTransDate: { public: true, type: 'DATE' },
     fStartBal: { public: true, type: 'FLOAT' } },
  indexes: { CUCodeIndex322: { fields: [ 'fCUCode', 'fTransDate' ], indicesType: 'UNIQUE' } } }