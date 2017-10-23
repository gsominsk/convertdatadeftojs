module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCarCode: { public: true, type: 'TEXT' },
     fCarName: { public: true, type: 'TEXT' },
     fCarNumber: { public: true, type: 'TEXT' },
     fDriver: { public: true, type: 'TEXT' },
     fUsedBy: { public: true, type: 'TEXT' },
     fPetroilCode: { public: true, type: 'TEXT' },
     fNormAmount: { public: true, type: 'FLOAT' },
     fComment: { public: true, type: 'TEXT' } },
  indexes: { CarCodeIndex314: { fields: [ 'fCarCode' ], indicesType: 'UNIQUE' } } }