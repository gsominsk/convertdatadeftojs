module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fCode: { public: true, type: 'TEXT' },
     fComment: { public: true, type: 'TEXT' },
     fBasedOn: { public: true, type: 'INTEGER' },
     fItemCode: { public: true, type: 'TEXT' },
     fMinValue: { public: true, type: 'FLOAT' },
     WebFreightVcMatrix: 
      { public: true,
        type: 'MATRIX',
        label: 'Math',
        fields: 
         { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
           fFromVal: { public: true, type: 'FLOAT' },
           fRate: { public: true, type: 'FLOAT' },
           fBasePrice: { public: true, type: 'FLOAT' } } } },
  indexes: { CodeIndex281: { fields: [ 'fCode' ], indicesType: 'UNIQUE' } } }