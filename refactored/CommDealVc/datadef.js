module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fNumber: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fDutiesCode: { public: true, type: 'TEXT' },
     fGattPrc: { public: true, type: 'FLOAT' },
     fGattAmount: { public: true, type: 'FLOAT' } },
  indexes: { NumberIndex103: { fields: [ 'fNumber', 'fDutiesCode' ], indicesType: 'UNIQUE' } } }