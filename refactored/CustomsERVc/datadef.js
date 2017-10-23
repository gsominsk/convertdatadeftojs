module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCurncyCode: { public: true, type: 'TEXT' },
     fDate: { public: true, type: 'DATE' },
     fToRate1: { public: true, type: 'FLOAT' },
     fToRate2: { public: true, type: 'FLOAT' },
     fFrRate: { public: true, type: 'FLOAT' } },
  indexes: { CDKeyIndex107: { fields: [ 'fCurncyCode', 'fDate' ], indicesType: 'UNIQUE' } } }