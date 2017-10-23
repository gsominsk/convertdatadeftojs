module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fGattPrc: { public: true, type: 'FLOAT' },
     fGattAmount: { public: true, type: 'FLOAT' },
     fVATFlag: { public: true, type: 'INTEGER' },
     fCalcMethod: { public: true, type: 'INTEGER' },
     fSpecial: { public: true, type: 'FLOAT' } },
  indexes: { CodeIndex106: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }