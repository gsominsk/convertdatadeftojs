module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCurncyCode: { public: true, type: 'TEXT' },
     fDate: { public: true, type: 'DATE' },
     fPLToRate1: { public: true, type: 'FLOAT' },
     fPLToRate2: { public: true, type: 'FLOAT' },
     fPLFrRate: { public: true, type: 'FLOAT' },
     fBalToRate1: { public: true, type: 'FLOAT' },
     fBalToRate2: { public: true, type: 'FLOAT' },
     fBalFrRate: { public: true, type: 'FLOAT' } },
  indexes: { CDKeyIndex762: { fields: [ 'fCurncyCode', 'fDate' ], indicesType: 'UNIQUE' } } }