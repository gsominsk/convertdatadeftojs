module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fPulseSec: { public: true, type: 'FLOAT' },
     fPulsePrice: { public: true, type: 'FLOAT' },
     fMtxCode: { public: true, type: 'TEXT' } },
  indexes: { CodeIndex391: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }